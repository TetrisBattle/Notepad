// Good for small datasets
// Time complexity O(n2)
// In-Place Algorithm
export const quickSort = (array) => {
	const swap = (array, i, j) => {
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	const sort = (array, start, end) => {
		if (start >= end) return

		const partition = () => {
			const pivot = array[end]
			let sortIndex = start

			for (let i=start; i<=end-1; i++) {
				if (array[i] < pivot) {
					swap(array, sortIndex, i)
					sortIndex++
				}
			}

			swap(array, sortIndex, end)
			return sortIndex
		}

		const pivot = partition()
		sort(array, start, pivot - 1)
		sort(array, pivot + 1, end)
	}

	sort(array, 0, array.length - 1)
}

// Good for large datasets
// Time complexity O(n log n)
// Space complexity O(n)
export const mergeSort = (array) => {
	const merge = (array, start, end, middle) => {
		const leftArrayLength = middle - start + 1
		const rightArrayLength = end - middle

		const leftArray = array.slice(start, leftArrayLength + start)
		const rightArray = array.slice(middle + 1, rightArrayLength + middle + 1)

		let leftArrayIndex = 0
		let rightArrayIndex = 0
		let mergeIndex = start

		while (leftArrayIndex < leftArrayLength && rightArrayIndex < rightArrayLength) {
			if (leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
				array[mergeIndex] = leftArray[leftArrayIndex]
				leftArrayIndex++
			} else {
				array[mergeIndex] = rightArray[rightArrayIndex]
				rightArrayIndex++
			}
			mergeIndex++
		}

		while (leftArrayIndex < leftArrayLength) {
			array[mergeIndex] = leftArray[leftArrayIndex]
			leftArrayIndex++
			mergeIndex++
		}

		while (rightArrayIndex < rightArrayLength) {
			array[mergeIndex] = rightArray[rightArrayIndex]
			rightArrayIndex++
			mergeIndex++
		}
	}

	const sort = (array, start, end) => {
		if (start >= end) return
		const middle = start + parseInt((end - start) / 2)
		sort(array, start, middle)
		sort(array, middle + 1, end)
		merge(array, start, end, middle)
	}

	sort(array, 0, array.length - 1)
}
