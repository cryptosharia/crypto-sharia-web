<script lang="ts">
  let {
    thumbnailUrl,
    title,
    content,
    isHiddenOnMobile = false
  }: {
    thumbnailUrl: string;
    title: string;
    content: string;
    isHiddenOnMobile?: boolean;
  } = $props();
</script>

<div
  class="w-82.5 rounded-2xl border-2 border-slate-200 bg-white shadow-xl max-sm:w-[95%] sm:max-md:w-67.5 xl:w-88"
  class:max-sm:hidden={isHiddenOnMobile}
>
  <img
    src={thumbnailUrl}
    alt={title}
    class="h-50 w-full rounded-t-2xl object-cover sm:max-md:h-40"
  />
  <div class="p-2.5 pt-1">
    <h2 class="line-clamp-1 text-[1.4rem] font-medium text-orange-600">
      {title}
    </h2>
    <p class="line-clamp-3 text-justify text-slate-700">{content}</p>
  </div>
</div>
