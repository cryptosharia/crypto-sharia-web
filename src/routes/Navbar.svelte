<script lang="ts">
	import logo1 from '$lib/assets/logo1.png';
	import { onMount } from 'svelte';

	const links: { text: string; href: string }[] = [
		{ text: 'Tentang', href: '#' },
		{ text: 'Pembina', href: '#pembina' },
		{ text: 'Discord', href: '#discord' },
		{ text: 'Artikel', href: '#artikel' },
		{ text: 'FAQ', href: '#faq' },
		{ text: 'Kontak', href: '#kontak' }
	];

	let isDrawerOpen = $state(false);
	let drawerHeight = $state(1000);

	onMount(() => {
		drawerHeight = document.getElementById('drawer')?.clientHeight || 1000;
	});
</script>

<nav class="fixed top-0 left-0 z-10 flex h-16 w-screen bg-white text-slate-600 shadow-sm">
	<div
		class="mx-auto flex h-full w-full max-w-[125rem] items-center justify-between bg-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36"
	>
		<section>
			<a href="/" class="text-xl font-semibold text-orange-600 md:text-[1.4rem]">
				<img src={logo1} alt="Logo" class="mr-0.5 inline size-9 md:mr-1.5 md:size-10" />
				CryptoSharia
			</a>
		</section>
		<section>
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
				class="absolute left-0 -z-10 w-screen rounded-b-4xl border-b border-slate-200 bg-white px-6 shadow-md transition-transform duration-300 ease-in-out"
				style={`top: -${drawerHeight}px`}
				class:drawer-open={isDrawerOpen}
			>
				<ul class="flex flex-col">
					{#each links as link}
						{#if link.text !== 'Kontak'}
							<li class="border-b border-slate-200 py-3">
								<a
									href={link.href}
									onclick={() => setTimeout(() => (isDrawerOpen = false), 200)}
									class="block w-full text-center font-medium transition-colors duration-300 ease-in-out hover:text-orange-600"
									>{link.text}</a
								>
							</li>
						{:else}
							<li class="er-slate-200 py-3">
								<a
									href={link.href}
									onclick={() => setTimeout(() => (isDrawerOpen = false), 200)}
									class="block w-full rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-1.5 text-center font-bold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-orange-600"
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
			<!-- /Desktop Menu -->
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

	:global(.drawer-open) {
		transform: translateY(calc(100% + 4rem));
	}
</style>
