import type { Post } from '../models';

import activitySatu from '$lib/assets/blog/activities/1.jpeg';
import activityDua from '$lib/assets/blog/activities/2.jpeg';
import activityTiga from '$lib/assets/blog/activities/3.jpeg';
import activityEmpat from '$lib/assets/blog/activities/4.jpeg';
import activityLima from '$lib/assets/blog/activities/5.jpeg';
import activityEnam from '$lib/assets/blog/activities/6.jpeg';
import articleSatu from '$lib/assets/blog/articles/1.jpeg';

import sui from '$lib/posts/sui.md?raw';
import walrus from '$lib/posts/walrus.md?raw';
import memahamiUang from '$lib/posts/memahami-uang.md?raw';

export const posts: Post[] = [
  {
    category: 'activity',
    thumbnailUrl: activitySatu,
    date: new Date('2025-10-10T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    slug: 'lorem-ipsum-dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityDua,
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit',
    slug: 'lorem-ipsum-dolor-sit',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: walrus
  },
  {
    category: 'activity',
    thumbnailUrl: activityTiga,
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'Lorem Ipsum  Dolor Sit Amet',
    slug: 'lorem-ipsum-dolor-sit-amet',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityEmpat,
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: walrus
  },
  {
    category: 'activity',
    thumbnailUrl: activityLima,
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityEnam,
    date: new Date('2025-10-15T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: walrus
  },
  {
    category: 'article',
    thumbnailUrl: articleSatu,
    date: new Date('2025-10-15T00:00:00.000Z'),
    title: 'Memahami Uang dan Nilai: Panduan Sederhana untuk Masyarakat Awam',
    slug: 'ethereum-lorem-ipsum-dolor-sit-amet',
    tags: ['Ekonomi', 'Uang', 'Inflasi', 'Nilai'],
    description:
      'Uang, nilai, dan inflasi adalah konsep ekonomi dasar yang sangat memengaruhi kehidupan sehari-hari kita. Meski terdengar rumit, ketiga hal ini sebenarnya dapat dipahami dengan mudah melalui contoh-contoh sederhana.',
    content: memahamiUang
  },
  {
    category: 'article',
    thumbnailUrl:
      'https://www.thecoinrepublic.com/wp-content/uploads/2025/01/What-Chainlinks-RSI-Divergence-Means-%E2%80%94-Is-a-Drop-to-13-Now-Imminent-1.jpg',
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Chainlink Lorem Ipsum',
    slug: 'chainlink-lorem-ipsum',
    tags: [
      'Oracle',
      'Cross Chain',
      'Decentralized',
      'Connectivity',
      'Scalability',
      'Interoperability',
      'Security',
      'Performance',
      'Smart Contract',
      'Decentralized Finance',
      'Cryptocurrency',
      'Blockchain'
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'article',
    thumbnailUrl: 'https://assets.hackquest.io/hackathons/projects/logo/utBBBl9xvqMqlrzY17k5c.png',
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Walrus Lorem Ipsum',
    slug: 'walrus-lorem-ipsum',
    tags: ['Storage', 'dApps', 'Storage Protocol'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: walrus
  },
  {
    category: 'article',
    thumbnailUrl:
      'https://substackcdn.com/image/fetch/$s_!ETix!,w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d7c763f-6a04-4f3e-931d-bca05a713057_1465x1048.png',
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'DeepBook Lorem Ipsum  Dolor Sit Amet',
    slug: 'deepbook-lorem-ipsum-dolor-sit-amet',
    tags: ['Order Book', 'DEX', 'Liquidity'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'article',
    thumbnailUrl: 'https://static.news.bitcoin.com/wp-content/uploads/2024/09/suisisisdhhdhhd.jpg',
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Sui Lorem Ipsum Dolor Sit Amet',
    slug: 'sui-lorem-ipsum-dolor-sit-amet',
    tags: ['Sui', 'Web 3', 'Layer 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: sui
  },
  {
    category: 'article',
    thumbnailUrl:
      'https://t3.ftcdn.net/jpg/14/51/34/72/360_F_1451347228_sEZHcfvYxSoP9095deryzeRNUfhlpEcS.jpg',
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Bitcoin Lorem Ipsum',
    slug: 'bitcoin-lorem-ipsum',
    tags: ['Bitcoin', 'Web 3', 'Layer 1'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: sui
  }
];
