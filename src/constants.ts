export const SITE_TITLE: string = "Tech People Blog";
export const SITE_DESCRIPTION: string =
  "Articles, Stories, and Tutorials For Tech People";
export const HOMEPAGE_ARTICLE_LIMIT: number = 6;
export const ARTICLE_PER_PAGE: number = 3;
export const NAVBAR_LINKS: NavbarLinks[] = [
  { title: "Home", path: "/" },
  { title: "All Articles", path: "/articles" },
  { title: "About", path: "/about" },
];

interface NavbarLinks {
  title: string;
  path: string;
}
