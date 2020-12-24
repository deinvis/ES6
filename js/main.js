function init(){
    const exemplo = "Davis";
    return function (){
        console.log("1 - ", exemplo);
        return function () {
            console.log("2 - ", exemplo);
            return function () {
                console.log("3 - ", exemplo);
            }
        }
    }
}

var fnc1 = init();
var fnc2 = fnc1();
var fnc3 = fnc2();
fnc3();
