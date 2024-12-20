import { mod } from '..'

describe('mod', () => {
	it('', () => {
		expect(mod(7, 3)).toBe(1)
		expect(mod(-7, 3)).toBe(2)
		expect(mod(10, 5)).toBe(0)
	})
})
