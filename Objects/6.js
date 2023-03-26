"use strict"

let caclucator = {

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


caclucator.read(3, 10)
console.log(caclucator.sum())
console.log(caclucator.mul())