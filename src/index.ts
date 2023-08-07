let message :string= "yoyo"

//istances types

let reg:RegExp=new RegExp('ab+c');
let array:Array<number>=[1,2,3]
let arra:number[]=[1,2,3]
let tuple:[number,number]=[0,0]//fixed length array also known as tuple
let set:Set<number>=new Set([1,2,3])//will remove duplicates internally even if passsed
//let queque Queue<number>
console.log(message)
 
let center:{x:number,y:number}={
    x:0,
    y:0
}

//or use type annotations 
type Point={x:number,y:number}
let center2:Point={
    x:1,
    y:1,

}


// functions 
// as how many values  are pasedd it will be array of numbers
function sum(...values:number[]){
    return values
}
// type dec for add funxction which returns a number
let add:(a:number,b:number)=>number