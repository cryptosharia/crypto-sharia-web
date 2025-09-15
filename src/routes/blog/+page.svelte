<script lang="ts">
  import BlogCard from '../../components/BlogCard.svelte';
  import { blogs } from './data';
</script>

<div
  class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
>
  {#each blogs as blog, i}
    <BlogCard
      thumbnailUrl={blog.thumbnailUrl}
      date={blog.date}
      title={blog.title}
      tags={blog.tags}
      content={blog.content}
    />
  {/each}
</div>
