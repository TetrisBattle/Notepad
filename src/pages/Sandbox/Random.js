export default class Playground {
	// constructor() {}
	
	testA() {
		
	}
	
	testB() {}
	testC() {}
	testD() {}
	testE() {}
}

export class Printer {
	print(str) { console.log(str) }
	printWithStyle(str) { console.log(`%c${str}`, 'color; cyan; font-size: 24px;') }
	printTable(array) { console.table(array) }
	printElement(element) { console.dir(element) }
	printDuration(f) {
		console.time('printDuration')
		f()
		console.timeEnd('printDuration')
	}
	
	alert(str) { alert(str) }
}

export class StringHandler {
	stringify(json) { return JSON.stringify(json) }
}
