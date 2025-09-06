<script lang="ts">
  import type { Snippet } from 'svelte';

  let props: { children: Snippet } = $props();
</script>

<h1 class="mb-1.5 text-3xl font-bold text-orange-600">{@render props.children?.()}</h1>
