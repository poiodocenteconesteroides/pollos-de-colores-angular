import{a as S}from"./chunk-O6C5PS57.js";import{k as h,l as I}from"./chunk-WVLTZNIW.js";import{Ea as C,Ha as f,Ia as n,Ja as r,La as g,Ma as l,Na as _,Pa as i,Ra as b,Sa as v,Ta as x,W as s,ca as p,da as d,ua as c,va as u}from"./chunk-NFEL3EDL.js";function M(o,t){if(o&1){let e=g();n(0,"li"),i(1),n(2,"button",2),l("click",function(){let m=p(e).$implicit,y=_();return d(y.removeFromCart(m))}),i(3,"Eliminar"),r()()}if(o&2){let e=t.$implicit;c(),v(" ",e.name," - $",e.price," ")}}var O=class o{constructor(t){this.cartService=t}cartItems=[];total=0;ngOnInit(){this.loadCart()}loadCart(){this.cartService.cartItems$.subscribe(t=>{this.cartItems=t,this.calculateTotal()})}calculateTotal(){this.total=this.cartItems.reduce((t,e)=>t+e.price,0)}removeFromCart(t){this.cartService.removeFromCart(t.id).subscribe(()=>{alert(`${t.name} ha sido eliminado del carrito.`)})}buyItems(){this.cartService.clearCart().subscribe(()=>{alert("\xA1Gracias por tu compra!")})}static \u0275fac=function(e){return new(e||o)(u(S))};static \u0275cmp=s({type:o,selectors:[["app-cart"]],standalone:!0,features:[x],decls:9,vars:2,consts:[[1,"modal-content"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"h2"),i(2,"Carrito de Compras"),r(),n(3,"ul"),C(4,M,4,2,"li",1),r(),n(5,"p"),i(6),r(),n(7,"button",2),l("click",function(){return a.buyItems()}),i(8,"Comprar"),r()()),e&2&&(c(4),f("ngForOf",a.cartItems),c(2),b("Total: $",a.total,""))},dependencies:[I,h],styles:[".modal-content[_ngcontent-%COMP%]{background-color:#fff;margin:2% auto;padding:20px;border:1px solid #888;width:90%;max-width:400px;text-align:center}button[_ngcontent-%COMP%]{margin-top:10px;padding:10px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;transition:background-color .3s ease;border-radius:5px}button[_ngcontent-%COMP%]:hover{background-color:#45a049}ul[_ngcontent-%COMP%]{list-style:none;padding:0}li[_ngcontent-%COMP%]{margin-bottom:10px}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})};export{O as CartComponent};