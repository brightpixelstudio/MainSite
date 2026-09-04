import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogType } from '../../enums/blogtype';
import { GetAllBlogPosts } from '../../models/getallblogposts';

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
  allBlogPostList: GetAllBlogPosts[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAllPosts();
  }

  onCatagorySelect(selectedValue: any): void {
    this.blogtypeid = selectedValue;
    this.month = undefined;
    //this.loadPosts();
  }

  onYearSelect(selectedValue: any): void {
    this.year = selectedValue;
    this.month = undefined;
    //this.loadPosts();
  }

  onCategoryLinkClick(event: MouseEvent, blogtypeid: number) {
    // Prevent the browser from navigating to the href URL
    event.preventDefault();

    // set the new catagory type and get contents
    this.month = undefined;
    this.blogtypeid = blogtypeid;
    //this.loadPosts();
  }

  onArchiveLinkClick(event: MouseEvent, month: number) {
    // Prevent the browser from navigating to the href URL
    event.preventDefault();

    // set the new catagory type and get contents
    this.blogtypeid = undefined;
    this.month = month;
    //this.loadPosts();
  }

  // TODO!
  // Move this is a global function in a utility file if you want to use it in multiple places
  truncateString(str: string, maxLength: number): string {
    // If the string is already short enough, return it as-is
    if (str.length <= maxLength) {
      return str;
    }

    // Account for the 3 characters of the ellipsis
    const ellipsis = '...';
    return str.slice(0, maxLength - ellipsis.length) + ellipsis;
  }

  loadAllPosts() {
    // fake blog posts (Change to API call later)
    this.allBlogPostList = [
      {
        blogpostid: 1,
        title: 'Responsive Design',
        content:
          'Responsive web design is no longer a luxury; it is the absolute standard for modern web development. In a world where internet traffic spans from tiny smartwatches to massive 4K monitors, your website must adapt instantly to any screen size. If your website layout breaks, pinches, or forces users to zoom in on mobile devices, you are actively losing visitors and hurting your brand. Here is everything you need to know about responsive design, why it is critical for your success, and the core pillars required to implement it. <br/><br/>' +
          'Why Responsive Design is Non-NegotiableBuilding a responsive site directly impacts your bottom line, user engagement, and visibility.<br/><br/>' +
          'Mobile-First Indexing: Google primarily uses the mobile version of content for indexing and ranking. Superior User Experience: Visitors stay longer when navigation is fluid and readable across all devices. ' +
          'Cost Efficiency: Managing a single responsive site is cheaper than building separate desktop and mobile apps. Higher Conversion ' +
          'Rates: A seamless checkout or signup form on mobile reduces user frustration and cart abandonment. <br/><br/>' +
          'The 3 Core Pillars of Responsive Design<br/><br/>' +
          'Responsive design relies on three fundamental technical building blocks working together harmoniously.<br/><br/>' +
          '1. Fluid GridsInstead of designing with rigid, fixed pixel measurements (like width: 960px), fluid grids use relative units like percentages (width: 100%) or viewport units (vw, vh). This allows layout elements to scale proportionally based on the size of the screen. Modern CSS frameworks like Tailwind CSS or layouts built with CSS Grid and Flexbox make creating fluid systems much simpler.<br/><br/>' +
          '2. Flexible MediaImages and videos must be fluid so they do not overflow their layout containers. By applying a simple CSS rule, media scales down automatically on smaller screens without distorting its proportions.<br/><br/>' +
          '3. CSS Media QueriesMedia queries are the secret sauce of responsive design. They allow you to apply specific CSS styles only when a device meets certain criteria, such as a maximum or minimum screen width.css.<br/><br/>' +
          'Best Practices for Designing Responsively<br/><br/>' +
          'To ensure your responsive website feels intuitive, keep these vital design principles in mind:<br/><br/>' +
          'Incorporate the Viewport Meta Tag: Always include <meta name="viewport" content="width=device-width, initial-scale=1.0"> in your HTML <head> or your site will not scale properly on mobile.<br/><br/>' +
          'Design Touch-Friendly Targets: Buttons and links must be large enough to tap easily without hitting adjacent elements. Aim for a minimum size of 48x48 pixels.<br/><br/>' +
          'Prioritize Content Performance: Large unoptimized images kill mobile loading speeds. Use modern image formats like WebP and implement lazy loading.<br/><br/>' +
          'Optimize Typography: Text should scale elegantly. Use relative typography units like rem or em instead of fixed px to maintain readability on small screens.<br/><br/>' +
          'Responsive web design ensures that your website looks beautiful and functions flawlessly, no matter how your audience accesses it. By focusing on fluid layouts, flexible images, and strategic media queries, you build a future-proof web experience that satisfies both human users and search engine algorithms.',
        summary:
          'Responsive web design is no longer a luxury; it is the absolute standard for modern web development. In a world where internet traffic spans from tiny smartwatches to massive 4K monitors, your website must adapt instantly to any screen size. If your website layout breaks, pinches, or forces users to zoom in on mobile devices, you are actively losing visitors and hurting your brand. Here is everything you need to know about responsive design, why it is critical for your success, and the core pillars required to implement it.',
        url: 'responsive-design',
        dateposted: new Date('2026-08-20'),
        author: 'Brett Mitchell',
        category: `${BlogType.Design}`,
      },
    ];

    // call the load post function
  }
}
