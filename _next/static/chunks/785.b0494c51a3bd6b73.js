"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{46785:function(e,i,n){n.r(i),n.d(i,{default:function(){return ImagesSlider}});var s=n(85893),a=n(67294),l=n(30719),r=n(71911),t=n(51988);function ImagesSlider(e){let{images:i,onClick:n}=e,c=(0,a.useRef)(null),onImageClick=(e,i)=>{i.preventDefault(),n(e)};return(0,s.jsx)("div",{className:"slider mb-5",children:(0,s.jsx)("div",{className:"slider__wrapper",children:(0,s.jsx)(l.tq,{grabCursor:!0,modules:[r.W_,r.tl],centerInsufficientSlides:!0,slidesPerView:1,spaceBetween:0,breakpoints:{576:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:28}},pagination:{clickable:!0},navigation:!0,onSwiper:e=>c.current=e,children:i.map((e,i)=>(0,s.jsx)(l.o5,{onClick:onImageClick.bind(null,i),children:(0,s.jsx)(t.Z,{image:e.image,maxSize:800,alt:e.alt||e.description})},e.image.image_id))})})})}}}]);