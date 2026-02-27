// /app/_data/cast.ts 

import type { CastMember } from '@/app/_types/episode';
import { ashleyIconLinks, chloeIconLinks, ethanIconLinks, larsIconLinks, laurenIconLinks, nickIconLinks, noraIconLinks, sebastianIconLinks, shairaIconLinks, sophiaIconLinks } from './social-links';

export const chloe: CastMember = {
  id: 'chloe',
  name: 'Chloe Avant',
  role: 'Lucy',
  hometown: 'Denver, Colorado',
  major: 'Writing for Film & Television',
  imageSrc: '/chloe-bio.webp',
  paragraphs: ['Chloe does it all! Not only did she produce Crestmore Admissions, but she co-wrote, co-directed, and voice acted in it as well!',
    'Originally from Colorado, Chloe is pursuing a degree in Writing for Film & Television at Chapman University.',
    ],
  iconLinks: chloeIconLinks,
};

export const shaira: CastMember = {
  id: 'shaira',
  name: 'Shaira Yousuf',
  role: 'Sam',
  major: 'Screenwriting',
  imageSrc: '/shaira-bio.webp',
  paragraphs: ['Shaira does it all! Not only did she co-wrote and co-direct Crestmore Admissions, but she voice acted in it as well!',
    'Shaira is pursuing a degree in Screenwriting at Chapman University.',
    ],
  iconLinks: shairaIconLinks,
};

export const nick: CastMember = {
  id: 'nick',
  name: 'Nick George',
  role: 'Ken',
  hometown: 'Boston, Massachusetts',
  major: 'Writing for Film & Television',
  imageSrc: '/nick-cast.jpg',
  paragraphs: [],
  iconLinks: nickIconLinks,
};

export const lauren: CastMember = {
  id: 'lauren',
  name: 'Lauren Ferrell',
  role: 'Sara',
  hometown: 'San Diego, California',
  major: 'Writing for Film & Television',
  imageSrc: '/lauren-cast.jpg',
  paragraphs: [],
  iconLinks: laurenIconLinks,
};

export const sebastian: CastMember = {
  id: 'sebastian',
  name: 'Sebastian Waverly',
  role: 'John',
  hometown: 'Los Angeles, California',
  major: 'Writing for Film & Television',
  imageSrc: '/sebastian-cast.jpg',
  paragraphs: [],
  iconLinks: sebastianIconLinks,
};

export const ethan: CastMember = {
  id: 'ethan',
  name: 'Ethan Schwesinger',
  role: 'Jake',
  hometown: 'Moorpark, California',
  major: 'Writing for Film & Television',
  imageSrc: '/ethan-cast.jpg',
  paragraphs: [],
  iconLinks: ethanIconLinks,
};

export const lars: CastMember = {
  id: 'lars',
  name: 'Lars Kahn',
  role: 'Lewis',
  hometown: 'North Carolina',
  major: 'Writing for Film & Television',
  imageSrc: '/lars-cast.jpg',
  paragraphs: [],
  iconLinks: larsIconLinks,
};

export const sophia: CastMember = {
  id: 'sophia',
  name: 'Sophia Pisani',
  role: 'Lisa',
  hometown: 'New Jersey',
  major: 'Writing for Film & Television',
  imageSrc: '/sophia-cast.jpg',
  paragraphs: [],
  iconLinks: sophiaIconLinks,
};

export const ashley: CastMember = {
  id: 'avery',
  name: 'Ashley Uhrig',
  role: 'Avery',
  hometown: 'Moscow, Idaho',
  major: 'Creative Producing',
  imageSrc: '/ashley-cast.jpg',
  paragraphs: [],
  iconLinks: ashleyIconLinks,
};

export const nora: CastMember = {
  id: 'nora',
  name: 'Nora Anderson',
  role: 'Emily',
  hometown: 'Los Angeles, California',
  major: 'Writing for Film & Television',
  imageSrc: '/nora-cast.jpg',
  paragraphs: [],
  iconLinks: noraIconLinks,
};