let arr = [];
let numbers = []
let number1 = $('.number.first');
let number2 = $('.number.second');
let number3 = $('.number.third');
let number4 = $('.number.fort');
let number5  = $('.number.fifth');
numbers.push(number1)
numbers.push(number2)
numbers.push(number3)
numbers.push(number4)
numbers.push(number5)

function radomArray() {
    arr = []
    while(arr.length < 8){
        let r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}
function init() {
    // init new array
    radomArray()
    // css cho number (link image)
    for(let i=0; i<5; i++) {
        let tempPath = 'assets/number/'+arr[i]+'.png'
        numbers[i].css("background-image", "url(" + tempPath + ")")
    }
}
function handleEvent() {
    $('.box-number').sortable({
        axis: "x",
        scroll: false
      });
}
function draw() {

}

init()
handleEvent()