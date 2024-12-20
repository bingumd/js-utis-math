import { map } from '..'

describe('map', () => {
	it('', () => {
		expect(map(5, 0, 10, 0, 100)).toBe(50)
		expect(map(3, 0, 4, 100, 200)).toBe(175)
	})
})
