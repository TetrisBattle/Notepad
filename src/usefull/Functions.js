export function binarySearch(array, target) {
	let min = 0
	let max = array.length - 1

	while (true) {
		const mid = Math.round((min + max) / 2)
		
		if (target === array[mid]) return mid
		
		if (target < array[mid]) max = mid - 1
		else min = mid + 1
		
		if (min > max) return false
	}
}
