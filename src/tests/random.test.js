// const sum = require("./sum")

const sum = (a, b) => {
	return a + b
}

describe("random tests", () => {
	
	// const myClass
	// beforeEach(() => {
	// 	myClass = new myClass()
	// })
	
	test("sum test", () => {
		expect(sum(1, 2)).toBe(3)
	})
})

