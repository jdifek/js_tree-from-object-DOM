var e=document.createElement("ul");e.setAttribute("id","tree"),document.body.append(e),function e(t,n){for(var r in n){var a=document.createElement("li");if(a.textContent=r,Object.keys(n[r]).length>0){var c=document.createElement("ul");a.append(c),e(c,n[r])}t.append(a)}}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.cd8ed636.js.map