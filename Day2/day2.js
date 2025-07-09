// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("chal jayega");
//     },3000)
// })
// p1.then(
//     (res)=>console.log(res)
// ).then(()=>{
//     setTimeout(()=>{
//         console.log("kaise hai app log")
//     },4000)
// }).then(()=>{
//     setTimeout(()=>{
//         console.log("bdiya bhai jaan")
//     },2000)
// })
// .catch((err)=>console.log(err))

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("chal jayega");
//     },3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("kaise hai app log");
//     },4000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("bdiya bhai jaan");
//     },2000)
// })
// p1.then((res)=>{
//     console.log(res);
//     return p2;
// }).then((res)=>{
//     console.log(res);
//     return p3;
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// function abc(msg,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("uttar:- "+msg);
//             console.log("uttar:- "+msg);
//         }, delay)
//     })
// }

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("chal jayega");
//         console.log("uttar:- p1")
//     },6000)
// })
// p1.then(()=>{
//     return abc("p2",3000);
// }).then(()=>{
//     return abc("p3",4000);
// }).then(()=>{
//     return abc("p4",2000)
// }).catch((err)=>{
//     console.log("galti hai")
// })

// async and await 
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("chal jayega");
//         // console.log("promise 1")
//     },3000)
// })
// async function fun(){
//     var a=await p1;
//     console.log("checking:- ",a);
// }
// fun();

// async function api() {
//     try {
//         const data = await fetch("https://dummyjson.com/users")
//         const ans = await data.json();
//         console.log(ans)
//     } catch (err) {
//         console.log("error aa gya")
//     }
// }
// api()

////////////////////
// call() immediate invoke argument is based
// function f1(roomno,groupid){
//     console.log(`Student name: ${this.studentname} from batch no: ${this.batchno} : ${roomno} : ${groupid}`)
// }
// const s1={
//     studentname:"Ruyk",
//     batchno:"G6"
// }
// const s2={
//     studentname:"rem",
//     batchno:"G5"
// }
// f1.call(s1,"TG_214",6)
// f1.call(s2,"P_006",5);
// apply imediate invoked we pass array of arguments
// function f1(roomno,groupid){
//     console.log(`Student name: ${this.studentname} from batch no: ${this.batchno} : ${roomno} : ${groupid}`)
// }
// const s1={
//     studentname:"Ruyk",
//     batchno:"G6"
// }
// const s2={
//     studentname:"rem",
//     batchno:"G5"
// }
// f1.apply(s1,["TG_214",6])
// f1.apply(s2,["P_006",5]);

// bind 
function f1(roomno,groupid){
    console.log(`Student name: ${this.studentname} from batch no: ${this.batchno} : ${roomno} : ${groupid}`)
}
const s1={
    studentname:"Ruyk",
    batchno:"G6"
}
const s2={
    studentname:"rem",
    batchno:"G5"
}
const a=f1.bind(s1,"TG_214",6)
const b=f1.bind(s2,"P_006",5);
a();
b();