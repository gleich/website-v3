<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { toGeoJSON } from '@mapbox/polyline';
	import bbox from '@turf/bbox';
	const token = process?.env ? process?.env.VITE_MAPBOX_TOKEN : import.meta.env.VITE_MAPBOX_TOKEN;
	console.log(token);

	const polylineData =
		'o|peGze_tLaAzAi@ZeHb@aBX{@`A}@nCsCdO_DjVcEbUgAzGc@|DyAhTkBtRi@tIMjKJ~K`@nHz@xIrBfMLLdBTbFlCPVc@~Ai@~BEb@a@nAGd@|B`BdGnCZVxBz@nChC~B~C~@pCh@`Cd@vCAr@Jz@?~Fn@pET`AVf@T|@lA~Ar@p@dDtBL@VOd@VHTtB`BxElBrH~AxFvAdPhG|BvAxArBl@rBPfAFfB`@fDd@fCn@fBlAvBnA`BxAdAjCpAvAjAz@|@b@t@p@f@fAtANDj@p@Pl@n@dATz@^pBTl@PhBXtADjACv@A`CSxBDtAGxAK|@[x@rC?PHJEbAs@zFKtB@jA|Dt@zDXdArBlFrBrBf@jAp@~Ab@nBXrEIfF`@xEKzAp@vE`EtAt@nDbAhBV|FLjAVjAd@jA|@t@z@p@fAjBdE`ArAdCzB`DlDtIbGdBrAlBhBrDnE|AbCdAlDhRVtCF|AHrFGdBXdDd@zBr@jBlAtBbAtAvAjAjFjDBVIl@On@SVHDh@gB@_@ISoFwDcA}@_B_CyA_D[iAa@wCIgKSwDi@cEgCgMWoAg@sAaGuHcC_C_FeDmFgEgEkE{BqCiB_Es@kAcAkAoA{@oCy@oHWkFsAkAm@cFgEoAi@i@EmDNeEa@_FJmAIcB]_DoAkAaAaAeBcBqFy@aE_@aEEoAZqFNw@^mERiALUNCnDdAr@@pK{EjKkBlBFNKl@}EtAoH?o@K{@g@u@k@UmG?_AJi@`@Sb@Kf@Ah@xAlQ@hDi@jGtApNLv@[d@w@L}AAkQCmBQgAm@s@mC{@qBi@eEg@i@[g@m@Y{@KgAZuFKkA_@}@uAaBe@_AMi@AiAh@_CB]GM}@@sCf@s@@cHgDKSCoELqBiA]^OdBC`CP|GfCfA~@t@|DLzAGTKF}KdBcAW}EgC_@AITEj@IpDH|@Zr@z@h@hFpAz@r@XKFWEUQKgA@sFuAe@Y[o@K_ANmGCkEViDQg@eCiD]s@g@iBU_BG{BFuDTqAUWUT?TJ`@GnFHnBZjB\fAfBvCpA~ARAlAk@nDB~A`@fGbCp@x@Vp@b@zEGVu@TsJtAq@OcGyCOc@AaD@y@JwAPq@Vc@^Yt@KhEXlHnCp@t@Zx@Lr@VrDQVm@NsJpAs@OgG_DGYAeDJmCNm@Tc@`Ai@vERbGvBx@d@h@l@d@hALlA';

	let map: mapboxgl.Map | null;
	let mapElement: HTMLElement;

	onMount(() => {
		mapboxgl.accessToken = token;
		map = new mapboxgl.Map({
			container: mapElement,
			style: 'mapbox://styles/mapbox/dark-v10',
			antialias: true,
			attributionControl: false,
			zoom: 0
		}).addControl(new mapboxgl.AttributionControl({ compact: true }));
		map.on('load', () => {
			const data = toGeoJSON(polylineData);
			map?.addSource('route', {
				type: 'geojson',
				data
			});
			map?.addLayer({
				id: 'route',
				type: 'line',
				source: 'route',
				layout: {
					'line-join': 'round',
					'line-cap': 'round'
				},
				paint: {
					'line-color': '#FFF',
					'line-width': 2
				}
			});
			const bounds = bbox(data);
			map?.fitBounds([bounds[0], bounds[1], bounds[2], bounds[3]], { padding: 20, duration: 0 });
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
			map = null;
		}
	});
</script>

<div id="map" bind:this={mapElement} />

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<style>
	#map {
		height: 250px;
		width: 250px;
	}
</style>
