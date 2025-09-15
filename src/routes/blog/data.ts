const activities = [
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493314-0e360a50-fbe5-47d7-b8ee-a8a4a3c0b5f4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112618Z&X-Amz-Expires=300&X-Amz-Signature=3ff6efb82a3a2a8224dd013f3aa0d34ea94441c3f5f704e1c6217eeef28257e5&X-Amz-SignedHeaders=host',
    date: new Date('2025-10-10T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492813-a33547ba-622f-42ec-ac75-1a5502a57c1a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112712Z&X-Amz-Expires=300&X-Amz-Signature=5f8067d8c5914b90d5f0c14f9c7b68ccfa621f5ab1389be7041911d95b3e560c&X-Amz-SignedHeaders=host',
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492862-7ccff3ed-22e0-442c-86f6-9f5d34eacd1a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112735Z&X-Amz-Expires=300&X-Amz-Signature=e7174ce3492c1512085df2b663da773c4995ccdbd3c6ad2b78cc3e68212af5e6&X-Amz-SignedHeaders=host',
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'Lorem Ipsum  Dolor Sit Amet',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493666-245bebc2-4853-4295-81fb-42efb3c1def8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112751Z&X-Amz-Expires=300&X-Amz-Signature=91342755942f6096e67888789f88f40fe474474e4bab7ab7d2de4e9ea9700227&X-Amz-SignedHeaders=host',
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493602-761eb78f-3511-495d-a24a-3d2bece49bdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112837Z&X-Amz-Expires=300&X-Amz-Signature=0c7593349b75e822106d702e912726f516320309fb1fc607b5df7f44c0429a43&X-Amz-SignedHeaders=host',
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    thumbnailUrl:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492676-a22172d2-1d6d-4e7a-ab2c-d351b644bd79.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112850Z&X-Amz-Expires=300&X-Amz-Signature=072132e77cbce5bd00fd7f72fa21de972a513e6c148b5bed23b0885d62570ee2&X-Amz-SignedHeaders=host',
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
