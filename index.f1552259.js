!function(){// index.js
let t="https://books-backend.p.goit.global/books/";async function o(){let o=await fetch(`${t}category-list`),e=await o.json();return e}async function e(o){let e=await fetch(`${t}category?category=${o}`),a=await e.json();return a}let a=document.querySelector(".category-list");async function n(t){try{let o=await e(t);!function(t){let o=document.querySelector(".book-list");o.innerHTML=t.length?t.map(t=>`<div class="book-item">${t.title}</div>`).join(""):"<div>No books found for this category.</div>"}(o)}catch(t){console.error("Error loading books:",t)}}!async function(){try{// Load categories
let t=await o();!function(t){let o=document.querySelector(".category-list");o.innerHTML=t.map(t=>`<button class="category-item" data-category="${t.list_name}">${t.list_name}</button>`).join("")}(t),// Event listener for category clicks
a.addEventListener("click",t=>{if(t.target.classList.contains("category-item")){let o=t.target.dataset.category;n(o)}})}catch(t){console.error("Error initializing app:",t)}}()}();//# sourceMappingURL=index.f1552259.js.map

//# sourceMappingURL=index.f1552259.js.map
