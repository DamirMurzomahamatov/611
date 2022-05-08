let a = +prompt('a')
let b = +prompt('b')
let method = prompt('+ - * / % **')

function count() {
    if (method === "+") {
        console.log(a + b);
    } else if (method === "-") {
        console.log(a - b);
    } else if (method === "*") {
        console.log(a * b);
    } else if (method === "/") {
        console.log(a / b);
    } else if (method === "**") {
        console.log(a ** b);
    } else if (method === "%"){
        console.log(a % b);
    } else {console.log('неправильно');}
}
count()

function getMaxname(name,name2,name3){
    let arr =[name,name2,name3]
    let longerName = ''
    for(let item of arr){
        if(item.length > longerName.length){
            longerName = item
        }
    }
    console.log(longerName);

}
getMaxname('Alex','George','Michael')

function MaxNumber(a,b){
    if(typeof(a) === 'number'){
        console.log(Math.max(a,b));
    } else if(Array.isArray(a)){
        console.log(Math.max(...a));
    } else if(typeof(a) === 'object'){
        let arr = Object.values(a)
        console.log(Math.max(...arr));
    }
}

MaxNumber(1,2)
MaxNumber([1,2])
MaxNumber({a:1, b:2})