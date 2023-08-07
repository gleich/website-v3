<script lang="ts">
	export let title: string;
	export let description: string;
	export let label1: string = 'developer';
	export let label2: string = 'photographer';
	export let data1: string = 'cyclist';
	export let data2: string = 'student';
</script>

<title>
	{title}
</title>

<!-- general -->
<meta name="description" content={description} />
<meta
	name="keywords"
	content="Matt Gleich, Matt, Gleich, Matthew Gleich, Matthew, Gleich, photography, coding, cycling, hampshire"
/>
<meta name="author" content="Matt Gleich" />
<link rel="preconnect" href="https://mattglei.ch" />

<!-- icons -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" />

<!-- open graph -->
<meta property="og:title" content={title} />
<meta property="og:type" content="www" />
<meta property="og:description" content={description} />
<meta
	property="og:locale"
	content="enl
    US"
/>
<meta property="og:image" content="/open-graph-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta property="og:site_name" content="Matt Gleich" />

<!-- twitter -->
<meta property="twitter:creator" content="@matt_gleich" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content="/open-graph-image.png" />
<meta property="twitter:url" content="https://mattglei.ch" />
<meta property="twitter:label1" content={label1} />
<meta property="twitter:label2" content={label2} />
<meta property="twitter:data1" content={data1} />
<meta property="twitter:data2" content={data2} />
