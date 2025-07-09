// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Got Placed");
//     }, 3000);
// })
// const data = mypromise.then((res) => console.log(res))
//     .then(() => {
//         setTimeout(() => {
//             console.log("withdraw salary")
//         }, 2500)
//     }).then(() => {
//         setTimeout(() => {
//             console.log("working 9-5")
//         }, 3000)
//     }).then(() => {
//         setTimeout(() => {
//             console.log("layoff");
//         }, 2000)
//     }).catch((err) => {
//         console.log(err);
//     })

// const m1=new Promise((resolve,reject)=>{
//     resolve("placed");
// })
// const m2=new Promise((resolve, reject) => {
//     resolve("paisa");
// })
// const data=m1.then((res)=>console.log(res))

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1");
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p2")
    },2000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p3")
    },5000)
})
const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p4")
    },6000)
})
// Promise.all([p1,p2,p3,p4]).then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log("error aa gya"));
// Promise.allSettled([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>console.log(err));
// Promise.race([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>console.log("rejected"));
// Promise.any([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>console.log(err));
