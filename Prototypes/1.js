"use strict"

let animal = {
	jumps: null
	};
let rabbit = {
	__proto__: animal,
	jumps: true
	};
console.log(rabbit.jumps); // поле jumps определено в объекте как true
delete rabbit.jumps;
console.log(rabbit.jumps); // после удаления поля из объекта, 
						   // в область видимости попадает поле объекта-родителя
delete animal.jumps;
console.log(rabbit.jumps); // поле удалено как у потомка, так и у родителя
