<script>
	import { getUsers } from '$lib/client/actions/users.remote';
</script>

<svelte:head>
	<title>Sveltekit Orpc - Basic integration</title>
</svelte:head>

<section class="mt-4 flex grow flex-col p-4 text-center">
	<h1 class="text-2xl font-bold text-primary">Bienvenido</h1>
	<p>Esta es una prueba de orpc con sveltekit y su feature remote functions.</p>
	<span class="text-xs">
		Puedes ver el código fuente haciendo click
		<a
			class="link text-primary link-hover"
			href="https://github.com/angeldesweb1/sveltekit-orpc-example"
			target="_blank"
		>
			aquí
		</a>
	</span>
	<div class="divider"></div>
	{#await getUsers({})}
		<span class="text-xl text-accent">Cargando...</span>
	{:then users}
		<h2 class="my-4 text-xl text-accent">Listado de usuarios</h2>
		<ul class="list mx-auto w-full rounded-box bg-base-200 shadow-md sm:w-96">
			{#each users as user}
				<li class="list-row flex items-center justify-between">
					<span class="text-secondary">{user.id}</span>
					<span class="font-bold text-primary">{user.name}</span>
				</li>
			{/each}
		</ul>
	{/await}
</section>
