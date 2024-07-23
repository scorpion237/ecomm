"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{55894:function(e,t,n){n.d(t,{Z:function(){return NoImage}});var i=n(85893),a=n(86010);function NoImage(e){let{ratio:t,className:n}=e;return(0,i.jsx)("div",{className:(0,a.Z)("no-image r-".concat(t),n),children:(0,i.jsx)("div",{className:"no-image__bg"})})}},84962:function(e,t,n){n.d(t,{Z:function(){return HeaderCart}});var i=n(85893),a=n(41664),s=n.n(a),r=n(87042),l=n(86010),c=n(40280);function HeaderCart(e){var t;let{className:n,icon:a}=e,{total:o}=(0,r.j)(),{formatCurrency:d}=(0,c.Z)(),m=!o||!o.qty,u=null!=o&&!!o.qty&&(null==o?void 0:o.qty)>9;return(0,i.jsxs)(s(),{href:"/cart",className:(0,l.Z)("cart-header",{"cart-header_empty":m,"cart-header_active":!m},n),children:[a||(0,i.jsx)("span",{className:"cart-header__icon"}),(0,i.jsx)("b",{className:(0,l.Z)("cart-header__qty",{"cart-header__qty_double":u}),children:null!==(t=null==o?void 0:o.qty)&&void 0!==t?t:0}),(0,i.jsx)("div",{className:"cart-header__total",children:d((null==o?void 0:o.total)||0)})]})}},16433:function(e,t,n){n.d(t,{Z:function(){return ProductVariantAndBuy}});var i=n(85893),a=n(67294),s=n(86010);function VariantPickerCharacteristic(e){let{characteristic:t,onSelectCase:n,value:a,idCombinations:r,variants:l}=e,onLabelClicked=(e,i)=>{i.preventDefault(),n(t.id,a[t.id]===e?null:e)};return(0,i.jsxs)("div",{className:"variant-picker__characteristic",children:[(0,i.jsx)("div",{className:"variant-picker__title",children:"".concat(t.title,":")}),(0,i.jsx)("div",{className:"variant-picker__cases",children:t.cases.map(e=>{let n="".concat(t.id,"-case-").concat(e.id),c=findAvailableVariants(l,r,{...a,[t.id]:e.id}),o=c.filter(e=>{let{in_stock:t}=e;return t});return(0,i.jsxs)("div",{className:"variant-picker__case-item",children:[(0,i.jsx)("input",{autoComplete:"off",className:"btn-check",disabled:!c.length,name:"characteristic-".concat(t.id),onChange:()=>{},type:"radio",checked:a[t.id]===e.id,value:e.id,id:n}),(0,i.jsx)("label",{className:(0,s.Z)("btn btn-outline-secondary",{"out-of-stock":!o.length}),htmlFor:n,onClick:onLabelClicked.bind(null,e.id),children:e.title})]},e.id)})})]})}let findAvailableVariants=(e,t,n)=>{let i=[];for(let[e,a]of Object.entries(t))isValueSuitsCombination(a,n)&&i.push(parseInt(e));return e.filter(e=>{let{variant_id:t}=e;return i.includes(t)})},isValueSuitsCombination=(e,t)=>{for(let[n,i]of Object.entries(t))if(!(n in e)||e[n]!=i)return!1;return!0};var r=n(18446),l=n.n(r);function ProductVariantPicker(e){let{extendedVariants:t,onChange:n}=e,{characteristics:r,list:l,combinations:c,idCombinations:o}=t,[d,m]=(0,a.useState)({}),onSelectCase=(e,t)=>{let i;let a={...d};null===t?delete a[e]:a[e]=t,m(a);let s=findVariantIdByCombinations(a,c);s&&(i=l.find(e=>{let{variant_id:t}=e;return String(t)==s})),n&&n(a,i)};return(0,i.jsx)("div",{className:(0,s.Z)("variant-picker"),children:r.map(e=>(0,i.jsx)(VariantPickerCharacteristic,{characteristic:e,onSelectCase:onSelectCase,value:d,idCombinations:o,variants:l},e.id))})}let findVariantIdByCombinations=(e,t)=>{let n=Object.entries(e).map(e=>{let[t,n]=e;return"".concat(t,"-").concat(n)}),i=Object.entries(t).find(e=>{let[t,i]=e;return l()(n,i)});return i?i[0]:null};var c=n(78089),o=n(12640),d=n(20741),m=n(96740),u=n.n(m),h=n(40098),x=n(6767),p=n(75016),j=n(99603),g=n(40280);function ProductPriceAndBuy(e){let{product:t,selectedVariant:n,setError:r,onAddedToCart:l}=e,m=(0,c.T)(),[h,x]=(0,a.useState)(1),{formatCurrency:_}=(0,g.Z)(),{price:v,benefit:f,isInStock:b}=(0,a.useMemo)(()=>{let e,i=null;if(n){let t=(0,d.Ye)(n.prices);t&&(e={price:t.value,oldPrice:t.old})}else{let n=(0,d.Ye)(t.prices);n&&(e=(0,d.cY)(n))}e&&e.price&&e.oldPrice&&(i=new(u())(e.oldPrice).subtract(e.price).toJSON());let a=n?n.in_stock:t.in_stock;return{price:e,benefit:i,isInStock:a}},[t,n]);return(0,i.jsxs)("div",{className:"price-and-buy",children:[(null==v?void 0:v.price)&&(0,i.jsxs)("p",{className:"price-and-buy__price",children:[v.isFrom&&(0,i.jsx)("span",{className:"price-and-buy__from",children:"From:"}),(0,i.jsx)("span",{className:(0,s.Z)("price-and-buy__current",{"has-old":v.oldPrice}),children:_(v.price)}),v.oldPrice&&(0,i.jsx)("span",{className:"price-and-buy__old",children:_(v.oldPrice)})]}),f&&(0,i.jsxs)("p",{className:"price-and-buy__benefit",children:[(0,i.jsx)("label",{className:"price-and-buy__benefit-label",children:"You save:"}),(0,i.jsx)("span",{className:"price-and-buy__benefit-value",children:_(f)})]}),(!t.has_variants||n)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{className:(0,s.Z)("price-and-buy__stock",{in:b,out:!b}),children:[b&&"In stock",!b&&"Out of stock"]}),(t.sku||(null==n?void 0:n.sku))&&(0,i.jsxs)("p",{children:["SKU: ",(0,i.jsx)("span",{className:"text-muted",children:(null==n?void 0:n.sku)||t.sku})]})]}),!1!==b&&(0,i.jsxs)("div",{className:"price-and-buy__2-cart",children:[(0,i.jsx)(PriceAndBuyQty,{qty:h,setQty:x}),(0,i.jsx)("div",{className:"price-and-buy__btns",children:(0,i.jsxs)("button",{type:"button",className:"btn btn-action btn-anim btn-lg",onClick:e=>{if(e.preventDefault(),t.has_variants&&!n){r("Faite un choix SVP");return}let i=n?n.inventoryItem.item_id:t.item_id;m((0,o.XT)(i,h)),l&&l(i,h)},children:[(0,i.jsx)(j.G,{icon:p.qD})," Buy"]})})]})]})}let PriceAndBuyQty=e=>{let{qty:t,setQty:n}=e,onBtnClicked=(e,i)=>{i.preventDefault();let a=t+e;a<1&&(a=1),n(a)};return(0,i.jsxs)("div",{className:"price-and-buy__qty input-group",children:[(0,i.jsx)("button",{type:"button",className:"btn btn-outline-secondary text-center",onClick:onBtnClicked.bind(null,-1),children:(0,i.jsx)(j.G,{icon:x.Kl})}),(0,i.jsx)("input",{type:"number",className:"form-control",value:t,min:1,onChange:e=>n(parseInt(e.target.value)||1)}),(0,i.jsx)("button",{type:"button",className:"btn btn-outline-secondary text-center",onClick:onBtnClicked.bind(null,1),children:(0,i.jsx)(j.G,{icon:h.r8})})]})};var _=n(29697);function ProductVariantAndBuy(e){let{product:t,onAddedToCart:n}=e,[r,l]=(0,a.useState)(),[c,o]=(0,a.useState)(null),[d,m]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"variant-and-buy",children:[t.has_variants&&(0,i.jsxs)("div",{className:(0,s.Z)("variant-and-buy__variants",{"has-error":c}),children:[(0,i.jsx)(_.Z,{in:d,timeout:1e3,onEntered:()=>m(!1),classNames:{enterActive:"animate__animated animate__shakeX"},children:(0,i.jsx)(ProductVariantPicker,{extendedVariants:t.extendedVariants,onChange:(e,t)=>{l(t||null),o(null)}})}),c&&(0,i.jsx)("div",{className:"variant-and-buy__error",children:c}),(0,i.jsx)("hr",{className:"variant-and-buy__hr"})]}),(0,i.jsx)(ProductPriceAndBuy,{product:t,selectedVariant:r,setError:e=>{m(!!e),o(e)},onAddedToCart:n})]})}},77243:function(e,t,n){n.d(t,{Z:function(){return ProductListImage}});var i=n(85893),a=n(89755),s=n.n(a),r=n(59551);function ProductListImage(e){let{image:t,alt:n,maxSize:a=300}=e,{src:l,blurSrc:c,width:o,height:d}=(0,r.h1)(t,a);return(0,i.jsx)("div",{className:"img text-center",children:o&&d?(0,i.jsx)(s(),{src:l,width:o,height:d,placeholder:"blur",blurDataURL:c,quality:100,itemProp:"image",alt:n}):(0,i.jsx)("img",{src:l,alt:n,itemProp:"image"})})}},87042:function(e,t,n){n.d(t,{j:function(){return useCart}});var i=n(78089),a=n(67294),s=n(12640);function useCart(){let e=(0,i.C)(e=>e.cart),t=(0,i.T)();return(0,a.useEffect)(()=>{t((0,s.d_)())},[]),{total:e.total,id:e.cartId,cartInited:e.cartInited}}},40280:function(e,t,n){n.d(t,{Z:function(){return useFormatCurrency}});var i=n(78089),a=n(67294),s=n(96740),r=n.n(s);function useFormatCurrency(){let e=(0,i.C)(e=>e.app.localeSettings),t=(0,a.useCallback)(t=>{t=Number(t);let n={};if(e){let{format:t,precision:i,symbol:a,decimal:s,thousand:r}=e.money,l=t.replace("%v","#");Object.assign(n,{precision:i,symbol:a,decimal:s,pattern:l=l.replace("%s","!"),separator:r})}return r()(t,n).format()},[e]);return{formatCurrency:t}}},21971:function(e,t,n){n.d(t,{Z:function(){return MainLayout}});var i=n(85893),a=n(5152),s=n.n(a),r=n(67294),l=n(9008),c=n.n(l),o=n(38792),d=n(78089),m=n(12118),u=n(16433),h=n(77243),x=n(55894),p=n(75077);function ChooseVariantModal(){let e=(0,d.T)(),t=(0,d.C)(e=>e.cart.showVariantModal),{product:n}=(0,d.C)(e=>e.cart.variantModalData),onHide=()=>e((0,m.e6)()),a=n?n.images.find(e=>{let{is_default:t}=e;return t}):void 0;return(0,i.jsxs)(o.Z,{show:t,onHide:onHide,children:[(0,i.jsx)(o.Z.Header,{closeButton:!0,children:(0,i.jsx)(o.Z.Title,{children:"Veuillez choisir une variante :"})}),(0,i.jsx)(o.Z.Body,{children:n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"d-flex mb-3",children:[(0,i.jsx)("div",{className:"me-2",style:{width:"60px"},children:a?(0,i.jsx)(h.Z,{image:a.image,maxSize:60}):(0,i.jsx)(x.Z,{ratio:p.BT["1-1"],className:"bg-xs"})}),(0,i.jsx)("h6",{children:n.title})]}),(0,i.jsx)(u.Z,{product:n,onAddedToCart:onHide})]})})]})}var j=n(53986),g=n(82602),_=n(15369),v=n(99603),f=n(41664),b=n.n(f);function MarsTopNav(){return(0,i.jsx)("nav",{className:"mars-top-nav",children:(0,i.jsxs)("div",{className:"container-xxl mars-top-nav__container",children:[(0,i.jsxs)("div",{className:"mars-top-nav__contacts",children:[(0,i.jsx)(Contact,{href:"tel:+237693196576",label:"+237 693-196-576",icon:(0,i.jsx)(v.G,{icon:g.DO})}),(0,i.jsx)(Contact,{href:"https://api.whatsapp.com/send?phone=10001234567&text=hello",label:"+237 693-196-576",icon:(0,i.jsx)(v.G,{icon:j.VH})})]}),(0,i.jsx)("div",{className:"mars-top-nav__note",children:(0,i.jsxs)("p",{children:["Horaires 9 a.m. - 6 p.m. ",(0,i.jsx)(v.G,{icon:_.x0,className:"text-theme-color ms-1"})]})}),(0,i.jsxs)("ul",{className:"mars-top-nav__menu list-unstyled",children:[(0,i.jsx)("li",{className:"mars-top-nav__menu-item",children:(0,i.jsx)(b(),{href:"/shipping",className:"mars-top-nav__menu-link",children:"Livraison"})}),(0,i.jsx)("li",{className:"mars-top-nav__menu-item",children:(0,i.jsx)(b(),{href:"/about",className:"mars-top-nav__menu-link",children:"A Propos"})})]})]})})}let Contact=e=>{let{href:t,label:n,icon:a}=e;return(0,i.jsxs)("div",{className:"mars-top-nav__contact",children:[a&&(0,i.jsx)("a",{className:"mars-top-nav__contact-icon",href:t,children:a}),(0,i.jsx)("a",{className:"mars-top-nav__contact-txt",href:t,children:n})]})};var N=n(84962),y=n(9880),C=n(86010),k=n(20084);function MarsLogoRow(){let e=(0,d.T)(),t=(0,d.C)(e=>e.asideMenu.isOpened);return(0,i.jsx)("section",{className:"mars-logo-row",children:(0,i.jsxs)("div",{className:"container-xxl mars-logo-row__container",children:[(0,i.jsx)("div",{className:"mars-logo-row__logo-wrapper",children:(0,i.jsx)(b(),{href:"/",className:"mars-logo-row__logo",children:(0,i.jsx)("span",{children:"Logo"})})}),(0,i.jsx)("div",{className:"mars-logo-row__welcome",children:"Bienvenue dans notre boutique. Nous travaillons pour vous !"}),(0,i.jsxs)("div",{className:"mars-logo-row__at-right",children:[(0,i.jsx)(N.Z,{icon:(0,i.jsx)("span",{className:"mars-logo-row__cart-icon",children:(0,i.jsx)(v.G,{icon:k.sq})})}),(0,i.jsxs)("button",{type:"button",className:"hamburger-btn mars-logo-row__hamburger",onClick:t=>{t.preventDefault(),e((0,y.g)(!0))},children:[(0,i.jsx)("span",{className:(0,C.Z)("hamburger-btn__bar",{"first-opened":t})}),(0,i.jsx)("span",{className:(0,C.Z)("hamburger-btn__bar",{"middle-opened":t})}),(0,i.jsx)("span",{className:(0,C.Z)("hamburger-btn__bar",{"last-opened":t})})]})]})]})})}function Header(){return(0,i.jsxs)("header",{className:"page-header",children:[(0,i.jsx)(MarsTopNav,{}),(0,i.jsx)(MarsLogoRow,{}),(0,i.jsx)(ChooseVariantModal,{})]})}function FooterMenu(e){let{menuList:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"page-footer__header",children:"Plus populaire"}),(0,i.jsx)("ul",{className:"page-footer-menu list-unstyled",itemScope:!0,itemType:"//schema.org/ItemList",children:t.map((e,t)=>(0,i.jsx)("li",{className:(0,C.Z)("page-footer-menu__list-element",{active:e.isActive}),children:(0,i.jsx)("div",{itemProp:"itemListElement",itemScope:!0,itemType:"//schema.org/ListItem",children:(0,i.jsx)(ListElement,{item:e,position:t})})},e.title+t))})]})}function ListElement(e){let{item:t,position:n}=e;return t.url?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b(),{href:t.url,className:(0,C.Z)("page-footer-menu__element is-link",{active:t.isActive}),children:(0,i.jsx)("span",{className:"title",itemProp:"name",children:t.title})}),(0,i.jsx)("meta",{itemProp:"position",content:String(n+1)})]}):(0,i.jsx)("div",{className:(0,C.Z)("page-footer-menu__element",{active:t.isActive}),children:(0,i.jsx)("span",{className:"page-footer-menu__text-title",children:t.title})})}var S=n(79245),P=n(78279),Z=n(51719);function SocialButtons(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"page-footer__header",children:"Nous suivre"}),(0,i.jsxs)("div",{className:"page-footer__social-buttons",children:[(0,i.jsx)("div",{className:"page-footer__social-button",children:(0,i.jsx)("a",{className:"page-footer__social-link",target:"_blank",href:"https://fb.com",children:(0,i.jsx)(v.G,{className:"social-icon",icon:S.ne})})}),(0,i.jsx)("div",{className:"page-footer__social-button",children:(0,i.jsx)("a",{className:"page-footer__social-link",target:"_blank",href:"https://instagram.com",children:(0,i.jsx)(v.G,{className:"social-icon",icon:P.Zz})})}),(0,i.jsx)("div",{className:"page-footer__social-button",children:(0,i.jsx)("a",{className:"page-footer__social-link",target:"_blank",href:"https://twitter.com",children:(0,i.jsx)(v.G,{className:"social-icon",icon:Z.md})})})]}),(0,i.jsx)("p",{className:"page-footer__social-buttons company-info",children:"All rights reserved. \xa9 ab-consulting"})]})}var I=n(42137),T=n(42494);function FooterContacts(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"page-footer__header",children:"Contact Us"}),(0,i.jsxs)("p",{className:"page-footer__icon-w-link",children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)(v.G,{icon:j.VH})}),(0,i.jsx)("a",{className:"link",href:"+237693196576",children:"+237 693-196-576"})]}),(0,i.jsxs)("p",{className:"page-footer__icon-w-link",children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)(v.G,{icon:T.FG})}),(0,i.jsx)("a",{className:"link",href:"#",children:"237 avenue germaine ahidjo, Yaounde CMR 95014"})]}),(0,i.jsxs)("p",{className:"page-footer__icon-w-link",children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)(v.G,{icon:I.SZ})}),"9:00am — 6:00pm"]})]})}function FooterAbout(e){let{companyTitle:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"page-footer__company-info",children:(0,i.jsx)("p",{className:"title",children:t||"\xa9 ab-consulting ."})}),(0,i.jsx)("div",{className:"page-footer__disclaimer",children:"Les informations sur les prix et la disponibilit\xe9 sont sujettes \xe0 modification sans pr\xe9avis."})]})}function Footer(e){let{menuList:t,companyTitle:n}=e;return(0,i.jsx)("footer",{className:"page-footer",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-1 order-md-3 order-4",children:(0,i.jsx)(FooterAbout,{companyTitle:n})}),(0,i.jsx)("div",{className:"page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-2 order-md-1 order-1",children:(0,i.jsx)(FooterMenu,{menuList:t})}),(0,i.jsx)("div",{className:"page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-3 order-md-2 order-2",children:(0,i.jsx)(FooterContacts,{})}),(0,i.jsx)("div",{className:"page-footer__item col-sm-12 col-md-6 col-lg-3 order-lg-4 order-md-4 order-3",children:(0,i.jsx)(SocialButtons,{})})]})})})}var w=n(78331),A=n(72021),L=n(69563);function AlertWidget(){let e=(0,d.T)(),{show:t,text:n,type:a}=(0,d.C)(e=>e.alert),onClose=()=>{e((0,L.JO)())};return(0,i.jsx)(A.Z,{className:"position-fixed p-3",position:"top-end",style:{zIndex:9999},children:(0,i.jsx)(w.Z,{className:"border-0",onClose:onClose,show:t,delay:3e3,autohide:!0,bg:a,children:(0,i.jsx)(w.Z.Body,{children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("div",{className:"alert-text",children:n}),(0,i.jsx)("button",{className:"btn-close btn-sm btn-close-white me-2 m-auto",onClick:onClose})]})})})})}function AsideBackdrop(){let e=(0,d.C)(e=>e.asideMenu.isOpened),t=(0,d.T)();return(0,i.jsx)("div",{className:(0,C.Z)("aside-backdrop",{"aside-backdrop_visible":e}),onClick:()=>t((0,y.g)(!1))})}var M=n(29697),B=n(71421);let HorizontalMenu=class HorizontalMenu extends r.Component{handleShow(e){this.hideTimeout&&clearTimeout(this.hideTimeout),this.setState({visiblePopup:e})}handleHide(e){this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>{e===this.state.visiblePopup&&this.setState({visiblePopup:null})},300)}componentWillUnmount(){this.hideTimeout&&clearTimeout(this.hideTimeout)}render(){let{menuList:e}=this.props,{visiblePopup:t}=this.state;return(0,i.jsx)("nav",{className:"horizontal-menu",children:(0,i.jsx)("div",{className:"container-xxl",children:(0,i.jsx)("ul",{className:"horizontal-menu__list list-unstyled",itemScope:!0,itemType:"//schema.org/ItemList",children:e.map((e,n)=>{let a=e.children&&e.children.length>0,s=!!a&&t===n;return(0,i.jsxs)("li",{className:(0,C.Z)("horizontal-menu__root-element",{active:e.isActive,"has-children":a,open:a&&e.isActive,"children-visible":s}),onMouseOver:this.handleShow.bind(this,n),onMouseOut:this.handleHide.bind(this,n),children:[(0,i.jsx)("div",{itemProp:"itemListElement",itemScope:!0,itemType:"//schema.org/ListItem",children:(0,i.jsx)(HorizontalMenu_ListElement,{item:e,position:n,hasChildren:a,className:(0,C.Z)({"children-visible":s})})}),e.children&&e.children.length>0&&(0,i.jsx)(M.Z,{in:t===n,timeout:600,unmountOnExit:!0,classNames:{enterActive:"animate__animated animate__fadeInUp",exitActive:"animate__animated animate__fadeOut"},children:(0,i.jsx)("ul",{className:(0,C.Z)("horizontal-menu__child-list list-unstyled"),children:e.children.map((e,t)=>(0,i.jsx)("li",{className:(0,C.Z)("horizontal-menu__child-element",{active:e.isActive}),children:(0,i.jsx)(HorizontalMenu_ListElement,{item:e})},e.title+t))})})]},e.title+n)})})})})}constructor(e){super(e),this.hideTimeout=null,this.state={visiblePopup:null}}};function HorizontalMenu_ListElement(e){let{item:t,position:n,hasChildren:a,className:s}=e,r=t.img||null,l=void 0!==n,c=r?(0,i.jsx)("img",{src:r.src,className:"me-2",alt:t.title,width:r.width,height:r.height}):null,o=a?(0,i.jsxs)(i.Fragment,{children:[t.title,a&&(0,i.jsx)(v.G,{className:"ms-2",icon:B.eW})]}):t.title;return t.url&&(!t.isActive||l)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b(),{href:t.url,className:(0,C.Z)("horizontal-menu__element is-link",l?"is-root":"is-child",{active:t.isActive},s),children:[r&&(0,i.jsx)("span",{className:"img-link",children:c}),(0,i.jsx)("span",{className:"title",...l?{itemProp:"name"}:{},children:l?o:t.title})]}),l&&(0,i.jsx)("meta",{itemProp:"position",content:String(n+1)})]}):(0,i.jsxs)("div",{className:(0,C.Z)("horizontal-menu__element",l?"is-root":"is-child",{active:t.isActive},s),children:[r&&c,(0,i.jsx)("span",{className:"horizontal-menu__text-title",children:o})]})}var F=n(88445),z=n(68055),H=n(40280);function CallToOrder(){let e=(0,d.T)(),{formatCurrency:t}=(0,H.Z)(),n=(0,d.C)(e=>e.cart.showCall2Order),[a,s]=(0,r.useState)(!1),{item:l,qty:c}=(0,d.C)(e=>e.cart.call2OrderData),hide=()=>{s(!0),setTimeout(()=>{s(!1),e((0,m.CI)())},300)};return(0,r.useEffect)(()=>(n?document.body.addEventListener("click",hide):document.body.removeEventListener("click",hide),()=>{document.body.removeEventListener("click",hide)}),[n]),(0,i.jsx)("div",{className:(0,C.Z)("call-to-order__wrapper",{"d-none":!n}),children:(0,i.jsx)("div",{className:"container call-to-order__container",children:(0,i.jsxs)("div",{className:(0,C.Z)("call-to-order",{opened:n,hiding:a}),onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("h5",{className:"call-to-order__header mb-3",children:["Produit ajout\xe9",(0,i.jsx)("button",{className:"btn-close btn-sm",onClick:hide})]}),l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"call-to-order__item mb-3",children:[(0,i.jsx)("div",{className:"call-to-order__img-wrapper",children:l.image?(0,i.jsx)(h.Z,{image:l.image,alt:l.product.title,maxSize:100}):(0,i.jsx)(x.Z,{ratio:p.BT["1-1"]})}),(0,i.jsxs)("div",{className:"desc",children:[(0,i.jsx)("div",{children:l.product.title}),l.variant&&(0,i.jsx)("div",{className:"text-muted variant mt-1",children:l.variant.title})]})]}),l.prices.length>0&&l.prices[0].value&&c&&(0,i.jsx)("div",{className:"mb-3",children:"".concat(t(l.prices[0].value)," x ").concat(c," = ").concat(t((0,F.H)(l.prices[0].value,c)))})]}),(0,i.jsx)("div",{className:"text-end",children:(0,i.jsxs)(b(),{href:"/cart",className:"btn btn-action btn-anim",children:[(0,i.jsx)(v.G,{icon:z.LE})," Commander"]})})]})})})}var O=n(9473),V=n(37149);let E=s()(()=>Promise.all([n.e(976),n.e(394),n.e(932)]).then(n.bind(n,46932)),{loadableGenerated:{webpack:()=>[46932]},ssr:!1});function MainLayout(e){let{children:t,title:n,metaData:a,mainMenu:s,footerMenu:l,noIndex:o,basicSettings:m}=e,u=(0,O.I0)(),{canonicalUrl:h,imgUrl:x,description:p}=a||{},j=(0,d.C)(e=>e.asideMenu.isOpened);return(0,r.useEffect)(()=>{m&&u((0,V._l)(m))},[u,m]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),h&&(0,i.jsx)("link",{rel:"canonical",href:h}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:n||"Boundless-Commerce Shop Example"}),(0,i.jsx)("meta",{property:"og:url",content:h||""}),(0,i.jsx)("meta",{property:"og:image",content:x||"/og.jpeg"}),p&&(0,i.jsx)("meta",{property:"og:description",content:p}),(0,i.jsx)("title",{children:n||"Boundless-Commerce Shop Example"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://api.boundless-commerce.com",crossOrigin:"use-credentials"}),o&&(0,i.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,i.jsx)(AlertWidget,{}),(0,i.jsxs)("div",{className:(0,C.Z)("page-layout page-layout_main mars-full-theme",{"page-layout_aside-opened":j}),children:[(0,i.jsx)(CallToOrder,{}),(0,i.jsx)(Header,{}),s&&(0,i.jsx)(HorizontalMenu,{menuList:s}),(0,i.jsx)("main",{className:"page-layout__main",children:t}),(0,i.jsx)(Footer,{menuList:l}),(0,i.jsx)(AsideBackdrop,{})]}),(0,i.jsx)(E,{menuList:s})]})}},70252:function(e,t,n){n.d(t,{x:function(){return l}});var i=n(75077);let a=void 0,s=void 0,r=void 0,l=new i._M("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpSWQiOjMzNjksImNJZCI6IkpLek40S2RTb2UzS3dkanJ5IiwiaWF0IjoxNzIxNzMwOTI0fQ.lZvXbeIbjyIXkJpY0PcSkWLFWXm-5SRie20dg5VglBsx7clJVXDl43rNoEnfHkWrQZlHdfXdz0IAZfK--9ZHRw");l.setInstanceId("3369"),a&&l.setBaseUrl(a),s&&l.setS3FolderPrefix(s),r&&l.setMediaServerUrl(r)},88445:function(e,t,n){n.d(t,{H:function(){return calcTotalPrice},t:function(){return calcTotal}});var i=n(96740),a=n.n(i);let calcTotal=e=>{let t=0,n=a()(0);for(let{qty:i,price:s}of e)t+=i,n=a()(n).add(s);return{qty:t,price:n.toString()}},calcTotalPrice=(e,t)=>a()(e).multiply(1*t).toString()},59551:function(e,t,n){n.d(t,{E7:function(){return getMetaImgUrl},UA:function(){return getManufacturerImg},h1:function(){return getProductsListImg},h6:function(){return getProductImg},mD:function(){return getCartImg},pR:function(){return s},xS:function(){return getCategoryImg}});var i=n(75077),a=n(70252);let s=null;function getProductsListImg(e,t){let{width:n,height:i,path:r}=e,l=a.x.makeThumb({imgLocalPath:r,maxSize:t});if(s&&l.setRatio(s).setPad(!0),!n||!i)return{src:l.getSrc()};l.setOriginalSize(n,i);let c=l.getAttrs();return l.setGrayscale(!0).setBlur(2),{...c,blurSrc:l.getSrc()}}function getProductImg(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{width:i,height:r,path:l}=e;if(r&&i){let e=a.x.makeThumb({imgLocalPath:l,maxSize:t,originalWidth:i,originalHeight:r});s&&n&&e.setRatio(s);let c=e.getAttrs();return e.setGrayscale(!0),e.setBlur(2),{...c,blurSrc:e.getSrc()}}return{src:a.x.makeThumb({imgLocalPath:l,maxSize:t}).getSrc()}}function getMetaImgUrl(e){let t=a.x.makeThumb({imgLocalPath:e.path,maxSize:400});return t.setRatio(i.BT["1-1"]),t.setPad(!0),t.getSrc()}function getCategoryImg(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:21,{width:n,height:i,path:s}=e,r=a.x.makeThumb({imgLocalPath:s,maxSize:t});return n&&i?(r.setOriginalSize(n,i),r.getAttrs()):{src:r.getSrc()}}function getManufacturerImg(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,{width:n,height:i,path:s}=e,r=a.x.makeThumb({imgLocalPath:s,maxSize:t});return n&&i?(r.setOriginalSize(n,i),r.getAttrs()):{src:r.getSrc()}}function getCartImg(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return a.x.makeThumb({imgLocalPath:e,maxSize:t}).getSrc()}},20741:function(e,t,n){n.d(t,{Ye:function(){return findSellingPrice},cY:function(){return getPriceForTpl}});let getPriceForTpl=e=>e?{price:e.min?e.min:e.value,oldPrice:e.old_min?e.old_min:e.old,isFrom:!!e.min&&!!e.max&&e.min!=e.max}:{price:null},findSellingPrice=e=>findPriceByAlias(e,"selling_price"),findPriceByAlias=(e,t)=>e.find(e=>{let{price_alias:n}=e;return n===t})},12640:function(e,t,n){n.d(t,{XT:function(){return addItem2Cart},d_:function(){return initCart}});var i=n(12118),a=n(31955),s=n(70252),r=n(75002),l=n(69563);let initCart=()=>async(e,t)=>{let{cartInited:n}=t().cart;if(![i._H.yes,i._H.processing].includes(n)){e((0,i.M6)(i._H.processing));try{let t=await getCartByCookieOrRetrieve();a.Z.set("boundless_cart_id",t.id,{expires:365,sameSite:"None",secure:!0}),e((0,i.tx)(t))}catch(t){console.error(t),e((0,i.M6)(i._H.no))}}},getCartByCookieOrRetrieve=async()=>{let e=a.Z.get("boundless_cart_id");if(e)try{return await s.x.cart.getCartInfo(e)}catch(e){}return await s.x.cart.retrieveCart()},addItem2Cart=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return async(a,c)=>{try{let o=c().cart.cartId;if(!o){a((0,l.jx)("Error loading cart"));return}a((0,i.W5)(!0));let d=s.x.cart.addItemToCart(o,e,t).then(e=>{let{product:t,actionRequired:s,cartTotal:r,added:l}=e;a((0,i.W5)(!1)),"chooseVariant"===s&&t?a((0,i.Zq)({product:t})):r&&(a((0,i.YP)(r)),n&&l&&a((0,i.Iq)(l)))});a((0,r.mj)(d))}catch(e){console.error(e)}}}}}]);