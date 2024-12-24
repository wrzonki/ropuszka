<script>
	import { basket } from '$lib';

	let { products } = $props();
	const titleMaxLen = 40;
</script>

<div id="products">
	{#each products as { title, image, price, id }}
		<div class="product">
			<img src={image} alt={title} />
			<div class="title">
				<h3>{title.length > titleMaxLen ? `${title.substring(0, titleMaxLen)}...` : title}</h3>
			</div>
			<div class="price">
				<p>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}</p>
			</div>
			<button class="cta" onclick={() => basket.add({ id, title, price })}>Add to basket</button>
		</div>
	{/each}
</div>

<style>
	#products {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 2rem;
		justify-content: space-around;
	}
	.product {
		overflow: hidden;
		border: 1px solid #222;
		border-radius: 5px;
		position: relative;
		display: grid;
		grid-template:
			'img img' 400px
			'price cta' 50px
			'title title' 80px /
			1fr 1fr;
	}
	img {
		width: 100%;
		height: auto;
		grid-area: img;
	}
	.title {
		background: #ddd;
		grid-area: title;
	}
	h3 {
		text-align: center;
	}
	.price {
		background: #eee;
		grid-area: price;
		padding-left: 10px;
	}
	.cta {
		grid-area: cta;
	}
</style>
