<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import Social from './social.svelte';

	const subtitles = ['developer', 'photographer', 'cyclist', 'student'];
	$: subtitleIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			if (subtitleIndex + 1 === subtitles.length) {
				subtitleIndex = 0;
			} else {
				subtitleIndex++;
			}
		}, 1500);

		return () => {
			interval;
		};
	});
</script>

<div class="container">
	<Logo class="logo" />
	<div class="right">
		<h1>Matt Gleich</h1>
		<div class="bottom">
			<div class="socials">
				<Social name="GitHub" link="https://github.com/gleich" filename="github" />
				<Social
					name="Instagram"
					link="https://www.instagram.com/mattglei.ch/"
					filename="instagram"
				/>
				<Social name="Strava" link="https://www.strava.com/athletes/30124266" filename="strava" />
				<Social name="Twitter" link="https://twitter.com/matt_gleich" filename="twitter" />
			</div>
			<p class="subtitle">{subtitles[subtitleIndex]}</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
	}

	.socials {
		display: flex;
		width: min-content;
		gap: 10px;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-top: 15px;
	}

	.bottom {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
		padding-right: 5px;
		border-top: 1px solid var(--foreground);
		width: 100%;
	}

	.subtitle {
		font-family: 'ProFontWindows';
		font-size: 18px;
		line-height: 10px;
	}

	:global(.logo) {
		width: 200px;
		height: auto;
	}

	@media (max-width: 578px) {
		nav {
			flex-direction: column;
		}

		:global(.logo) {
			width: 300px;
		}
	}
</style>
