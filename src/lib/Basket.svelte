<script>
	import { basket } from '$lib';
</script>

<h1>Basket</h1>
<table>
	<thead>
		<tr>
			<th>Product</th>
			<th>Price</th>
			<th>Quantity</th>
			<th>Total</th>
		</tr>
	</thead>
	<tbody>
		{#each basket.get() as item}
			<tr>
				<td>{item.title}</td>
				<td
					>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
						item.price
					)}</td
				>
				<td
					><input
						type="number"
						value={item.quantity}
						oninput={(e) => basket.changeQuantity(item.id, e)}
					/></td
				>
				<td
					>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
						item.price * item.quantity
					)}</td
				>
        <td>
          <button onclick={() => basket.deleteItem(item.id)}>Delete X</button>
        </td>
			</tr>
		{/each}
	</tbody>
</table>

<h2>
	Total: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
		basket.get().reduce((acc, item) => acc + item.price * item.quantity, 0)
	)}
</h2>
