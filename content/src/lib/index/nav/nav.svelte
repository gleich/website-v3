<script lang="ts">
	import Logo from './logo.svelte';
	import Social from './social.svelte';
</script>

<nav>
	<Logo />
	<div class="right">
		<div class="socials">
			<Social name="Strava" link="https://www.strava.com/athletes/30124266" filename="strava" />
			<Social name="GitHub" link="https://github.com/gleich" filename="github" />
			<Social name="Instagram" link="https://www.instagram.com/mattglei.ch/" filename="instagram" />
			<Social name="Twitter" link="https://twitter.com/matt_gleich" filename="twitter" />
		</div>
		<div class="text">
			<h1>Matt Gleich</h1>
			<h2 class="end-lines">____________</h2>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 3rem;
	}

	.socials {
		margin-bottom: 10px;
		display: flex;
		width: min-content;
		gap: 10px;
		padding-bottom: 5px;
		padding-right: 5px;
		border-bottom: 1px solid var(--foreground);
	}

	.right {
		display: flex;
		flex-direction: column;
	}

	.text {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.end-lines {
		font-family: 'Advanced Dot Digital 7';
		line-height: 5px;
		text-shadow: 0px 0px 20px var(--foreground);
	}

	@media (prefers-color-scheme: light) {
		.end-lines {
			text-shadow: 0px 0px 10px var(--foreground);
		}
	}

	@font-face {
		font-family: 'Advanced Dot Digital 7';
		src: url('/fonts/advanced_dot_digital-7.ttf');
	}
</style>
