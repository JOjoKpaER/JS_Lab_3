"use strict"

class Browser{
	constructor(name, version){
		this.name = name
		this.version = version
		
		this.aboutBrowser = function(){
			console.log(this.name, this.version)
		}
	}
}

let myBrowser = new Browser("Microsoft Internet Explorer", "9.0")
console.log(myBrowser.name, myBrowser.version)
myBrowser.aboutBrowser()