export function addToCart(
	{
		sku,
		quantity = 1,
	}: {
		sku: string;
		quantity?: number;
	},
) {
	return fetch('/api/cart/add', {
		body: JSON.stringify({ sku, quantity }),
	})
}
