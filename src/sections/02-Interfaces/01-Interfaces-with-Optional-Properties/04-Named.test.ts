import { addToCart, CartItemToAdd } from './03-Named'

describe('addToCart', () => {
	it('does not compile if sku is missing', () => {
		// @ts-ignore
		expect(() => addToCart()).toThrow()
		// @ts-ignore
		addToCart({})
		// @ts-ignore
		addToCart({ quantity: 2 })
	})

	it('compiles when sku provided', () => {
		addToCart({ sku: 'X' })
		addToCart({ sku: 'X', quantity: 2 })
	})

	it('does not compile inline excess color', () => {
		addToCart({
			sku: 'X',
			// @ts-ignore
			color: 'red',
		})
	})

	it('compiles inline excess color when cast as CartItemToAdd', () => {
		addToCart({ sku: 'X', color: 'red' } as CartItemToAdd)
	})

	it('compiles pre-defined excess color w/o casting', () => {
		const item = { sku: 'X', color: 'red' }
		addToCart(item)
	})
})
