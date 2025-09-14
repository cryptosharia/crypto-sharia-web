<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import ArtikelCard from '../components/ArtikelCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';

  const articles = [
    {
      thumbnailUrl:
        'https://static.news.bitcoin.com/wp-content/uploads/2024/09/suisisisdhhdhhd.jpg',
      date: new Date(),
      title: 'Sui Lorem Ipsum Dolor Sit Amet',
      tags: ['Sui', 'Web 3', 'Layer 1'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://s3-alpha.figma.com/hub/file/3963163118/974598dc-af4c-4381-89ea-83ce5758db4c-cover.png',
      date: new Date(),
      title: 'Ethereum Lorem Ipsum Dolor Sit Amet',
      tags: ['Ethereum', 'Web 3', 'Layer 1'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://t3.ftcdn.net/jpg/14/51/34/72/360_F_1451347228_sEZHcfvYxSoP9095deryzeRNUfhlpEcS.jpg',
      date: new Date(),
      title: 'Bitcoin Lorem Ipsum',
      tags: ['Bitcoin', 'Web 3', 'Layer 1'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://www.thecoinrepublic.com/wp-content/uploads/2025/01/What-Chainlinks-RSI-Divergence-Means-%E2%80%94-Is-a-Drop-to-13-Now-Imminent-1.jpg',
      date: new Date(),
      title: 'Chainlink Lorem Ipsum',
      tags: ['Oracle', 'Decentralized', 'Connectivity'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://assets.hackquest.io/hackathons/projects/logo/utBBBl9xvqMqlrzY17k5c.png',
      date: new Date(),
      title: 'Walrus Lorem Ipsum',
      tags: ['Storage', 'dApps',   'Protocol'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://substackcdn.com/image/fetch/$s_!ETix!,w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d7c763f-6a04-4f3e-931d-bca05a713057_1465x1048.png',
      date: new Date(),
      title: 'DeepBook Lorem Ipsum  Dolor Sit Amet',
      tags: ['Order Book', 'DEX', 'Liquidity'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
</script>

<section id="artikel" class="nav-space z-10 w-full max-w-[90rem]">
  <Title class="text-center">Artikel Terbaru</Title>
  <Divider />
  <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
    <div
      class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
    >
      {#each articles as article, i}
        <ArtikelCard
          thumbnailUrl={article.thumbnailUrl}
          date={article.date}
          title={article.title}
          tags={article.tags}
          content={article.content}
          isHiddenOnMobile={i >= 3 ? true : false}
        />
      {/each}
    </div>
    <PrimaryButton text="Lihat Semua Artikel" href="/blog" size="medium" class="hidden md:block" />
    <PrimaryButton text="Lihat Semua Artikel" href="/blog" size="small" class="block md:hidden" />
  </div>
</section>
