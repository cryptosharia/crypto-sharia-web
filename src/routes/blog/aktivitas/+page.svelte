<script lang="ts">
  import PostCard from '../../../components/PostCard.svelte';
  import { getPosts } from '../data';

  const posts = getPosts('activity');
</script>

<div
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
</div>
