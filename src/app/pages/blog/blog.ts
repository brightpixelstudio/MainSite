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
      {
        blogpostid: 2,
        title: 'Web Design and Fonts',
        content:
          'Choosing the right fonts for your web design shapes your sites personality and readability. Top choices include clean sans-serifs like Inter for digital clarity and elegant serifs like Playfair Display for striking headlines. Balance aesthetics with performance to ensure fast-loading, accessible text across every device.<br/><br/>' +
          'Why Web Typography Matters<br/><br/>' +
          'First impressions: Fonts speak for your brand before visitors read a single word.<br/>' +
          'Readability: Clean layouts keep users on your page longer.<br/>' +
          'Hierarchy: Distinct sizes guide the eye through your content smoothly.<br/>' +
          'Top Font Categories & PicksSans-Serif (Modern & Clean): Inter, Montserrat, and Poppins offer crisp screen legibility.Serif (Classic & Elegant): Playfair Display and Lora bring sophistication to headers and editorial blogs.<br/>' +
          'Variable Fonts: Adapt seamlessly to different screen dimensions and resolutions. <br/>' +
          'Essential Best Practices.  Limit your site to two or three typefaces maximum. Pair a decorative header font with a simple body font. Maintain high contrast between text and background colors. Prioritize responsive scaling for mobile and desktop screens. Explore expert curation on the I love Typography Blog. Check out modern options with the Figma Sans Serif Guide.<br/><br/>' +
          'Review stylistic trends on the Webflow Typography Blog.',
        summary:
          'Choosing the right fonts for your web design shapes your sites personality and readability. Top choices include clean sans-serifs like Inter for digital clarity and elegant serifs like Playfair Display for striking headlines. Balance aesthetics with performance to ensure fast-loading, accessible text across every device.<br/><br/>',
        url: 'web-design-and-fonts',
        dateposted: new Date('2026-07-28'),
        author: 'Brett Mitchell',
        category: `${BlogType.Design}`,
      },
      {
        blogpostid: 3,
        title: 'Blog Post 3',
        content:
          'Blog Post 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>' +
          'Proin aliquet quam quis gravida euismod. Vivamus nec ante nulla. Aenean bibendum, eros et tristique accumsan, est magna suscipit justo, a blandit felis mi non risus. Pellentesque felis libero, feugiat vitae suscipit vel, vulputate sit amet dolor. Vivamus scelerisque in neque vitae tincidunt. Integer tempor eu arcu at vehicula. Donec quis felis quis arcu feugiat efficitur. Integer scelerisque congue ipsum, ut faucibus urna gravida ut. In mattis nisl sed ultricies semper. Donec aliquet eros elit, sit amet lobortis nibh vestibulum eget. Curabitur id diam placerat quam semper semper. Vestibulum consectetur magna vitae sapien vulputate, ac venenatis nibh iaculis. Donec gravida libero in nibh faucibus pulvinar. In cursus arcu nec dolor hendrerit, ut tristique ipsum dapibus.<br/><br/>' +
          'Sed ultricies luctus suscipit. Ut massa nibh, porttitor at placerat quis, viverra vel ex. Proin mattis porta interdum. Ut vitae ligula sapien. Integer vehicula, ex sed mollis consequat, diam urna ultrices neque, eu sagittis turpis elit quis elit. Proin egestas, enim in pharetra condimentum, ligula odio ultricies tortor, ac tempor quam purus ac nunc. Quisque tempus, massa in auctor malesuada, nibh lacus auctor sapien, sed dictum odio diam non purus. Vestibulum maximus magna ac odio condimentum, eget venenatis elit ornare. Pellentesque viverra pellentesque ex, vitae scelerisque ex convallis non. Donec eget cursus mauris, sed vestibulum odio. Cras euismod pretium dolor, eu tincidunt nibh bibendum sodales. Suspendisse aliquam placerat ultrices. Duis ultrices porttitor ex, sed fermentum mi pellentesque in.',
        summary:
          'Blog Post 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>',
        url: 'blog-post-3',
        dateposted: new Date('2026-07-22'),
        author: 'Brett Mitchell',
        category: `${BlogType.Development}`,
      },
      {
        blogpostid: 4,
        title: 'Wireframing',
        content:
          'Web design has many different aspects to it.  From the intitial concept, to story telling, to layout, to wireframing, to graphic design, to front end development.  They all play a critical part to ensure the final product is what the customer had in mind.<br/><br/>' +
          'Focusing on the wireframe process, it is a simple, structural blueprint that outlines the layout, content hierarchy, and functionality of a webpage before any colors, fonts, or images are added.<br/><br/>' +
          'Here are some of the key components of wireframing. ' +
          '<li>' +
          '<ul>Navigation: Maps out menus, search bars, links, and breadcrumbs to guide user flow.</ul>' +
          '<ul>Layout Structure: Defines grids, margins, spacing, and overall content positioning.</ul>' +
          '<ul>Call-to-Action (CTA): Marks the exact placement for primary and secondary conversion buttons.</ul>' +
          '<ul>Content Placeholders: Uses basic boxes, lines, and dummy text to represent headers, paragraphs, and media.</ul>' +
          '<ul>Annotations: Provides brief notes explaining user interactions or developer instructions.</ul>' +
          '</li>' +
          'What are some of the benefits of wireframing.' +
          '<li>' +
          '<ul>Early Feedback: Catches structural flaws or navigation issues before expensive coding begins.</ul>' +
          '<ul>Saves Time: Streamlines the transition from concept to high-fidelity mockups using platforms like Figma or Balsamiq.</ul>' +
          '<ul>Clarity of Vision: Focuses teams and clients strictly on usability and layout rather than superficial design.</ul>' +
          '</li>',
        summary:
          'Web design has many different aspects to it.  From the intitial concept, to story telling, to layout, to wireframing, to graphic design, to front end development.  They all play a critical part to ensure the final product is what the customer had in mind.',
        url: 'web-design-wireframing',
        dateposted: new Date('2026-07-20'),
        author: 'Brett Mitchell',
        category: `${BlogType.Design}`,
      },
      {
        blogpostid: 5,
        title: 'Blog Post 5',
        content:
          'Blog Post 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>' +
          'Proin aliquet quam quis gravida euismod. Vivamus nec ante nulla. Aenean bibendum, eros et tristique accumsan, est magna suscipit justo, a blandit felis mi non risus. Pellentesque felis libero, feugiat vitae suscipit vel, vulputate sit amet dolor. Vivamus scelerisque in neque vitae tincidunt. Integer tempor eu arcu at vehicula. Donec quis felis quis arcu feugiat efficitur. Integer scelerisque congue ipsum, ut faucibus urna gravida ut. In mattis nisl sed ultricies semper. Donec aliquet eros elit, sit amet lobortis nibh vestibulum eget. Curabitur id diam placerat quam semper semper. Vestibulum consectetur magna vitae sapien vulputate, ac venenatis nibh iaculis. Donec gravida libero in nibh faucibus pulvinar. In cursus arcu nec dolor hendrerit, ut tristique ipsum dapibus.<br/><br/>' +
          'Sed ultricies luctus suscipit. Ut massa nibh, porttitor at placerat quis, viverra vel ex. Proin mattis porta interdum. Ut vitae ligula sapien. Integer vehicula, ex sed mollis consequat, diam urna ultrices neque, eu sagittis turpis elit quis elit. Proin egestas, enim in pharetra condimentum, ligula odio ultricies tortor, ac tempor quam purus ac nunc. Quisque tempus, massa in auctor malesuada, nibh lacus auctor sapien, sed dictum odio diam non purus. Vestibulum maximus magna ac odio condimentum, eget venenatis elit ornare. Pellentesque viverra pellentesque ex, vitae scelerisque ex convallis non. Donec eget cursus mauris, sed vestibulum odio. Cras euismod pretium dolor, eu tincidunt nibh bibendum sodales. Suspendisse aliquam placerat ultrices. Duis ultrices porttitor ex, sed fermentum mi pellentesque in.',
        summary:
          'Blog Post 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>',
        url: 'blog-post-5',
        dateposted: new Date('2026-08-20'),
        author: 'Brett Mitchell',
        category: `${BlogType.Design}`,
      },
      {
        blogpostid: 6,
        title: 'Blog Post 6',
        content:
          'Blog Post 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>' +
          'Proin aliquet quam quis gravida euismod. Vivamus nec ante nulla. Aenean bibendum, eros et tristique accumsan, est magna suscipit justo, a blandit felis mi non risus. Pellentesque felis libero, feugiat vitae suscipit vel, vulputate sit amet dolor. Vivamus scelerisque in neque vitae tincidunt. Integer tempor eu arcu at vehicula. Donec quis felis quis arcu feugiat efficitur. Integer scelerisque congue ipsum, ut faucibus urna gravida ut. In mattis nisl sed ultricies semper. Donec aliquet eros elit, sit amet lobortis nibh vestibulum eget. Curabitur id diam placerat quam semper semper. Vestibulum consectetur magna vitae sapien vulputate, ac venenatis nibh iaculis. Donec gravida libero in nibh faucibus pulvinar. In cursus arcu nec dolor hendrerit, ut tristique ipsum dapibus.<br/><br/>' +
          'Sed ultricies luctus suscipit. Ut massa nibh, porttitor at placerat quis, viverra vel ex. Proin mattis porta interdum. Ut vitae ligula sapien. Integer vehicula, ex sed mollis consequat, diam urna ultrices neque, eu sagittis turpis elit quis elit. Proin egestas, enim in pharetra condimentum, ligula odio ultricies tortor, ac tempor quam purus ac nunc. Quisque tempus, massa in auctor malesuada, nibh lacus auctor sapien, sed dictum odio diam non purus. Vestibulum maximus magna ac odio condimentum, eget venenatis elit ornare. Pellentesque viverra pellentesque ex, vitae scelerisque ex convallis non. Donec eget cursus mauris, sed vestibulum odio. Cras euismod pretium dolor, eu tincidunt nibh bibendum sodales. Suspendisse aliquam placerat ultrices. Duis ultrices porttitor ex, sed fermentum mi pellentesque in.',
        summary:
          'Blog Post 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>',
        url: 'blog-post-6',
        dateposted: new Date('2026-06-20'),
        author: 'Brett Mitchell',
        category: `${BlogType.Design}`,
      },
      {
        blogpostid: 7,
        title: 'Blog Post 7',
        content:
          'Blog Post 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>' +
          'Proin aliquet quam quis gravida euismod. Vivamus nec ante nulla. Aenean bibendum, eros et tristique accumsan, est magna suscipit justo, a blandit felis mi non risus. Pellentesque felis libero, feugiat vitae suscipit vel, vulputate sit amet dolor. Vivamus scelerisque in neque vitae tincidunt. Integer tempor eu arcu at vehicula. Donec quis felis quis arcu feugiat efficitur. Integer scelerisque congue ipsum, ut faucibus urna gravida ut. In mattis nisl sed ultricies semper. Donec aliquet eros elit, sit amet lobortis nibh vestibulum eget. Curabitur id diam placerat quam semper semper. Vestibulum consectetur magna vitae sapien vulputate, ac venenatis nibh iaculis. Donec gravida libero in nibh faucibus pulvinar. In cursus arcu nec dolor hendrerit, ut tristique ipsum dapibus.<br/><br/>' +
          'Sed ultricies luctus suscipit. Ut massa nibh, porttitor at placerat quis, viverra vel ex. Proin mattis porta interdum. Ut vitae ligula sapien. Integer vehicula, ex sed mollis consequat, diam urna ultrices neque, eu sagittis turpis elit quis elit. Proin egestas, enim in pharetra condimentum, ligula odio ultricies tortor, ac tempor quam purus ac nunc. Quisque tempus, massa in auctor malesuada, nibh lacus auctor sapien, sed dictum odio diam non purus. Vestibulum maximus magna ac odio condimentum, eget venenatis elit ornare. Pellentesque viverra pellentesque ex, vitae scelerisque ex convallis non. Donec eget cursus mauris, sed vestibulum odio. Cras euismod pretium dolor, eu tincidunt nibh bibendum sodales. Suspendisse aliquam placerat ultrices. Duis ultrices porttitor ex, sed fermentum mi pellentesque in.',
        summary:
          'Blog Post 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sodales justo. Nullam tristique aliquet justo eu lacinia. Nam pellentesque eleifend pretium. Sed sit amet ligula sit amet est euismod lobortis. Praesent quis dictum mauris. Nunc ut augue et arcu consectetur porta ac ac magna. Etiam lacinia elit vitae ex finibus, at venenatis tellus blandit. Fusce ornare placerat sem, id malesuada libero egestas blandit. Nam accumsan tellus metus, et luctus libero auctor nec. Aliquam volutpat lorem a eros dignissim hendrerit. Morbi volutpat egestas pellentesque. Fusce quis dignissim lectus, non viverra sapien. Praesent scelerisque sem in nibh sagittis auctor. Sed tristique ante augue, eu lobortis ligula venenatis eget. Sed molestie leo nec porttitor consequat. Proin elit mauris, iaculis et justo a, semper dapibus dui.<br/><br/>',
        url: 'blog-post-7',
        dateposted: new Date('2026-06-04'),
        author: 'Brett Mitchell',
        category: `${BlogType.Development}`,
      },
    ];

    // call the load post function
    console.log(this.allBlogPostList);
  }
}
