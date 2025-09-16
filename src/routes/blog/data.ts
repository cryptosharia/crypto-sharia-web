import satu from '$lib/assets/blog/activities/1.jpeg';
import dua from '$lib/assets/blog/activities/2.jpeg';
import tiga from '$lib/assets/blog/activities/3.jpeg';
import empat from '$lib/assets/blog/activities/4.jpeg';
import lima from '$lib/assets/blog/activities/5.jpeg';
import enam from '$lib/assets/blog/activities/6.jpeg';

const activities = [
  {
    thumbnailUrl: satu,
    date: new Date('2025-10-10T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: dua,
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: tiga,
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'Lorem Ipsum  Dolor Sit Amet',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: empat,
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: lima,
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: enam,
    date: new Date('2025-10-15T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
].sort((a, b) => a.date.getTime() - b.date.getTime());

const articles = [
  {
    thumbnailUrl:
      'https://www.thecoinrepublic.com/wp-content/uploads/2025/01/What-Chainlinks-RSI-Divergence-Means-%E2%80%94-Is-a-Drop-to-13-Now-Imminent-1.jpg',
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Chainlink Lorem Ipsum',
    tags: ['Oracle', 'Decentralized', 'Connectivity'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: 'https://assets.hackquest.io/hackathons/projects/logo/utBBBl9xvqMqlrzY17k5c.png',
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Walrus Lorem Ipsum',
    tags: ['Storage', 'dApps', 'Protocol'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://substackcdn.com/image/fetch/$s_!ETix!,w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d7c763f-6a04-4f3e-931d-bca05a713057_1465x1048.png',
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'DeepBook Lorem Ipsum  Dolor Sit Amet',
    tags: ['Order Book', 'DEX', 'Liquidity'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl: 'https://static.news.bitcoin.com/wp-content/uploads/2024/09/suisisisdhhdhhd.jpg',
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Sui Lorem Ipsum Dolor Sit Amet',
    tags: ['Sui', 'Web 3', 'Layer 1'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://s3-alpha.figma.com/hub/file/3963163118/974598dc-af4c-4381-89ea-83ce5758db4c-cover.png',
    date: new Date('2025-10-15T00:00:00.000Z'),
    title: 'Ethereum Lorem Ipsum Dolor Sit Amet',
    tags: ['Ethereum', 'Web 3', 'Layer 1'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://t3.ftcdn.net/jpg/14/51/34/72/360_F_1451347228_sEZHcfvYxSoP9095deryzeRNUfhlpEcS.jpg',
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Bitcoin Lorem Ipsum',
    tags: ['Bitcoin', 'Web 3', 'Layer 1'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
].sort((a, b) => a.date.getTime() - b.date.getTime());
// Merge both activities and articles
const blogs = [...activities, ...articles].sort((a, b) => a.date.getTime() - b.date.getTime());

export { blogs, activities, articles };
