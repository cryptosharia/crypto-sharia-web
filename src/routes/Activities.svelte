<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import PostCard from '../components/PostCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';
  import { getPosts } from '../helpers/posts';
  import { page } from '$app/state';

  const posts = getPosts(page.data.posts, 'activity', 6);
</script>

<section id="aktivitas" class="nav-space z-10 mb-10 w-full max-w-[90rem] lg:max-xl:max-w-[70rem]">
  <Title class="text-center">Aktivitas Kami</Title>
  <Divider />
  <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
    <div
      class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
    >
      {#each posts as post, i}
        <PostCard
          thumbnailUrl={post.thumbnailUrl}
          date={post.date}
          title={post.title}
          slug={post.slug}
          tags={post.tags}
          description={post.description}
          isHiddenOnMobile={i >= 3}
          isHiddenOnTablet={i >= 4}
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
