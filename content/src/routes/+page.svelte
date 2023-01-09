<script>
	import Card from '$lib/card.svelte';
	import Nav from '$lib/index/nav/nav.svelte';

	const polylines = [
		'pdefAa}}y^HlDxCvFbC`CfEnAzDvF|BvAnH|@fF@xQ{EbHdBhFAd@I`BZf@`Cc@vCr@TYp@aDPc@jAjEhD`BvCZrBm@tFrB`Bp@rBk@lBNrAa@h@gANaDcAwBtB^~AnBvA`@tBkCDf@pCuAz@EdAz@rCjA@rCj@jCzCbC~AdEbDhA~AjBfF`AjBw@lF[dBj@nAdEfCe@jBApCfErEAjCuB`Bj@XvBzClArAC|AaAnAaFoAkBwCaBEgEdCcEtDc@|BmAb@yAKaC_G{BsDv@sCqByBpB}BeCsCI{@~@p@`Cy@xAP|A[x@g@b@cGbAgH{DSs@x@oCsC_CVkDs@oDr@eAnEl@jC|A`BYzBVpBc@`@qCnBT|@g@{@[iC_Bw@s@_BcC]eDZoUaIa@gCgDqBmCPMdC{@fAuFcBaAjC~C~Dc@rCNrAwAx@{DeAoBpBX|AtB~A`@nBoCNl@hCyA`AAjAZp@tClAb@lGdDrCrAtDjDvAlAdBlANv@uDqCcGh@cAlA`@PpCbAdBnB`AhBUCk@aCuArAeHi@mA?eBkAo@l@gASs@^gB~@DPhFrBnEi@bCzAZbAwB?wAt@uBsCiCXaDm@sEnAo@pDt@lC|A`EAvBYf@wCt@UlAb@lAuA_@aD{Am@a@sAuCg@iDVgU{Hc@gCeDsBmCNMdCs@bAeCe@oAqAoCqHgFyDRkA|CMb@uAaDgAmCd@Yc@PuAe@k@}FAiHcB_R|EiFG}HkAcBsAeDeFeGaCuE_HY}D|A_FEcEhAqD]}@gYgHs@yBt@mGu@gAwBhC[vDe@l@u@]IqEk@s@s_@{GA{LdBgFpAiHFgPi@gA_CByZrI}IfAsCs@uG{HuBm@aCH}DtBeCzFiAjAiWbEqDfBqBtCo@jFrA~LqBj@Op@jDbEeJbI[fBP|BpAxDrB~BtPnHpFlLhAPzBe@@iA~@}@uBuAIwBsAy@l@iBbB?hAzCfCzAjD_CCq@oC_CMgBn@c@jCO|Ab@nFxJbMiI|DbFp@ShCcGhGnEj@w@c@qCtBm@b@u@SuAwBwC_@mD{E{@kJd@yDrJuYiGcHb@aOlC[gBNsD~BgBGsDlAcC^kCiCmM|GkAxJoHpMR~An@bA~AV`DaE`GD`Ku@Z{D_AeFjEiM`B_G~A{@lCTlEfATzHwBvLeA~XlGbAu@|AiGr@}@jI[xEh@n@~DtBvCJvAsCnA`@fC]z@{@Q{EyD',
		'o|peGze_tLaAzAi@ZeHb@aBX{@`A}@nCsCdO_DjVcEbUgAzGc@|DyAhTkBtRi@tIMjKJ~K`@nHz@xIrBfMLLdBTbFlCPVc@~Ai@~BEb@a@nAGd@|B`BdGnCZVxBz@nChC~B~C~@pCh@`Cd@vCAr@Jz@?~Fn@pET`AVf@T|@lA~Ar@p@dDtBL@VOd@VHTtB`BxElBrH~AxFvAdPhG|BvAxArBl@rBPfAFfB`@fDd@fCn@fBlAvBnA`BxAdAjCpAvAjAz@|@b@t@p@f@fAtANDj@p@Pl@n@dATz@^pBTl@PhBXtADjACv@A`CSxBDtAGxAK|@[x@rC?PHJEbAs@zFKtB@jA|Dt@zDXdArBlFrBrBf@jAp@~Ab@nBXrEIfF`@xEKzAp@vE`EtAt@nDbAhBV|FLjAVjAd@jA|@t@z@p@fAjBdE`ArAdCzB`DlDtIbGdBrAlBhBrDnE|AbCdAlDhRVtCF|AHrFGdBXdDd@zBr@jBlAtBbAtAvAjAjFjDBVIl@On@SVHDh@gB@_@ISoFwDcA}@_B_CyA_D[iAa@wCIgKSwDi@cEgCgMWoAg@sAaGuHcC_C_FeDmFgEgEkE{BqCiB_Es@kAcAkAoA{@oCy@oHWkFsAkAm@cFgEoAi@i@EmDNeEa@_FJmAIcB]_DoAkAaAaAeBcBqFy@aE_@aEEoAZqFNw@^mERiALUNCnDdAr@@pK{EjKkBlBFNKl@}EtAoH?o@K{@g@u@k@UmG?_AJi@`@Sb@Kf@Ah@xAlQ@hDi@jGtApNLv@[d@w@L}AAkQCmBQgAm@s@mC{@qBi@eEg@i@[g@m@Y{@KgAZuFKkA_@}@uAaBe@_AMi@AiAh@_CB]GM}@@sCf@s@@cHgDKSCoELqBiA]^OdBC`CP|GfCfA~@t@|DLzAGTKF}KdBcAW}EgC_@AITEj@IpDH|@Zr@z@h@hFpAz@r@XKFWEUQKgA@sFuAe@Y[o@K_ANmGCkEViDQg@eCiD]s@g@iBU_BG{BFuDTqAUWUT?TJ`@GnFHnBZjB\fAfBvCpA~ARAlAk@nDB~A`@fGbCp@x@Vp@b@zEGVu@TsJtAq@OcGyCOc@AaD@y@JwAPq@Vc@^Yt@KhEXlHnCp@t@Zx@Lr@VrDQVm@NsJpAs@OgG_DGYAeDJmCNm@Tc@`Ai@vERbGvBx@d@h@l@d@hALlA'
	];
</script>

<div class="root">
	<main>
		<nav>
			<Nav />
		</nav>
		<div class="welcome">
			hello and welcome to my website! I'm Matt Gleich, a first year student at RIT (Rochester
			Institute of Technology) studying CS. I'm not currently looking for a position but I'm always
			up for meeting new people! Feel free out over email at <a href="mailto:email@mattglei.ch"
				>email@mattglei.ch</a
			>
			or on <a href="https://twitter.com/matt_gleich" target="_blank" rel="noreferrer">twitter</a>.
		</div>
		<div class="cards">
			<Card polyline={polylines[0]} />
		</div>
	</main>
</div>

<style>
	.root {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Helvetica';
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: 800px;
	}

	nav {
		padding-bottom: 10px;
	}

	.welcome {
		padding: 20px;
		border: 0.5px var(--border) solid;
		margin-bottom: 50px;
	}

	/* global styles */

	:global(p, h1, h2, h3, h4, h4, h5, h6) {
		margin: 0;
	}

	:global(a) {
		color: #49a4ff;
	}

	@media (max-width: 578px) {
		.welcome {
			margin: 25px;
		}
	}
</style>
