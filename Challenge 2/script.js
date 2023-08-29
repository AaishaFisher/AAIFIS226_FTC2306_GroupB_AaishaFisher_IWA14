const add = function (a, b)  {
    return a + b;
};

const multiply = function (a, b) { 
    return a * b;
 };

const internal = function() {
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(this.internal.a, this.internal.b)
    
	return this;
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()