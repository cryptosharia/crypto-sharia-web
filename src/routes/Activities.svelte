<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import BlogCard from '../components/BlogCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';

  const activities = [
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493314-0e360a50-fbe5-47d7-b8ee-a8a4a3c0b5f4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112618Z&X-Amz-Expires=300&X-Amz-Signature=3ff6efb82a3a2a8224dd013f3aa0d34ea94441c3f5f704e1c6217eeef28257e5&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum Dolor',
      tags: ['Kolaborasi', 'Rapat', 'Lorem'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492813-a33547ba-622f-42ec-ac75-1a5502a57c1a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112712Z&X-Amz-Expires=300&X-Amz-Signature=5f8067d8c5914b90d5f0c14f9c7b68ccfa621f5ab1389be7041911d95b3e560c&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum Dolor',
      tags: ['Lorem', 'Kolaborasi', 'Rapat'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492862-7ccff3ed-22e0-442c-86f6-9f5d34eacd1a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112735Z&X-Amz-Expires=300&X-Amz-Signature=e7174ce3492c1512085df2b663da773c4995ccdbd3c6ad2b78cc3e68212af5e6&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum  Dolor Sit Amet',
      tags: ['Kolaborasi', 'Rapat', 'Lorem'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493666-245bebc2-4853-4295-81fb-42efb3c1def8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112751Z&X-Amz-Expires=300&X-Amz-Signature=91342755942f6096e67888789f88f40fe474474e4bab7ab7d2de4e9ea9700227&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum Dolor Sit Amet',
      tags: ['Lorem', 'Kolaborasi', 'Rapat'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489493602-761eb78f-3511-495d-a24a-3d2bece49bdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112837Z&X-Amz-Expires=300&X-Amz-Signature=0c7593349b75e822106d702e912726f516320309fb1fc607b5df7f44c0429a43&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum Dolor',
      tags: ['Kolaborasi', 'Rapat', 'Lorem'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      thumbnailUrl:
        'https://github-production-user-asset-6210df.s3.amazonaws.com/74972129/489492676-a22172d2-1d6d-4e7a-ab2c-d351b644bd79.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T112850Z&X-Amz-Expires=300&X-Amz-Signature=072132e77cbce5bd00fd7f72fa21de972a513e6c148b5bed23b0885d62570ee2&X-Amz-SignedHeaders=host',
      date: new Date(),
      title: 'Lorem Ipsum Dolor Sit Amet',
      tags: ['Lorem', 'Kolaborasi', 'Rapat'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
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
      text="Lihat Semua Aktivitas"
      href="/blog/aktivitas"
      size="medium"
      class="hidden md:block"
    />
    <PrimaryButton text="Lihat Semua Aktivitas" href="/blog" size="small" class="block md:hidden" />
  </div>
</section>
