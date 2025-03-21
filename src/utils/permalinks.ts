import slugify from 'limax';

import { SITE, APP_BLOG } from '~/utils/config';

import { trim } from '~/utils/utils';

// Add your custom links here
export const GITHUB_URL = 'https://github.com/vixshan';
export const TWITTER_URL = 'https://twitter.com/iamvikshan';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/vikshan';
export const INSTAGRAM_URL = 'https://www.instagram.com/iamvikshan';
export const FACEBOOK_URL = 'https://www.facebook.com/iamvikshan';
export const KOFI_URL = 'https://ko-fi.com/vikshan';
export const PATREON_URL = 'https://www.patreon.com/vikshan';
export const AMINA_URL = 'https://amina.vikshan.me';
export const DOCS_URL = 'https://docs.vikshan.me';
export const STATUS_URL = 'https://status.vikshan.me';
export const ANALYTICS_URL = 'https://simple.vikshan.me';

const SHORT_URL_BASE = 'https://go.vikshan.me';

export const getShortUrl = (destination = '') => {
  let shortUrl = SHORT_URL_BASE;

  if (destination) {
    shortUrl += `/${destination}`;
  }

  return shortUrl;
};

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;

    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;

    case 'post':
      permalink = createPath(trimSlash(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
