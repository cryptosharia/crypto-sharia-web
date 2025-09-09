<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import PembinaCard from '../components/PembinaCard.svelte';
  import Title from '../components/Title.svelte';

  const pembinas = [
    {
      name: 'Daffa Ilhami',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageUrl:
        'https://api-mainnet.suifrens.sui.io/suifrens/0x04a19ee8a526bd5f2fabcb903fd37e798a2a3b814ead7240a40cf405e4e831e6/svg'
    },
    {
      name: 'Satoshi Nakamoto',
      bio: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore',
      imageUrl: 'https://pbs.twimg.com/media/GxaYTrJXkAAuoZt.png'
    },
    {
      name: 'Vitalik Buterin',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageUrl: 'https://static.news.bitcoin.com/wp-content/uploads/2025/02/vbuterin1.png'
    },
    {
      name: 'Anatoly Yakovenko',
      bio: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore',
      imageUrl:
        'https://external-preview.redd.it/solana-co-founder-anatoly-yakovenko-advocates-for-fair-v0-WXPCkWvUiBMFZdTUUbe2KIRtIUHTst3CX3kWq8IuO1k.jpg?width=1080&crop=smart&auto=webp&s=56e9b364c740f3b7ebeaebc0878f31ed83cb3e8d'
    },
    {
      name: 'Evan Cheng',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageUrl:
        'https://consensus-hongkong2025.coindesk.com/site/consensushongkong202/images/userfiles/speakers/a6264ed03f7dade12c995a8ad375a7fe.jpg'
    }
  ];
</script>

<section class="w-full max-w-[90rem]">
  <Title class="text-center">Pembina Kami</Title>
  <Divider />
  <div
    class="flex w-full flex-row flex-wrap items-start justify-center gap-x-8 gap-y-8 px-6 pt-5 md:gap-x-24 md:gap-y-12 lg:gap-x-30 xl:gap-x-48"
  >
    {#each pembinas as pembina}
      <PembinaCard name={pembina.name} bio={pembina.bio} imageUrl={pembina.imageUrl} />
    {/each}
  </div>
</section>
