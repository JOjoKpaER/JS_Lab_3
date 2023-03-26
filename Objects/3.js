"use strict"

function isEmpty(obj){
	let n = 0
	for (let i in obj){
		n = 1
	}
	return n == 0
}

let empty = {}
let non_empty = {}
non_empty.field = "value"

console.log("Is empty empty:", isEmpty(empty))
console.log("Is non_empty empty:", isEmpty(non_empty))
