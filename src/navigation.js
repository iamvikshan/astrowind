import {
  getPermalink,
  getBlogPermalink,
  TWITTER_URL,
  INSTAGRAM_URL,
  KOFI_URL,
  AMINA_URL,
  DOCS_URL,
  STATUS_URL,
  getShortUrl,
  ANALYTICS_URL,
} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'YouTube',
      href: getShortUrl('youtube'),
      target: '_blank',
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
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
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
      href: getShortUrl('youtube'),
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
        { text: 'Amina', href: AMINA_URL, target: '_blank' },
        { text: 'Pickle Rick', target: '_blank', href: getShortUrl('pickle') },
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
        { text: 'Docs', href: DOCS_URL, target: '_blank' },
        { text: 'Discord', href: getShortUrl('discord'), target: '_blank' },
        { text: 'Status Page', href: STATUS_URL, target: '_blank' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        /* { text: 'Careers', href: getPermalink('/careers') }, */
        { text: 'Analytics', href: ANALYTICS_URL, target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms •', href: getPermalink('/terms') },
    { text: 'Privacy Policy •', href: getPermalink('/privacy') },
    { text: 'Cookie Policy •', href: getPermalink('/cookies') },
    { text: 'Review Terms •', href: getPermalink('/reviews') },
    { text: 'Sponsorship Terms', href: getPermalink('/sponsorship') },
  ],
  socialLinks: [
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: getShortUrl('youtube'),
      target: '_blank',
    },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: TWITTER_URL, target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: INSTAGRAM_URL,
      target: '_blank',
    },
    { ariaLabel: 'Ko-fi', icon: 'tabler:coffee', href: KOFI_URL, target: '_blank' },
    {
      ariaLabel: 'Matrix',
      icon: 'tabler:brand-matrix',
      href: getShortUrl('matrix'),
      target: '_blank',
    },
    {
      ariaLabel: 'Discord',
      icon: 'tabler:brand-discord',
      href: getShortUrl('discord'),
      target: '_blank',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/logo.png)]"></span>
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="${getPermalink()}"> Vikshan Media</a> · All rights reserved.
  `,
};
