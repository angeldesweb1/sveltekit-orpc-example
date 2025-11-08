<script>
	import { createUser } from '$lib/orpc/orpc.remote';
</script>

<form {...createUser}>
	<input type="text" name="name" placeholder="Type your name..." />
	<input type="text" name="description" placeholder="Optionally type a description" />
	<button type="submit">Send</button>
</form>
