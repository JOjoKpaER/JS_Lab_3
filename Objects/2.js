"use strict"

let myBrowser = {}

myBrowser.name = "Microsoft Internet Explorer"
myBrowser.version = "9.0"

for (let i in myBrowser){
	console.log(myBrowser[i])
}