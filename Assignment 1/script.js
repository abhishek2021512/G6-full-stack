const c1=document.getElementById('container');
fetch("https://dummyjson.com/products")
.then((res)=>res.json())
.then((data)=>{
    const product=data.products;
    product.forEach((i)=>{
      const newdiv=document.createElement("div");
      newdiv.classList.add("product");
      newdiv.innerHTML= `
                <h2>${i.title}</h2>
                <p>Price: $${i.price}</p>
                <img src="${i.thumbnail}" loading="lazy" alt="${i.title}">
            `;
      c1.appendChild(newdiv);
    });
  })
  .catch((err)=>{
    console.error(err);
});