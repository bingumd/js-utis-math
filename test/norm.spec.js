import { norm } from '..'

describe('norm', () => {
	it('', () => {
		expect(norm(70, 50, 100)).toBeCloseTo(0.4)
		expect(norm(30, 0, 120)).toBeCloseTo(0.25)
		expect(norm(5, 0, 10)).toBeCloseTo(0.5)
	})
})
