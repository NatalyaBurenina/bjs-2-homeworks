// Задача 1

function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

//Задача 2

function getUsersNamesInAgeRange(users, gender) {
	return users.
	filter(user => user.gender === gender).
	map(user => user.age).
	reduce((averageValue, userAge, index, arr) => averageValue + userAge / arr.length, 0);
}