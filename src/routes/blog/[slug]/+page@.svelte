<script lang="ts">
  import { marked } from 'marked';
  import PrimaryButton from '../../../components/PrimaryButton.svelte';
  import type { PageProps } from './$types';
  import { formatDate } from '../../../utils';
  import Calendar from '$lib/assets/icons/Calendar.svelte';
  import Divider from '../../../components/Divider.svelte';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.post ? data.post.title : '404'} - CryptoSharia</title>
</svelte:head>

{#if !data.post}
  <main class="flex h-screen w-full flex-col items-center justify-center gap-y-2 text-center">
    <h1 class="text-7xl font-bold text-orange-600 md:text-8xl" style="letter-spacing: 0.5rem;">
      404
    </h1>
    <h1 class="mb-4 text-3xl font-bold text-orange-600 md:text-4xl">Postingan Tidak Ditemukan</h1>
    <PrimaryButton text="Kembali ke Blog" href="/blog" size="medium" class="hidden md:block" />
    <PrimaryButton text="Kembali ke Blog" href="/blog" size="small" class="block md:hidden" />
  </main>
{:else}
  <span class="block h-25 w-full"></span>
  <main class="mx-auto flex w-full max-w-[70rem] flex-col">
    <section>
      <div class="flex flex-row items-start gap-x-2.5">
        <a
          aria-label="Kembali ke Blog"
          href="/blog"
          class="rounded-full p-2.5 text-orange-600 transition-colors duration-300 hover:bg-black/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.3"
            stroke="currentColor"
            class="h-8.5 w-8.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <h1 class="mt-1.5 pr-10 text-justify text-[2.5rem] leading-10 font-medium text-orange-600">
          {data.post.title} Lorem
        </h1>
      </div>
      <span class="mb-1 flex flex-row justify-end text-slate-700">
        <Calendar /> <span>{formatDate(data.post.date, 'text')}</span></span
      >
      <img src={data.post.thumbnailUrl} alt={data.post.title} class="w-full rounded-3xl" />
      <div class="mt-2 mb-2 flex flex-row flex-wrap gap-2">
        {#each data.post.tags as tag}
          <span class="rounded-full bg-slate-200 px-2.5 py-1.25 text-slate-700">{tag}</span>
        {/each}
      </div>
      <Divider usePadding={false} />
      <p class="mt-2 text-justify text-slate-700">{data.post.description}</p>
    </section>
    <div class="my-12 flex items-center justify-center gap-2">
      {#each [1, 2, 3] as _}
        <span class="size-2.5 rounded-full bg-slate-300"></span>
      {/each}
    </div>
    <section class="markdown-body my-4">
      {@html marked(data.post.content)}
    </section>
  </main>
{/if}
