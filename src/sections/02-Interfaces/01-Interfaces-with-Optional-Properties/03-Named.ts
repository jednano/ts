export interface CartItemToAdd {
	sku: string;
	quantity?: number;
}

export function addToCart(
	{
		sku,
		quantity = 1,
	}: CartItemToAdd,
) {
	return fetch('/api/cart/add', {
		body: JSON.stringify({ sku, quantity }),
	})
}
