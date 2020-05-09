/*
Description :

Frequency counters

This pattern uses objects or sets to collect values/frequencies of values

This pattern can often avoid the need for nested loops or O(N^2) operations
with arrays/strings

This pattern also useful for compare multiply peaces of data (for example anagramm )

 */

const getExecTime = (func = () => {
}, arg) => {
	const start = new Date().getTime();
	func.call(null,arg);
	const end = new Date().getTime();
	return `Execution ${func.name}: ${end - start}ms `;
};

const sqArguments = (arr1 = []) => (
	{
		arr1,
		arr2: arr1.map(el => el ** 2),
	}
);
const plusOneArguments = (arr1 = []) => (
	{
		arr1,
		arr2: arr1.map(el => el + 1),
	}
);


// not the best solution
const isSame = ({arr1,arr2}) => {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}

		arr2.splice(correctIndex, 1);
	}
	return true;
};

//


function myIsSame({arr1, arr2}) {
// .reduce, O(n)
	const createObject = (arg = []) => (arg.reduce((obj, currEl) => {
			obj[currEl] = (obj[currEl] || 0) + 1;
			return obj;
		}, {})
	);

	if (arr1.length !== arr2.length) return false;

	let frequencyCounter1 = createObject(arr1);
	let frequencyCounter2 = createObject(arr2);

	for (const key in frequencyCounter1) {

		if ( !(key ** 2 in frequencyCounter2)) return false;

		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;

	}
	return true;
}



const trulyArguments = sqArguments([1, 12, 123, 23, 34, 545, 1, 1, 2, 2, 3]);

const falselyArguments = plusOneArguments([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(myIsSame(trulyArguments));
console.log(myIsSame(falselyArguments))

console.log(getExecTime(myIsSame,  trulyArguments));
console.log(getExecTime(isSame, trulyArguments));
