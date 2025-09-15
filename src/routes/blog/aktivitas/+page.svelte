<script lang="ts">
  import BlogCard from '../../../components/BlogCard.svelte';
  import { activities } from '../data';
</script>

<div
  class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
>
  {#each activities as activity, i}
    <BlogCard
      thumbnailUrl={activity.thumbnailUrl}
      date={activity.date}
      title={activity.title}
      tags={activity.tags}
      content={activity.content}
    />
  {/each}
</div>
