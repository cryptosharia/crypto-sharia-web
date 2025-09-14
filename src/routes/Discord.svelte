<script lang="ts">
  import GradientDivider from '../components/GradientDivider.svelte';
  import discordBG from '$lib/assets/discord/discord-bg.png';
  import discordLogo from '$lib/assets/discord/discord-logo.png';
  import post from '$lib/assets/discord/post.png';
  import testimonial from '$lib/assets/discord/testimonial.png';
  import informationUpdate from '$lib/assets/discord/information-update.png';
  import informationUpdateMobile from '$lib/assets/discord/information-update-mobile.png';
  import halalCoinCalls from '$lib/assets/discord/halal-coin-calls.png';
  import halalCoinCallsMobile from '$lib/assets/discord/halal-coin-calls-mobile.png';
  import modules from '$lib/assets/discord/modules.png';
  import cryptoModule from '$lib/assets/discord/crypto-module.png';
  import shariaModule from '$lib/assets/discord/sharia-module.png';
  import PrimaryButton from '../components/PrimaryButton.svelte';
</script>

<section id="discord" class="w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({discordBG}); background-attachment: fixed;"
  >
    <div class="bg-black/80">
      <div
        class="mx-auto flex max-w-[70rem] flex-col gap-y-12 px-[4%] py-14 sm:px-[12%] md:gap-y-15 md:px-[4%] md:py-17 lg:gap-y-18 lg:px-[5%] lg:py-20 xl:px-[4%] 2xl:px-[0]"
      >
        <h1 class="strokeme text-center font-jua text-5xl text-orange-600 md:text-6xl">
          JOIN <span class="text-discord">Discord Premium</span> CryptoSharia
        </h1>
        <div class="flex flex-col justify-center gap-y-8 md:flex-row md:gap-x-4 lg:gap-x-5">
          <img src={post} alt="Discord Post" class="w-full md:w-1/2" />
          <img src={testimonial} alt="Discord Testimonial" class="w-full md:w-1/2" />
        </div>
        <div class="flex w-full flex-col gap-y-8 md:hidden">
          <img src={cryptoModule} alt="Discord Crypto Module" />
          <img src={shariaModule} alt="Discord Sharia Module" />
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
        <img class="hidden w-full md:block" src={halalCoinCalls} alt="Discord Halal Coin Calls" />
        <img
          class="block w-full md:hidden"
          src={halalCoinCallsMobile}
          alt="Discord Halal Coin Calls"
        />
        <img class="hidden w-full md:block" src={modules} alt="Discord Modules" />
        <div class="flex flex-col items-center gap-y-10">
          <blockquote class="text-center font-jua">
            <p class="mb-1.5 text-3xl font-bold text-white md:text-4xl">
              ❝Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elito. Suspendisse dictum gomu
              gomu no lacinia elementum❞
            </p>
            <cite class="text-2xl font-bold text-white italic md:text-[2rem]">-Daffa Ilhami-</cite>
          </blockquote>
          {@render joinButton('large')}
          {@render joinButton('medium')}
          {@render joinButton('small')}
        </div>
      </div>
    </div>
  </div>
  <GradientDivider size="large" reverse={true} />
</section>

{#snippet joinButton(size: 'small' | 'medium' | 'large')}
  <div
    class="flex-row items-center justify-center"
    class:hidden={size === 'large' || size === 'medium'}
    class:xl:flex={size === 'large'}
    class:sm:flex={size === 'medium'}
    class:xl:hidden={size === 'medium'}
    class:flex={size === 'small'}
    class:sm:hidden={size === 'small'}
  >
    <img
      src={discordLogo}
      alt="Discord Logo"
      class="-rotate-90"
      class:h-10={size === 'large'}
      class:h-9={size === 'small' || size === 'medium'}
      class:w-13={size === 'large'}
      class:w-12={size === 'medium' || size === 'small'}
      class:translate-x-[10px]={size === 'large'}
      class:translate-x-[9px]={size === 'small' || size === 'medium'}
    />
    <PrimaryButton {size} text="< Gabung Sekarang >" href="#discord" />
    <img
      src={discordLogo}
      alt="Discord Logo"
      class="rotate-90"
      class:h-10={size === 'large'}
      class:h-9={size === 'small' || size === 'medium'}
      class:w-13={size === 'large'}
      class:w-12={size === 'medium' || size === 'small'}
      class:translate-x-[-10px]={size === 'large'}
      class:translate-x-[-9px]={size === 'small' || size === 'medium'}
    />
  </div>
{/snippet}

<style>
  .text-discord {
    color: #5865f2;
  }

  @media (min-width: 1024px) {
    .strokeme {
      text-shadow:
        -2.5px -2.5px 0 #fff,
        2.5px -2.5px 0 #fff,
        -2.5px 2.5px 0 #fff,
        2.5px 2.5px 0 #fff;
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
        -1.5px -1.5px 0 #fff,
        1.5px -1.5px 0 #fff,
        -1.5px 1.5px 0 #fff,
        1.5px 1.5px 0 #fff;
    }
  }
</style>
