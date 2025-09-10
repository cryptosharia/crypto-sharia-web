<script lang="ts">
  import GradientDivider from '../components/GradientDivider.svelte';
  import discordBG from '$lib/assets/discord/discord-bg.png';
  import post from '$lib/assets/discord/post.png';
  import testimonial from '$lib/assets/discord/testimonial.png';
  import informationUpdate from '$lib/assets/discord/information-update.png';
  import informationUpdateMobile from '$lib/assets/discord/information-update-mobile.png';
  import modules from '$lib/assets/discord/modules.png';
  import cryptoModule from '$lib/assets/discord/crypto-module.png';
  import shariaModule from '$lib/assets/discord/sharia-module.png';
</script>

<section class="w-full">
  <GradientDivider size="large" />
  <div class="w-full bg-cover bg-center" style="background-image: url({discordBG});">
    <div class="bg-black/75">
      <div
        class="mx-auto flex max-w-[125rem] flex-col gap-y-10 px-[4%] py-12 md:gap-y-15 md:px-[10%]"
      >
        <h1
          class="strokeme text-center font-jua text-5xl text-orange-600 sm:text-6xl lg:text-7xl xl:text-[5rem]"
        >
          JOIN <span class="text-discord">Discord Premium</span> CryptoSharia
        </h1>
        <div class="flex flex-col justify-center gap-y-5 md:flex-row md:gap-x-4 lg:gap-x-8">
          <img src={post} alt="Discord Post" class="w-full md:w-1/2" />
          <img src={testimonial} alt="Discord Testimonial" class="w-full md:w-1/2" />
        </div>
        <img
          class="hidden w-full md:block"
          src={informationUpdate}
          alt="Discord Information Update"
        />
        <img
          class="block w-full md:hidden"
          src={informationUpdateMobile}
          alt="Discord Information Update"
        />
        <img class="hidden w-full md:block" src={modules} alt="Discord Modules" />
        <div class="flex w-full flex-col gap-y-6 md:hidden">
          <img src={cryptoModule} alt="Discord Crypto Module" />
          <img src={shariaModule} alt="Discord Sharia Module" />
        </div>
      </div>
    </div>
  </div>
  <GradientDivider size="large" reverse={true} />
</section>

<style>
  .text-discord {
    color: #5865f2;
  }

  @media (min-width: 1024px) {
    .strokeme {
      text-shadow:
        -2.4px -2.4px 0 #fff,
        2.4px -2.4px 0 #fff,
        -2.4px 2.4px 0 #fff,
        2.4px 2.4px 0 #fff;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    .strokeme {
      text-shadow:
        -2px -2px 0 #fff,
        2px -2px 0 #fff,
        -2px 2px 0 #fff,
        2px 2px 0 #fff;
    }
  }

  @media (max-width: 639px) {
    .strokeme {
      text-shadow:
        -1.6px -1.6px 0 #fff,
        1.6px -1.6px 0 #fff,
        -1.6px 1.6px 0 #fff,
        1.6px 1.6px 0 #fff;
    }
  }
</style>
