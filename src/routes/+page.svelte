<script>
	import { getUsers } from '$lib/orpc/orpc.remote';
</script>

{#await getUsers({})}
	<span>Cargando...</span>
{:then users}
	<ul>
		{#each users as user}
			<li>{user.id} - {user.name}</li>
		{/each}
	</ul>
{/await}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
