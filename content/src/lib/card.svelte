<script>
	import PolylineSvg from './polylineSVG.svelte';

	const polyline =
		'o|peGze_tLaAzAi@ZeHb@aBX{@`A}@nCsCdO_DjVcEbUgAzGc@|DyAhTkBtRi@tIMjKJ~K`@nHz@xIrBfMLLdBTbFlCPVc@~Ai@~BEb@a@nAGd@|B`BdGnCZVxBz@nChC~B~C~@pCh@`Cd@vCAr@Jz@?~Fn@pET`AVf@T|@lA~Ar@p@dDtBL@VOd@VHTtB`BxElBrH~AxFvAdPhG|BvAxArBl@rBPfAFfB`@fDd@fCn@fBlAvBnA`BxAdAjCpAvAjAz@|@b@t@p@f@fAtANDj@p@Pl@n@dATz@^pBTl@PhBXtADjACv@A`CSxBDtAGxAK|@[x@rC?PHJEbAs@zFKtB@jA|Dt@zDXdArBlFrBrBf@jAp@~Ab@nBXrEIfF`@xEKzAp@vE`EtAt@nDbAhBV|FLjAVjAd@jA|@t@z@p@fAjBdE`ArAdCzB`DlDtIbGdBrAlBhBrDnE|AbCdAlDhRVtCF|AHrFGdBXdDd@zBr@jBlAtBbAtAvAjAjFjDBVIl@On@SVHDh@gB@_@ISoFwDcA}@_B_CyA_D[iAa@wCIgKSwDi@cEgCgMWoAg@sAaGuHcC_C_FeDmFgEgEkE{BqCiB_Es@kAcAkAoA{@oCy@oHWkFsAkAm@cFgEoAi@i@EmDNeEa@_FJmAIcB]_DoAkAaAaAeBcBqFy@aE_@aEEoAZqFNw@^mERiALUNCnDdAr@@pK{EjKkBlBFNKl@}EtAoH?o@K{@g@u@k@UmG?_AJi@`@Sb@Kf@Ah@xAlQ@hDi@jGtApNLv@[d@w@L}AAkQCmBQgAm@s@mC{@qBi@eEg@i@[g@m@Y{@KgAZuFKkA_@}@uAaBe@_AMi@AiAh@_CB]GM}@@sCf@s@@cHgDKSCoELqBiA]^OdBC`CP|GfCfA~@t@|DLzAGTKF}KdBcAW}EgC_@AITEj@IpDH|@Zr@z@h@hFpAz@r@XKFWEUQKgA@sFuAe@Y[o@K_ANmGCkEViDQg@eCiD]s@g@iBU_BG{BFuDTqAUWUT?TJ`@GnFHnBZjB\fAfBvCpA~ARAlAk@nDB~A`@fGbCp@x@Vp@b@zEGVu@TsJtAq@OcGyCOc@AaD@y@JwAPq@Vc@^Yt@KhEXlHnCp@t@Zx@Lr@VrDQVm@NsJpAs@OgG_DGYAeDJmCNm@Tc@`Ai@vERbGvBx@d@h@l@d@hALlA';
</script>

<div class="container">
	<PolylineSvg {polyline} />
</div>

<style>
	.container {
		border-radius: 5px;
		color: black;
		width: 100%;
		height: 200px;
	}
</style>
