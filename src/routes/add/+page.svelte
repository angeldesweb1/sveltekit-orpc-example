<script>
	import { createUser } from '$lib/client/actions/users.remote';
</script>

<svelte:head>
	<title>Sveltekit Orpc - Basic integration</title>
</svelte:head>

<section class="flex grow flex-col">
	<div class="p-4 text-center text-secondary">
		<span class="text-xl">
			Debido a no estar vinculado a ninguna base de datos, la información registrada no será
			persistida.
		</span>
	</div>
	<div class="card m-auto w-full bg-base-200 md:w-96">
		<form class="card-body" {...createUser}>
			<input
				class="input-bordered input w-full"
				type="text"
				name="name"
				placeholder="Type your name..."
			/>
			<input
				class="input-bordered input w-full"
				type="text"
				name="description"
				placeholder="Optionally type a description"
			/>
			<button class="btn btn-primary" type="submit">Send</button>
		</form>
	</div>
	{#if createUser.result?.name}
		<span class="mx-auto mb-4 text-xl text-success">Data procesada</span>
		<ul class="list mx-auto mb-4 w-full bg-base-200 md:w-96">
			<li class="list-row flex gap-2">{createUser.result.name}</li>
			<li class="list-row flex gap-2">{createUser.result?.description || 'Sin descripción'}</li>
		</ul>
	{/if}
</section>
