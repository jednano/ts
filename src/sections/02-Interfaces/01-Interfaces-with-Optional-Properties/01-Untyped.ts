// @ts-ignore
export function addToCart({ sku, quantity }) {
	return fetch('/api/cart/add', {
		body: JSON.stringify({ sku, quantity }),
	})
}
