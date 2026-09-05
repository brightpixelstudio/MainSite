import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogType } from '../../enums/blogtype';
import { GetAllBlogPosts } from '../../models/getallblogposts';
import { GetAllBlogTypes } from '../../models/getallblogtypes';
import { GetAllBlogPostYears } from '../../models/getallblogpostyears';
import { GetBlogPostsBasedOnTypeAndYear } from '../../models/getblogpostsbasedontypeandyear';
import { GetLatestBlogPosts } from '../../models/getlatestblogposts';
import { GetAllPostsCountByYearByCategory } from '../../models/getallpostscountbyyearbycategory';
import { GetAllPostsCountByYearByMonth } from '../../models/getallpostscountbyyearbymonth';
import { truncateString, allBlogPostList } from '../../utils/utils';

@Component({
  selector: 'blog',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  blogtypeid: number | undefined = BlogType.Design;
  year: number = new Date().getFullYear();
  month: number | undefined;
  isContentLoaded: boolean = false;
  noContent: boolean = true;
  blogpostid: number = 5;
  getBlogInformation: any[] = [];
  allBlogPostList: GetAllBlogPosts[] = [];
  getAllBlogTypes: GetAllBlogTypes[] = [];
  getAllBlogPostYears: GetAllBlogPostYears[] = [];
  getBlogPostsBasedOnTypeAndYear: GetBlogPostsBasedOnTypeAndYear[] = [];
  getAllPostsCountByYearByCategory: GetAllPostsCountByYearByCategory[] = [];
  getAllPostsCountByYearByMonth: GetAllPostsCountByYearByMonth[] = [];
  getLatestBlogPosts: GetLatestBlogPosts[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAllPosts();
    this.loadAllBlogPostYears();
    this.loadAllBlogTypes();
    this.loadPosts();
  }

  onCatagorySelect(selectedValue: any): void {
    this.blogtypeid = Number(selectedValue);
    this.month = undefined;
    this.loadPosts();
  }

  onYearSelect(selectedValue: any): void {
    this.year = Number(selectedValue);
    this.month = undefined;
    this.loadPosts();
  }

  onCategoryLinkClick(event: MouseEvent, blogtypeid: number) {
    // Prevent the browser from navigating to the href URL
    event.preventDefault();

    // set the new catagory type and get contents
    this.month = undefined;
    this.blogtypeid = blogtypeid;
    this.loadPosts();
  }

  onArchiveLinkClick(event: MouseEvent, month: number) {
    // Prevent the browser from navigating to the href URL
    event.preventDefault();

    // set the new catagory type and get contents
    this.blogtypeid = undefined;
    this.month = month;
    this.loadPosts();
  }

  loadAllPosts() {
    // get posts from util component
    this.allBlogPostList = allBlogPostList();
  }

  private loadAllBlogPostYears() {
    // get all blog post years (Change to API call later)
    const unique = [...new Set(this.allBlogPostList.map((item) => item.dateposted.getFullYear()))];
    this.getAllBlogPostYears = unique.map((year) => ({ uniqueyear: year }));
  }

  private loadAllBlogTypes() {
    // get all blog post years (Change to API call later)
    const unique = [
      ...new Map(this.allBlogPostList.map((item) => [item.blogtypeid, item])).values(),
    ];

    this.getAllBlogTypes = unique.map((item) => ({
      blogtypeid: item.blogtypeid,
      category: item.category,
    }));
  }

  private loadPosts(): void {
    // get ALL Blog information
    this.isContentLoaded = false;
    this.noContent = false;

    // get the blog posts based on the year, month, and blog type
    this.getBlogPostsBasedOnTypeAndYear = this.filterBlogPostsBasedOnTypeAndYear(
      this.allBlogPostList,
      this.year,
      this.blogtypeid,
      this.month,
    );

    // get the latest blog posts
    const posts = [...this.allBlogPostList]
      .sort((a, b) => b.dateposted.getTime() - a.dateposted.getTime())
      .slice(0, 4);
    const cloned = JSON.parse(JSON.stringify(posts));

    // shorten the summary if needed
    for (const post of cloned) {
      post.summary = truncateString(post.summary, 110);
    }
    this.getLatestBlogPosts = cloned;

    // get the count of posts per year and category
    this.getAllPostsCountByYearByCategory = this.getPostCountByYearByCategory(
      this.allBlogPostList,
      this.year,
    );

    // get the count of posts per year and month
    this.getAllPostsCountByYearByMonth = [];
    this.getAllPostsCountByYearByMonth = this.getPostCountByYearByMonth(
      this.allBlogPostList,
      this.year,
    );

    // CLEAR MAIN ARRAY and ADD NEW DATA
    // add object arrays to main object array
    this.getBlogInformation = [];
    this.getBlogInformation.push({ name: 'getallblogtypes', data: this.getAllBlogTypes });
    this.getBlogInformation.push({ name: 'getallblogpostyears', data: this.getAllBlogPostYears });
    this.getBlogInformation.push({
      name: 'getBlogPostsBasedOnTypeAndYear',
      data: this.getBlogPostsBasedOnTypeAndYear,
    });
    this.getBlogInformation.push({ name: 'getlatestblogposts', data: this.getLatestBlogPosts });
    this.getBlogInformation.push({
      name: 'getallpostscountbyyearbycategory',
      data: this.getAllPostsCountByYearByCategory,
    });
    this.getBlogInformation.push({
      name: 'getallpostscountbyyearbymonth',
      data: this.getAllPostsCountByYearByMonth,
    });

    //console.log(this.getBlogInformation);

    // content is loaded, so set the flag to true and detect changes
    this.isContentLoaded = true;
    this.cdr.detectChanges();
  }

  // helper functions
  private filterBlogPostsBasedOnTypeAndYear(
    allPosts: GetAllBlogPosts[],
    year: number,
    blogtypeid: number | undefined,
    month: number | undefined,
  ): GetAllBlogPosts[] {
    const test = allPosts.filter(
      (post) =>
        post.dateposted.getFullYear() === year &&
        (blogtypeid === undefined || post.blogtypeid === blogtypeid),
    );

    return allPosts.filter(
      (post) =>
        post.dateposted.getFullYear() === year &&
        (blogtypeid === undefined || post.blogtypeid === blogtypeid) &&
        (month === undefined || post.dateposted.getMonth() === month),
    );
  }

  private getPostCountByYearByMonth(allPosts: GetAllBlogPosts[], year: number) {
    // get posts by year
    const posts = allPosts.filter((post) => post.dateposted.getFullYear() === year);

    // get specfic field only the fields we need for the count
    const reducedPosts = posts.map((item) => ({
      dateposted: item.dateposted,
    }));

    // get the month and year
    const monthYearPosts = reducedPosts.map((item) => ({
      ...item,
      year: item.dateposted.getFullYear(),
      month: item.dateposted.getMonth(),
      fullMonthName: item.dateposted.toLocaleString('default', { month: 'long' }),
    }));

    // group by counts
    const groupByList = reducedPosts.reduce<GetAllPostsCountByYearByMonth[]>((acc, item) => {
      const post = acc.find((count) => count.month === item.dateposted.getMonth());
      if (post) {
        post.count += 1;
      } else {
        acc.push({
          monthname: item.dateposted.toLocaleString('default', { month: 'long' }),
          year: item.dateposted.getFullYear(),
          month: item.dateposted.getMonth(),
          count: 1,
        });
      }
      return acc;
    }, []);

    // order the list by month
    return [...groupByList].sort((a, b) => a.month - b.month);
  }

  private getPostCountByYearByCategory(allPosts: GetAllBlogPosts[], year: number) {
    // get posts by year
    const posts = allPosts.filter((post) => post.dateposted.getFullYear() === year);

    // get specfic field only the fields we need for the count
    const reducedPosts = posts.map((item) => ({
      dateposted: item.dateposted,
      blogtypeid: item.blogtypeid,
      category: item.category,
    }));

    // group by counts
    return reducedPosts.reduce<GetAllPostsCountByYearByCategory[]>((acc, item) => {
      const category = acc.find((count) => count.category === item.category);
      if (category) {
        category.count += 1;
      } else {
        acc.push({ blogtypeid: item.blogtypeid, category: item.category, count: 1 });
      }
      return acc;
    }, []);
  }
}
