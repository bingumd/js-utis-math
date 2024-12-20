import { clamp } from '..'

describe('clamp', () => {
	it('', () => {
		expect(clamp(5, 0, 10)).toBe(5)
		expect(clamp(-2, 0, 10)).toBe(0)
		expect(clamp(15, 0, 10)).toBe(10)
	})
})
