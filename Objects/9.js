"use strict"

let Employee = {
	constructor(name, department, phone, wage){
		this.name = name
		this.department = department
		this.phone = phone
		this.wage = wage
		this.print = ()=>{
			for (let i in this){
				if (typeof this[i] != "function")
				console.log(this[i])
			}
		}
		return this
	}
}


let empl = Employee.constructor("Bob", "1f", "111-222-4444", "14,500")
empl.print()