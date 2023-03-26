"use strict"

class Box{
	constructor(w, v){
		this.w = w
		this.v = v
	}
}

class Stock{
	constructor(){
		this.boxes = []
	}
	
	add(w, v){
		this.boxes.push(new Box(w, v))
	}
	
	getByW(min_w){
		let j = -1
		for (let i in this.boxes){
			if (this.boxes[i].w >= min_w){
				j = i
			}
		}
		if (j != -1){ 
				delete this.boxes[j] 
			}
		return j
	}
	
	getByV(min_v){
		let j = -1
		for (let i in this.boxes){
			if (this.boxes[i].v >= min_v){
				j = i
			}
		}
		if (j != -1){ 
				delete this.boxes[j] 
			}
		return j
	}
}


let stock = new Stock()
stock.add(1, 3)
stock.add(2, 3)
stock.add(3, 1)

console.log(stock.getByW(3))
console.log(stock.getByV(3))
console.log(stock.getByW(2))
console.log(stock.getByV(0))