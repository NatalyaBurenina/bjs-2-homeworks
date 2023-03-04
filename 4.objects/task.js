// Задача 1

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student();
let student2 = new Student();
let student3 = new Student();


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}






Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks === undefined || this.marks === 0) {
		return 0;
	}
	this.marks.push(...marksToAdd);
}







Student.prototype.getAverage = function () {
	if (this.marks === undefined || this.marks == 0) {
		return 0;
	}
	let sum = 0;
	this.marks.forEach(item => sum += item);
	return sum / this.marks.length;
}




Student.prototype.exclude = function (reason) {
    if (this.marks === undefined || this.marks === 0) {
		return 0;
	} else {
		delete this.subject;
		delete this.marks;
		this.excluded = reason
	}
}
