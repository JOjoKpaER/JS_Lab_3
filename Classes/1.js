"use strict"


class Clock{
	
	constructor(hour = 0, minute = 0, second = 0){
		this.hour = hour;
		this.minute = minute;
		this.second = second;		
	}
	
	print(){
		console.log(this.hour + "h" + this.minute + "m" + this.second + "s")
	}	
}

let clk = new Clock(1,2,30)
clk.print()

let clk0 = new Clock()
clk0.print()