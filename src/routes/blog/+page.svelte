<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import PostCard from '../../components/PostCard.svelte';
  import { getPosts } from '../../helpers/posts';
  import { page } from '$app/state';

  const posts = getPosts(page.data.posts, 'all');
</script>

<svelte:head>
  <title>Blog - CryptoSharia</title>
  <meta property="og:title" content="Blog - CryptoSharia" />
  <meta name="description" content="Temukan semua update terbaru tentang CryptoSharia di sini." />
  <meta
    property="og:description"
    content="Temukan semua update terbaru tentang CryptoSharia di sini."
  />

  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />
</svelte:head>

<section
  class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
>
  {#each posts as post}
    <PostCard
      thumbnailUrl={post.thumbnailUrl}
      date={post.date}
      title={post.title}
      slug={post.slug}
      tags={post.tags}
      description={post.description}
    />
  {/each}
</section>
