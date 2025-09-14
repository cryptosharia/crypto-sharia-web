<script lang="ts">
  import GradientDivider from '../components/GradientDivider.svelte';
  import kontakBG from '$lib/assets/kontak-bg.png';
  import Title from '../components/Title.svelte';
  import Divider from '../components/Divider.svelte';
  import InputField from '../components/InputField.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';
</script>

<section id="kontak" class="w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({kontakBG}); background-attachment: fixed;"
  >
    <div class="bg-black/50">
      <div
        class="mx-auto flex max-w-[70rem] flex-col gap-y-12 px-[4%] py-14 sm:px-[12%] md:gap-y-15 md:px-[4%] md:py-17 lg:gap-y-18 lg:px-[5%] lg:py-20 xl:px-[4%] 2xl:px-[0]"
      >
        <div class="flex flex-row justify-center">
          <div class="flex-1">
            <Title class="text-center text-white">Kontak Kami</Title>
            <Divider usePadding={false} />
            <div class="mt-3.5 flex flex-col gap-y-0">
              <div class="flex flex-col gap-y-3">
                <InputField label="Nama" hint="Masukkan nama anda" />
                <InputField label="Email" hint="Masukkan alamat email anda" />
                <InputField label="Pesan" hint="Masukkan pesan anda" multiline={true} />
              </div>
              <h3 class="my-1 text-right text-white" style="letter-spacing: 2px;">
                <i>cryptoshariaforum@gmail.com</i>
              </h3>
              <PrimaryButton text="Kirim Pesan" href="#kontak" size="small" extend={true} />
            </div>
          </div>
          <div class="flex flex-1 flex-col">
            <div>
              <Title class="text-center text-white">Media Sosial</Title>
              <Divider />
            </div>
            <div>
              <Title class="text-center text-white"
                >Support <i class="text-orange-600">CryptoSharia</i></Title
              >
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
