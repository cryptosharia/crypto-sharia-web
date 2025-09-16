<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import BlogCard from '../components/BlogCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';

  import { articles } from './blog/data';
</script>

<section id="artikel" class="nav-space z-9 mb-10 w-full max-w-[90rem]">
  <Title class="text-center">Artikel Terbaru</Title>
  <Divider />
  <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
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
          isHiddenOnMobile={i >= 3 ? true : false}
        />
      {/each}
    </div>
    <PrimaryButton
      text="Lihat Artikel Lainnya"
      href="/blog/artikel"
      size="medium"
      class="hidden md:block"
    />
    <PrimaryButton
      text="Lihat Artikel Lainnya"
      href="/blog/artikel"
      size="small"
      class="block md:hidden"
    />
  </div>
</section>
