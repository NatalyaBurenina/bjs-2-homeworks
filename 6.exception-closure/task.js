// Задача 1

function parseCount(parseNumber) {
    let number = Number.parseFloat(parseNumber);
    
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount (parseNumber1) {
    try {
        return parseCount(parseNumber1);
    } catch (error) {
        return error;
    }
}


// Задача 2

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let perimeter = this.perimeter / 2;
		return Number(Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (err) {
		let error = "Ошибка! Треугольник не существует";
		return {
			get perimeter() {
				return error;
			},

			get area() {
				return error;
			},
		};
	}
}
