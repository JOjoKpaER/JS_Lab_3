"use strict"

function Calculator(){
	let _caclucator = {

	read: function(a,b){
		this.a = a
		this.b = b
	},

	sum: function(){
		return this.a + this.b
	},

	mul: function(){
		return this.a * this.b
		}
	}
	
	return _caclucator 
}

let calculator = new Calculator()
calculator.read(15,20)
console.log(calculator.sum())
console.log(calculator.mul())