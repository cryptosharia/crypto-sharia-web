<script lang="ts">
  import PostCard from '../../../components/PostCard.svelte';
  import { getPosts } from '../../../helpers/posts';
  import { page } from '$app/state';

  const posts = getPosts(page.data.posts, 'activity');
</script>

<svelte:head>
  <title>Aktivitas - CryptoSharia</title>
  <meta property="og:title" content="Aktivitas - CryptoSharia" />
  <meta name="description" content="Temukan semua update aktivitas terbaru tentang CryptoSharia di sini." />
  <meta
    property="og:description"
    content="Temukan semua update aktivitas terbaru tentang CryptoSharia di sini."
  />
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
