"use strict"

function Accumulator(startingValue){
	let _accumulator = {
		value: startingValue,
	
		read: function(a){
			this.value += a
		}
	}
	return _accumulator
}

let accumulator = new Accumulator(1)
accumulator.read(10)
accumulator.read(5)
console.log(accumulator.value)