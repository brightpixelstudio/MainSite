import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import type { GetBlogPost } from '../../models/getblogpost';

@Component({
  selector: 'blogpost',
  imports: [CommonModule],
  templateUrl: './blogpost.html',
  styleUrl: './blogpost.css',
})
export class Blogpost implements OnInit {
  postUrl!: string;
  content!: string;
  blogPost: GetBlogPost[] = [];
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
    this.isContentLoaded = false;

    /*
    this.apiService.getBlogPost(url).subscribe({
      next: (data) => {
        this.blogPost = data;
        this.content = this.blogPost[0].content;

        // Force Angular to run change detection on this component
        this.isContentLoaded = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('One or more requests failed:', err);
      },
    });
    */
  }
}
