<script lang="ts">
  let { usePadding = true }: { usePadding?: boolean } = $props();
</script>

<span
  class="mx-auto my-1.5 block h-[2px] bg-slate-200"
  class:w-[calc(100%-4rem)]={usePadding}
  class:w-full={!usePadding}
></span>
