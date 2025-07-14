// currying function
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,4,6))
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));

// event

// const c1 = document.getElementById("container");
// c1.addEventListener("click", () => {
//     console.log("hallo")
// })

// event capturing(top to bottom) and bubbling(bottom to top chalna)
// const c1=document.getElementById("grandparent")
// const c2=document.getElementById("parent")
// const c3=document.getElementById("child")
// bubbling
// c1.addEventListener('click',()=>{
//     console.log("red dabba")
// })
// c2.addEventListener('click',()=>{
//     console.log("green dabba")
// })
// c3.addEventListener('click',()=>{
//     console.log("blue dabba")
// })
// capturing
// c1.addEventListener('click',()=>{
//     console.log("red dabba")
// },true)
// c2.addEventListener('click',()=>{
//     console.log("green dabba")
// },true)
// c3.addEventListener('click',()=>{
//     console.log("blue dabba")
// },true)

// event propagation
// c1.addEventListener('click',(e)=>{
//     console.log("red dabba")
//     e.stopPropagation()
// })
// c2.addEventListener('click',(e)=>{
//     console.log("green dabba")
//     e.stopPropagation()
// })
// c3.addEventListener('click',(e)=>{
//     console.log("blue dabba")
//     e.stopPropagation()
// })

const c1=document.getElementById("navbar")
c1.addEventListener('click',(event)=>{
    if(event.target.tagName==="LI"){
        console.log(event.target.textContent)
    }
})

const data=document.createElement("li");
data.innerText="hallo"
c1.append(data);