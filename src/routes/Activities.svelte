<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import BlogCard from '../components/BlogCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';
  import { activities } from './blog/data';
</script>

<section id="aktivitas" class="nav-space z-10 mb-10 w-full max-w-[90rem]">
  <Title class="text-center">Aktivitas Kami</Title>
  <Divider />
  <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
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
          isHiddenOnMobile={i >= 3 ? true : false}
        />
      {/each}
    </div>
    <PrimaryButton
      text="Lihat Aktivitas Lainnya"
      href="/blog/aktivitas"
      size="medium"
      class="hidden md:block"
    />
    <PrimaryButton
      text="Lihat Aktivitas Lainnya"
      href="/blog"
      size="small"
      class="block md:hidden"
    />
  </div>
</section>
