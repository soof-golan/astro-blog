import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://blog.soofgolan.com",
  author: "Soof Golan",
  desc: "A blog about software development, and other projects.",
  title: "Soof Golan | Software Consultant",
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
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@soofgolan.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@soofgolan",
    linkTitle: `${SITE.author} on YouTube`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/soofgolan",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Calendly",
    href: "https://calendly.com/soofgolan/30min",
    linkTitle: `${SITE.author} on Calendly`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/soofgo",
    linkTitle: `${SITE.author} on Facebook`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/soofgolan",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://bit.ly/whatsapp-soof-golan",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: true,
  },
];
