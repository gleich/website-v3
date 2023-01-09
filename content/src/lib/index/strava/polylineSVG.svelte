<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { toGeoJSON } from '@mapbox/polyline';
	import bbox from '@turf/bbox';
	const token = import.meta.env.VITE_MAPBOX_TOKEN;

	export let polyline: string;

	// const polylineData =
	// 	'pdefAa}}y^HlDxCvFbC`CfEnAzDvF|BvAnH|@fF@xQ{EbHdBhFAd@I`BZf@`Cc@vCr@TYp@aDPc@jAjEhD`BvCZrBm@tFrB`Bp@rBk@lBNrAa@h@gANaDcAwBtB^~AnBvA`@tBkCDf@pCuAz@EdAz@rCjA@rCj@jCzCbC~AdEbDhA~AjBfF`AjBw@lF[dBj@nAdEfCe@jBApCfErEAjCuB`Bj@XvBzClArAC|AaAnAaFoAkBwCaBEgEdCcEtDc@|BmAb@yAKaC_G{BsDv@sCqByBpB}BeCsCI{@~@p@`Cy@xAP|A[x@g@b@cGbAgH{DSs@x@oCsC_CVkDs@oDr@eAnEl@jC|A`BYzBVpBc@`@qCnBT|@g@{@[iC_Bw@s@_BcC]eDZoUaIa@gCgDqBmCPMdC{@fAuFcBaAjC~C~Dc@rCNrAwAx@{DeAoBpBX|AtB~A`@nBoCNl@hCyA`AAjAZp@tClAb@lGdDrCrAtDjDvAlAdBlANv@uDqCcGh@cAlA`@PpCbAdBnB`AhBUCk@aCuArAeHi@mA?eBkAo@l@gASs@^gB~@DPhFrBnEi@bCzAZbAwB?wAt@uBsCiCXaDm@sEnAo@pDt@lC|A`EAvBYf@wCt@UlAb@lAuA_@aD{Am@a@sAuCg@iDVgU{Hc@gCeDsBmCNMdCs@bAeCe@oAqAoCqHgFyDRkA|CMb@uAaDgAmCd@Yc@PuAe@k@}FAiHcB_R|EiFG}HkAcBsAeDeFeGaCuE_HY}D|A_FEcEhAqD]}@gYgHs@yBt@mGu@gAwBhC[vDe@l@u@]IqEk@s@s_@{GA{LdBgFpAiHFgPi@gA_CByZrI}IfAsCs@uG{HuBm@aCH}DtBeCzFiAjAiWbEqDfBqBtCo@jFrA~LqBj@Op@jDbEeJbI[fBP|BpAxDrB~BtPnHpFlLhAPzBe@@iA~@}@uBuAIwBsAy@l@iBbB?hAzCfCzAjD_CCq@oC_CMgBn@c@jCO|Ab@nFxJbMiI|DbFp@ShCcGhGnEj@w@c@qCtBm@b@u@SuAwBwC_@mD{E{@kJd@yDrJuYiGcHb@aOlC[gBNsD~BgBGsDlAcC^kCiCmM|GkAxJoHpMR~An@bA~AV`DaE`GD`Ku@Z{D_AeFjEiM`B_G~A{@lCTlEfATzHwBvLeA~XlGbAu@|AiGr@}@jI[xEh@n@~DtBvCJvAsCnA`@fC]z@{@Q{EyD';

	let prefersDarkMode = false;

	let map: mapboxgl.Map | null;
	let mapElement: HTMLElement;

	onMount(() => {
		prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		mapboxgl.accessToken = token;
		map = new mapboxgl.Map({
			container: mapElement,
			style: prefersDarkMode
				? 'mapbox://styles/mapbox/dark-v10'
				: 'mapbox://styles/mapbox/light-v10',
			antialias: true,
			attributionControl: false,
			zoom: 0
		}).addControl(new mapboxgl.AttributionControl({ compact: true }));
		map.on('load', () => {
			const data = toGeoJSON(polyline);
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
					'line-color': prefersDarkMode ? '#FFF' : '#000',
					'line-width': 1.5
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
