<script>
	import Logo from '$lib/index/nav/logo.svelte';
</script>

<main>
	<Logo class="logo" />
</main>

<style>
	:global(.logo) {
		width: 200px;
		height: auto;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}
</style>
