<script lang="ts">
  let {
    label,
    hint,
    multiline = false
  }: { label: string; hint: string; multiline?: boolean } = $props();
</script>

<div>
  <label for="input" class="ml-0.5 block text-lg font-semibold text-white">{label}</label>
  {#if !multiline}
    <input
      type="text"
      placeholder={hint}
      class="mt-0.5 w-full rounded-lg border border-slate-200 bg-white p-2 shadow-lg focus:ring focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
    />
  {:else}
    <textarea
      placeholder={hint}
      class="mt-0.5 block h-28 w-full resize-none rounded-lg border border-slate-200 bg-white p-2 shadow-lg focus:ring focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
    ></textarea>
  {/if}
</div>

<style>
  ::placeholder {
    color: var(--color-slate-400);
  }
</style>
