<script lang="ts">
  let { name, bio, image }: { name: string; bio: string; image: string } = $props();
</script>

<div class="w-62">
  <img
    data-aos="zoom-out"
    data-aos-duration="1000"
    src={image}
    alt={name}
    class="mb-2 h-62 w-full rounded-2xl object-cover"
  />
  <h2 class="text-center text-xl font-semibold text-orange-600">{name}</h2>
  <p class="text-center text-slate-700">{bio}</p>
</div>
