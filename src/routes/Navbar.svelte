<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import { onMount } from 'svelte';

  const links: { text: string; href: string }[] = [
    { text: 'Pembina', href: '#pembina' },
    { text: 'Discord', href: '#discord' },
    { text: 'Artikel', href: '#artikel' },
    { text: 'Screening', href: '#screening' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Kontak', href: '#kontak' }
  ];

  let isDrawerOpen = $state(false);
  let drawerHeight = $state(1000);

  onMount(() => {
    drawerHeight = document.getElementById('drawer')?.clientHeight || 1000;
  });
</script>

<nav class="fixed top-0 left-0 z-999 flex h-16 w-full shadow-md backdrop-blur-lg">
  <div
    class="mx-auto flex h-full w-full max-w-[88rem] items-center justify-between px-4 md:px-0 md:max-lg:max-w-[95%] lg:px-12"
  >
    <div>
      <a href="/" class="text-xl font-semibold text-orange-600 md:text-[1.4rem]">
        <img src={logo1} alt="CryptoSharia" class="mr-0.5 inline size-9 md:mr-1.5 md:size-10" />
        CryptoSharia
      </a>
    </div>
    <div>
      <!-- Mobile Hamburger Button -->
      <button
        id="hamburger-button"
        class="mr-0.5 flex h-6 w-6 flex-col justify-center hover:cursor-pointer md:mr-0 md:hidden"
        class:hamburger-active={isDrawerOpen}
        aria-label="Toggle menu"
        onclick={() => (isDrawerOpen = !isDrawerOpen)}
      >
        <span
          class="h-[0.15rem] w-full rounded-full bg-orange-600 transition-opacity duration-300 ease-in-out"
        ></span>
        <div class="relative mt-1.5 mb-2">
          <span
            class="absolute left-0 h-[0.15rem] w-full rounded-full bg-orange-600 transition-transform duration-300 ease-in-out"
          ></span>
          <span
            class="absolute left-0 h-[0.15rem] w-full rounded-full bg-orange-600 transition-transform duration-300 ease-in-out"
          ></span>
        </div>
        <span
          class="h-[0.15rem] w-full rounded-full bg-orange-600 transition-opacity duration-300 ease-in-out"
        ></span>
      </button>
      <!-- /Mobile Hamburger Button -->
      <!-- Mobile Menu (Drawer) -->
      <div
        id="drawer"
        class="absolute left-1/2 -z-10 block w-full -translate-x-1/2 transform rounded-b-4xl border-b border-slate-200 bg-white px-6 pt-14 shadow-md transition-transform duration-300 ease-in-out"
        class:drawer-open={isDrawerOpen}
        style="top: calc(-{drawerHeight}px - 1px);"
      >
        <ul class="flex flex-col">
          {#each links as link}
            {#if link.text !== 'Kontak'}
              <li class="border-b border-slate-200 py-3">
                <a
                  href={link.href}
                  onclick={() => setTimeout(() => (isDrawerOpen = false), 200)}
                  class="block w-full text-center text-base font-medium text-slate-700 transition-colors duration-300 ease-in-out hover:text-orange-600"
                  >{link.text}</a
                >
              </li>
            {:else}
              <li class="er-slate-200 py-3">
                <a
                  href={link.href}
                  onclick={() => setTimeout(() => (isDrawerOpen = false), 200)}
                  class="block w-full rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-1.5 text-center text-base font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-orange-600"
                  >{link.text}</a
                >
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <!-- /Mobile Menu (Drawer) -->
      <!-- Desktop Menu -->
      <ul class="hidden space-x-[1.5rem] md:flex lg:space-x-7">
        {#each links as link}
          {#if link.text !== 'Kontak'}
            <li>
              <a
                href={link.href}
                class="font-semibold text-slate-500 transition-colors duration-300 ease-in-out hover:text-orange-600"
                >{link.text}</a
              >
            </li>
          {:else}
            <li>
              <a
                href={link.href}
                class="rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-1.5 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-orange-600"
                >{link.text}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
      <!-- /Desktop Menu -->
    </div>
  </div>
</nav>

<style>
  :global(.hamburger-active > div > span:first-child) {
    display: absolute;
    transform: rotate(45deg);
  }

  :global(.hamburger-active > div > span:last-child) {
    display: absolute;
    transform: rotate(-45deg);
  }

  :global(.hamburger-active > span:first-child),
  :global(.hamburger-active > span:last-child) {
    opacity: 0;
  }

  :global(.drawer-open) {
    transform: translateY(100%);
  }

  /* .strokeme {
    text-shadow:
      -0.1px -0.1px 0 #fff,
      0.1px -0.1px 0 #fff,
      -0.1px 0.1px 0 #fff,
      0.1px 0.1px 0 #fff;
  } */
</style>
