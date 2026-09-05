import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import type { GetBlogPost } from '../../models/getblogpost';
import { getBlogPost } from '../../utils/utils';

@Component({
  selector: 'blogpost',
  imports: [CommonModule],
  templateUrl: './blogpost.html',
  styleUrl: './blogpost.css',
})
export class Blogpost implements OnInit {
  postUrl!: string;
  content!: string;
  blogPost!: GetBlogPost;
  isContentLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postUrl = params.get('id') ?? '';
      this.loadPost(this.postUrl);
    });
  }

  private loadPost(url: string): void {
    // lets load the correct post
    this.blogPost = getBlogPost(this.postUrl);
    this.content = this.blogPost.content;

    // everything is loaded
    this.isContentLoaded = true;
    this.cdr.detectChanges();
  }
}
