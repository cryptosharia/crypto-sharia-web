<script lang="ts">
	import logo1 from '$lib/assets/logo1.png';

	const links: { text: string; href: string }[] = [
		{ text: 'Tentang', href: '#' },
		{ text: 'Pembina', href: '#pembina' },
		{ text: 'Discord', href: '#discord' },
		{ text: 'Artikel', href: '#artikel' },
		{ text: 'FAQ', href: '#faq' },
		{ text: 'Kontak', href: '#kontak' }
	];

	let isDrawerOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 z-10 flex h-16 w-screen bg-white text-slate-600 shadow-sm">
	<div
		class="mx-auto flex h-full w-full max-w-[125rem] items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36"
	>
		<section>
			<a href="/" class="text-xl font-semibold text-orange-600 md:text-[1.4rem]">
				<img src={logo1} alt="Logo" class="mr-0.5 inline size-9 md:mr-1.5 md:size-10" />
				CryptoSharia
			</a>
		</section>
		<section>
			<button
				id="hamburger-button"
				class={`mr-0.5 flex h-6 w-6 flex-col justify-center hover:cursor-pointer md:mr-0 md:hidden ${isDrawerOpen ? ' hamburger-active' : ''}`}
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
			<!-- <ul class="absolute top-16 right-0 z-10 hidden w-48 bg-white p-4 shadow-lg md:hidden">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="block px-4 py-2 font-medium text-slate-700 hover:text-orange-600"
							>{link.text}</a
						>
					</li>
				{/each}
			</ul> -->
			<ul class="hidden space-x-[1.5rem] md:flex lg:space-x-7">
				{#each links as link}
					{#if link.text !== 'Kontak'}
						<li>
							<a
								href={link.href}
								class="font-medium transition-colors duration-300 ease-in-out hover:text-orange-600"
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
		</section>
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
</style>
