<script>
	import Basket from '$lib/Basket.svelte';
	import Listing from '$lib/Listing.svelte';
	let { data } = $props();
	console.log(data.products);
</script>

<Basket />

<Listing products={data.products} />
