import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://blog.soofgolan.com",
  author: "Soof Golan",
  desc: "A blog about software development, and other projects.",
  title: "Soof Golan's Blog",
  ogImage: "og-image.jfif",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/soof-golan",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/soofgo",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/soofgolan",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@soofgolan.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/soofgolan",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://bit.ly/whatsapp-to-soof",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
];
