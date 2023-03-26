"use strict"

function multiplyNumeric(obj){
	for (let i in obj){
		if (typeof(obj[i]) == "number"){
			obj[i] *= 2
		}		
	}
}

let object = {}
object.string = "1"
object.num1 = 1
object.num2 = 1.5
object.bool = true

console.log(object)
multiplyNumeric(object)
console.log(object)