<script lang="ts">
  import BlogCard from '../../../components/BlogCard.svelte';
  import { articles } from '../data';
</script>

<div
  class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
>
  {#each articles as article, i}
    <BlogCard
      thumbnailUrl={article.thumbnailUrl}
      date={article.date}
      title={article.title}
      tags={article.tags}
      content={article.content}
    />
  {/each}
</div>
