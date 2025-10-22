<script lang="ts">
  import '../app.css';
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import '../../node_modules/github-markdown-css/github-markdown-light.css';
  import logo1 from '$lib/assets/logo1.png';
  import popUpAd from '$lib/assets/pop-up-ad.jpg';

  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';
  import { marked, type RendererThis, type Tokens } from 'marked';
  import discordLogo from '$lib/assets/socmed-icons/discord.png';
  import whatsappLogo from '$lib/assets/socmed-icons/whatsapp.png';

  let { children } = $props();

  onMount(() => {
    AOS.init();

    marked.use({
      renderer: {
        // Make all links that is rendered by marked to always open in a new tab
        link(this: RendererThis, token: Tokens.Link) {
          const text = this.parser.parseInline(token.tokens);
          const link = marked.Renderer.prototype.link.call(this, token);
          return link.replace('<a', "<a target='_blank' rel='noreferrer noopener' ");
        }
      }
    });

    const floatingDialog = document.getElementById('floating-dialog');
    window.addEventListener('scroll', () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      const threshold = 100; // Trigger bottom-detection 100px before the end

      const isAtBottom = scrollTop + viewportHeight >= documentHeight - threshold;
      const isAtTop = scrollTop === 0;

      if (!isAtTop && !isAtBottom) {
        // Perform actions when scroll is somewhere in the middle
        floatingDialog?.classList.add('-translate-x-58');
      } else {
        // Perform actions when scroll is at the top or bottom
        floatingDialog?.classList.remove('-translate-x-58');
      }
    });
  });

  let popUpVisible = $state(true);

  const socmeds = [
    {
      name: 'Discord',
      icon: discordLogo,
      url: 'https://discord.gg/b9cmHfcZpA'
    },
    {
      name: 'WhatsApp',
      icon: whatsappLogo,
      url: 'https://chat.whatsapp.com/KtqgS9SQGlPLweht53UrHr'
    }
  ];
</script>

<svelte:head>
  <meta name="author" content="CryptoSharia" />
  <link rel="icon" type="image/png" href={logo1} />

  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />

  <!-- Google Ads -->
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4244298232118608"
    crossorigin="anonymous"
  ></script>
  <!-- /Google Ads -->
</svelte:head>

<!-- On load pop ip -->
<div
  class="fixed z-999999999 h-screen w-screen overflow-hidden"
  style="display: {popUpVisible ? 'block' : 'none'}"
>
  <button
    aria-label="Close Pop Up"
    class="h-screen w-screen bg-black/50 hover:cursor-pointer"
    onclick={() => (popUpVisible = false)}
  ></button>
  <div
    class="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white p-3 shadow-2xl sm:w-145"
  >
    <button
      aria-label="Close Pop Up"
      class="group absolute top-1.5 right-1.5 rounded-xl border border-slate-500 p-1.5 hover:cursor-pointer hover:border-orange-600 hover:bg-orange-600/10"
      onclick={() => (popUpVisible = false)}
    >
      <svg
        class="h-6 w-6 text-slate-500 group-hover:text-orange-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <span class="text-2xl text-orange-600 sm:text-3xl">Selamat Datang 👋</span>
    <a href="https://lynk.id/cryptosharia" target="_blank">
      <img
        src={popUpAd}
        alt="Join Discord Premium CryptoSharia"
        class="mt-2 w-full rounded-lg border border-slate-200 shadow-lg"
      />
    </a>
  </div>
</div>

<!-- Floating Dialog -->
<div
  id="floating-dialog"
  class="fixed -right-55 bottom-3 z-99999 flex flex-col gap-y-1 rounded-3xl border border-slate-200 bg-white px-3 pt-1.5 pb-2.5 shadow-xl transition-transform duration-1000"
>
  <h2
    class="text-center text-lg font-semibold text-orange-600 sm:text-xl lg:text-[1.375rem] xl:text-2xl"
  >
    Join Komunitas
  </h2>
  <div class="flex flex-row items-center justify-center gap-x-4">
    {#each socmeds as socmed}
      <a href={socmed.url} target="_blank">
        <img
          src={socmed.icon}
          alt={socmed.name}
          class="w-11 transition-transform hover:scale-105 sm:w-12 lg:w-13 xl:w-14"
        />
      </a>
    {/each}
  </div>
</div>

<Navbar />

{@render children?.()}

<Footer />
