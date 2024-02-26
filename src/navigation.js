import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'YouTube',
      href: 'https://www.youtube.com/@vikshan?sub_confirmation=1',
    },

    {
      text: 'Blog',
      href: getBlogPermalink(),
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Categories',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tags',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },

    /* {
      text: 'Store',
      href: getPermalink('/store'),
    },

    {
      text: 'Partners',
      href: getPermalink('/partners'),
    }, */

    {
      text: 'More',
      links: [
        /* {
          text: 'Affiliates',
          href: getPermalink('/affiliates'),
        },
        {
          text: 'Projects',
          href: getPermalink('/projects'),
        }, */
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        /* {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        }, */
      ],
    },
    /*
     {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    }, 
    
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    }, */
  ],

  actions: [
    {
      text: 'Subscribe',
      href: 'https://www.youtube.com/@vikshan?sub_confirmation=1',
      icon: 'tabler:brand-youtube',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [
        { text: 'Mochi', href: 'https://mochi.vikshan.tech' },
        { text: 'Amina', href: 'https://amina.vikshan.tech' },
        { text: 'Pickle Rick', href: 'https://dub.sh/pickle' },
      ],
    },
    /* {
      title: 'Platform',
      links: [
        { text: 'Partners', href: getPermalink('/partners') },
        { text: 'Affiliates', href: getPermalink('/affiliates') },
        { text: 'Store', href: getPermalink('/store') },
      ],
    }, */
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.vikshan.tech' },
        { text: 'Discord', href: 'https://dub.sh/server' },
        { text: 'Status', href: 'https://status.vikshan.tech/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
       /* { text: 'Careers', href: getPermalink('/careers') }, */
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Cookie Policy', href: getPermalink('/cookies') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@vikshan?sub_confirmation=1' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/ItsVikshan' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/vixshan/' },
    { ariaLabel: 'Ko-fi', icon: 'tabler:coffee', href: 'https://www.ko-fi.com/vikshan/' },
    { ariaLabel: 'Matrix', icon: 'tabler:brand-matrix', href: 'https://matrix.to/#/#vikshan:matrix.org' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://l.vikshan.tech/server' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/logo.png)]"></span>
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://vikshan.tech/"> Vikshan Media Group</a> · All rights reserved.
  `,
};
