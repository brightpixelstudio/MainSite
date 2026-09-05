export interface GetBlogPostsBasedOnTypeAndYear {
  blogpostid: number;
  title: string;
  summary: string;
  url: string;
  dateposted: Date;
  author: string;
  category: string;
  blogtypeid: number;
}
