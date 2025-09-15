<script lang="ts">
  import GradientDivider from '../components/GradientDivider.svelte';
  import kontakBG from '$lib/assets/kontak-bg.png';
  import logo1 from '$lib/assets/logo1.png';
  import Title from '../components/Title.svelte';
  import Divider from '../components/Divider.svelte';
  import InputField from '../components/InputField.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';
  import instagram from '$lib/assets/socmed-icons/instagram.png';
  import tiktok from '$lib/assets/socmed-icons/tiktok.png';
  import discord from '$lib/assets/socmed-icons/discord.png';
  import x from '$lib/assets/socmed-icons/x.png';
  import youtube from '$lib/assets/socmed-icons/youtube.png';

  const socmeds = [
    {
      name: 'Instagram',
      icon: instagram,
      url: 'https://instagram.com'
    },
    {
      name: 'TikTok',
      icon: tiktok,
      url: 'https://tiktok.com'
    },
    {
      name: 'Discord',
      icon: discord,
      url: 'https://discord.com'
    },
    {
      name: 'X',
      icon: x,
      url: 'https://x.com'
    },
    {
      name: 'YouTube',
      icon: youtube,
      url: 'https://youtube.com'
    }
  ];
</script>

<section id="kontak" class="mt-14 w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({kontakBG}); background-attachment: fixed;"
  >
    <div class="bg-black/50 pt-13 pb-3">
      <div
        class="mx-auto flex max-w-[90%] flex-col sm:max-w-[36rem] lg:max-w-[90%] lg:flex-row lg:gap-x-8 xl:max-w-[70rem] xl:gap-x-12"
      >
        <div class="flex-1">
          <Title class="text-center text-white">Kontak Kami</Title>
          <Divider usePadding={false} />
          <div class="mt-3.5 flex flex-col">
            <div class="flex flex-col gap-y-3">
              <InputField type="text" required={true} label="Nama" hint="Masukkan nama anda" />
              <InputField
                type="email"
                required={true}
                label="Email"
                hint="Masukkan alamat email anda"
              />
              <InputField
                type="multiline"
                required={true}
                label="Pesan"
                hint="Masukkan pesan anda"
              />
            </div>
            <h3 class="my-1 text-right text-white" style="letter-spacing: 2px;">
              <i>cryptoshariaforum@gmail.com</i>
            </h3>
            <PrimaryButton text="Kirim Pesan" href="#kontak" size="small" extend={true} />
          </div>
        </div>
        <div class="flex flex-1 flex-col gap-y-12 max-lg:mt-12 lg:gap-y-9">
          <div>
            <Title class="text-center text-white">Media Sosial</Title>
            <Divider usePadding={false} />
            <div class="mt-10 flex flex-row items-center justify-between px-[3%] sm:px-14">
              {#each socmeds as socmed}
                <a href={socmed.url} target="_blank">
                  <img src={socmed.icon} alt={socmed.name} class="w-12" />
                </a>
              {/each}
            </div>
          </div>
          <div>
            <Title class="text-center text-white"
              >Support <i class="text-orange-600">CryptoSharia</i></Title
            >
            <Divider usePadding={false} />
            <div class="mx-auto mt-5 flex flex-col justify-between gap-y-3 lg:max-w-[90%]">
              <div class="rounded-xl border-2 border-orange-600 bg-white p-3">
                <p class="text-center text-slate-800">
                  Satu donasi kecil hari ini, bisa menjadi investasi besar di akhirat. Mari dukung
                  gerakan edukasi <i><b>CryptoSharia</b></i>, agar ilmu dan pahala terus mengalir
                  tanpa henti.
                </p>
              </div>
              <PrimaryButton text="💸 Support" href="#kontak" size="small" extend={true} />
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 flex max-w-54 flex-col" style="letter-spacing: 1.5px;">
        <a
          href="/"
          class="flex flex-col items-center gap-y-0.5 text-2xl font-semibold text-orange-600"
        >
          <span class="flex size-12.5 items-center justify-center rounded-full bg-white">
            <img src={logo1} alt="CryptoSharia" class="size-12" />
          </span>
          <span class="strokeme">CryptoSharia</span>
        </a>
        <Divider usePadding={false} />
        <span class="spacin text-center text-white"
          >&copy; 2025 - CryptoSharia<br />All rights reserved.</span
        >
      </div>
    </div>
  </div>
</section>

<style>
  .strokeme {
    text-shadow:
      -1.1px -1.1px 0 #fff,
      1.1px -1.1px 0 #fff,
      -1.1px 1.1px 0 #fff,
      1.1px 1.1px 0 #fff;
  }
</style>
