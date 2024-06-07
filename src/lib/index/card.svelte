<div class="card">
	<slot />
</div>

<style>
	.card {
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border: 0.05px var(--border) solid;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 10px 0;
		border-radius: 8px;
	}
</style>
