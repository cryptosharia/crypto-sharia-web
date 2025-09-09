<script lang="ts">
  import type { Snippet } from 'svelte';

  let { isSmall = false, ...props }: { isSmall?: boolean; class?: string; children: Snippet } =
    $props();
</script>

<h1
  class={`mb-1.5 font-bold text-orange-600 ${props.class || ''}`}
  class:text-4xl={!isSmall}
  class:text-3xl={isSmall}
>
  {@render props.children?.()}
</h1>
