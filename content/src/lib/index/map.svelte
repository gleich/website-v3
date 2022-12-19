<div class="container">
	<img src="/map.svg" alt="Map" />

	<h1 class="two-stops"><a href="/photography">photography</a></h1>
</div>

<style>
	.container {
		display: inline-block;
		border: white 2px solid;
		width: 640px;
		height: 370px;
		position: relative;
	}

	img {
		position: relative;
		left: 0;
		top: 0;
	}

	h1 {
		font-family: '5by7';
		position: absolute;
		rotate: -45deg;
		font-size: 28px;
		bottom: 127px;
		text-shadow: 0px 0px 20px #669040, 0px 0px 0px #669040;
	}

	.two-stops {
		left: 180px;
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

	a {
		color: #669040;
		text-decoration: none;
	}

	@font-face {
		font-family: 'Advanced Dot Digital 7';
		src: url('/fonts/advanced_dot_digital-7.ttf');
	}

	@font-face {
		font-family: '5by7';
		src: url('/fonts/5by7.ttf');
	}
</style>
