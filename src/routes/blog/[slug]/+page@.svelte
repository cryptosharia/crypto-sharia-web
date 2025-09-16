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
      <h1 class="text-justify text-[2.5rem] leading-10 font-bold text-orange-600">
        {data.post.title}
      </h1>
      <span class="mb-1 flex flex-row justify-end text-slate-700">
        <Calendar /> <span>{formatDate(data.post.date, 'text')}</span></span
      >
      <img src={data.post.thumbnailUrl} alt={data.post.title} class="w-full" />
      <div class="mt-3 mb-2 flex flex-row flex-wrap gap-2">
        {#each data.post.tags as tag}
          <span class="rounded-full bg-slate-200 px-2.5 py-1.25 text-slate-700">{tag}</span>
        {/each}
      </div>
    </section>
    <Divider usePadding={false} />
    <section class="markdown-body my-4">
      {@html marked(data.post.content)}
    </section>
  </main>
{/if}
