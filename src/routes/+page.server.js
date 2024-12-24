/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const request = await fetch('https://fakestoreapi.com/products');
	const products = await request.json();
	return { products };
}
