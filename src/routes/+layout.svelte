<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="flex h-screen flex-col">
	<header class="navbar bg-base-200">
		<div class="navbar-start">
			<a href="/" class="text-xl font-bold text-primary"> KitOrpc </a>
		</div>
		<nav class="navbar-end flex items-center gap-2">
			<a href="/" class="btn btn-ghost" class:btn-disabled={page.url.pathname === '/'}> Inicio </a>
			<a href="/add" class="btn btn-ghost" class:btn-disabled={page.url.pathname === '/add'}>
				Agregar usuario
			</a>
		</nav>
	</header>
	{@render children()}
</main>
