//1
let admin, name; 
name = "Джон";
admin = name;
alert( admin );

//2
let ourPlanet = "Земля";
let currentCustomerName = "Vasilii";

//3
const BIRTHDAY = "29.04.2000";
const age; //изменяется 

//4 отличия var и let 
function varEx(){
    if (true) {
        var x = 10;
    }
    console.log(x);
} // функциональная область видимости 

function letEx() {
    if (true) {
        let y = 20;
    }
    console.log(y);
} // ReferenceErr блочная область видимости

// поднятие?

// повторное обьявление - дает возможность перезаписать данные при повторной инициализации

// глобальные переменные ?

