<script lang="ts">
  let { name, bio, imageUrl }: { name: string; bio: string; imageUrl: string } = $props();
</script>

<div class="w-60">
  <img
    data-aos="zoom-out"
    data-aos-duration="1000"
    src={imageUrl}
    alt={name}
    class="mb-2 h-60 w-full rounded-2xl object-cover"
  />
  <h2 class="text-center text-2xl font-semibold text-orange-600">{name}</h2>
  <p class="text-center text-slate-700">{bio}</p>
</div>
