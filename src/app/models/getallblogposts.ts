export interface GetAllBlogPosts {
  blogpostid: number;
  title: string;
  content: string;
  summary: string;
  url: string;
  dateposted: Date;
  author: string;
  category: string;
  blogtypeid: number;
}
