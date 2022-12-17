<div class="container">
	<h1><p>Next Stop</p></h1>
</div>

<style>
	.container {
		display: inline-block;
		border: white 2px solid;
		width: 300px;
		height: 200px;
	}

	h1 {
		font-family: 'Advanced Dot Digital 7';
		color: #ff8e90;
		text-shadow: 0px 0px 20px #ff4d4d, 0px 0px 20px #ff4d4d;
		transform: rotate(-45deg) translateY(7px) translateX(-35px);
		animation: glow infinite 10s;
	}

	@keyframes glow {
		10% {
			text-shadow: none;
		}

		100% {
			text-shadow: 0px 0px 20px #ff4d4d, 0px 0px 20px #ff4d4d;
		}
	}

	h1,
	p,
	h2,
	h3,
	h4,
	h5 {
		padding: none;
		margin: none;
	}

	@font-face {
		font-family: 'Advanced Dot Digital 7';
		src: url('/fonts/advanced_dot_digital-7.ttf');
	}
</style>
