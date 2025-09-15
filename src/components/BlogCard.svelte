<script lang="ts">
  import { formatDate } from '../utils';

  let {
    thumbnailUrl,
    date,
    title,
    tags,
    content,
    isHiddenOnMobile = false
  }: {
    thumbnailUrl: string;
    date: Date;
    title: string;
    tags: string[];
    content: string;
    isHiddenOnMobile?: boolean;
  } = $props();
</script>

<div
  class="group w-82.5 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl transition-transform duration-300 hover:scale-105 hover:cursor-pointer max-sm:w-[95%] max-sm:max-w-96 sm:max-md:w-67.5 xl:w-88"
  class:max-sm:hidden={isHiddenOnMobile}
>
  <div class="relative h-50 w-full object-cover sm:max-md:h-40">
    <img src={thumbnailUrl} alt={title} class="size-full object-cover" />
    <span
      class="absolute right-2 bottom-2 rounded-md bg-black/50 px-1.5 py-0.5 text-sm font-normal text-white"
      >{formatDate(date)}</span
    >
  </div>
  <div class="p-2.5 pt-1 md:p-3 md:pt-1">
    <h2
      class="line-clamp-1 text-left text-[1.4rem] font-medium text-orange-600 group-hover:underline"
    >
      {title}
    </h2>
    <p class="line-clamp-2 text-justify text-slate-700">{content}</p>
    <div class="mt-2 flex flex-row justify-end gap-x-1.5">
      {#each tags as tag}
        <span
          class="block rounded-2xl border border-slate-300 px-2 py-0.5 text-sm text-slate-600 shadow-2xl"
          >{tag}</span
        >
      {/each}
    </div>
  </div>
</div>
