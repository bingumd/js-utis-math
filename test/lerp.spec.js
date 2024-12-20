import { lerp } from '..'

describe('lerp', () => {
	it('', () => {
		expect(lerp(0, 10, 0.5)).toBe(5)
		expect(lerp(20, 80, 0.25)).toBe(35)
	})
})
