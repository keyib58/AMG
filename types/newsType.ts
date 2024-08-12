export interface NewsType {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  mdxContent: string;  // This property is required, based on the error message.
}
