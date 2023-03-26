"use strict"

const user = {
name: "John"
};
// это будет работать?
user.name = "Pete";
console.log("user.name = 'Pete'; - ", "Да:", user.name)
// а это?
console.log("user = 123; -", "Нет:", "Попытка изменить объект с модификатором const выдает TypeError")
//user = 123;
