"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{1522:function(n,e,t){t.d(e,{Z:function(){return components_CustomCarousel}});var i=t(7437),r=t(2265),l=t(7082),s={src:"/_next/static/media/ArrowLeft.57b32110.svg",height:100,width:100,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/ArrowRight.dabd6799.svg",height:100,width:100,blurWidth:0,blurHeight:0},a=t(230),c=t(1806);function _templateObject(){let n=(0,a._)(["\n  position: relative;\n\n  .cust_car_icon {\n    position: absolute;\n    z-index: 1;\n    top: calc(20%);\n    display: none;\n    cursor: pointer;\n  }\n  .cust_car_icon img {\n    width: 90px;\n  }\n\n  .cust_car_icon.left {\n    left: -45px;\n  }\n  .cust_car_icon.right {\n    right: -45px;\n  }\n\n  .carousel-nav-button {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    .cust_car_icon.show {\n      display: block;\n    }\n  }\n"]);return _templateObject=function(){return n},n}let d=c.ZP.div(_templateObject());function CustomSlider_styles_templateObject(){let n=(0,a._)(["\n\n  /* SLICK DEFAULT - Styles */\n  .slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n    overflow-x: hidden;\n    overscroll-behavior: unset;\n    margin: 0;\n    padding: 0;\n  }\n  .slick-list:focus {\n    outline: none;\n  }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n  }\n\n  .slick-slider .slick-track,\n  .slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .slick-track:before,\n  .slick-track:after {\n    display: table;\n\n    content: '';\n  }\n  .slick-track:after {\n    clear: both;\n  }\n  .slick-loading .slick-track {\n    visibility: hidden;\n  }\n\n  .slick-slide {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n  }\n  [dir='rtl'] .slick-slide {\n    float: right;\n  }\n  .slick-slide img {\n    display: block;\n  }\n  .slick-slide.slick-loading img {\n    display: none;\n  }\n  .slick-slide.dragging img {\n    pointer-events: none;\n  }\n  .slick-initialized .slick-slide {\n    display: block;\n  }\n  .slick-loading .slick-slide {\n    visibility: hidden;\n  }\n  .slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n  }\n  .slick-arrow.slick-hidden {\n    display: none;\n  }\n\n  /* SLICK DEFAULTS - theme */\n  /* Slider */\n  .slick-loading .slick-list {\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n  }\n\n  /* Icons */\n  @font-face {\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'),\n      url('./fonts/slick.woff') format('woff'),\n      url('./fonts/slick.ttf') format('truetype'),\n      url('./fonts/slick.svg#slick') format('svg');\n  }\n  /* Arrows */\n  .slick-prev,\n  .slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n  }\n  .slick-prev:hover,\n  .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n  }\n  .slick-prev:hover:before,\n  .slick-prev:focus:before,\n  .slick-next:hover:before,\n  .slick-next:focus:before {\n    opacity: 1;\n  }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25;\n  }\n\n  .slick-prev:before,\n  .slick-next:before {\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: 0.75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .slick-prev {\n    left: -25px;\n  }\n  [dir='rtl'] .slick-prev {\n    right: -25px;\n    left: auto;\n  }\n  .slick-prev:before {\n    content: '←';\n  }\n  [dir='rtl'] .slick-prev:before {\n    content: '→';\n  }\n\n  .slick-next {\n    right: -25px;\n  }\n  [dir='rtl'] .slick-next {\n    right: auto;\n    left: -25px;\n  }\n  .slick-next:before {\n    content: '→';\n  }\n  [dir='rtl'] .slick-next:before {\n    content: '←';\n  }\n\n  /* Dots */\n  .slick-dotted.slick-slider {\n    margin-bottom: 30px;\n  }\n\n  .slick-dots {\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n  }\n  .slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n  }\n  .slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n  }\n  .slick-dots li button:hover,\n  .slick-dots li button:focus {\n    outline: none;\n  }\n  .slick-dots li button:hover:before,\n  .slick-dots li button:focus:before {\n    opacity: 1;\n  }\n  .slick-dots li button:before {\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: 0.25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .slick-dots li.slick-active button:before {\n    opacity: 0.75;\n    color: black;\n  }\n\n  max-width: 1120px;\n  margin: auto;\n\n  .slick-arrow {\n    display: none !important;\n    height: 80px;\n    width: 80px;\n  }\n\n  .slick-prev {\n    left: -85px;\n  }\n\n  .slick-next {\n    right: -85px;\n  }\n\n  .slick-slide > div {\n    margin: 0 12px;\n  }\n  .slick-list {\n    margin: 0 -12px;\n  }\n\n  .slick-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    background-color: lightgrey;\n    border-radius: 1rem;\n    margin: 0.5rem;\n    height: 300px;\n  }\n\n  .slick-dots {\n    bottom: -32px;\n\n    li {\n      margin: 0px !important;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      button {\n        padding: 0px !important;\n        outline: 0;\n        border: 0;\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        background-color: black;\n        opacity: 0.25;\n\n        ::before {\n          content: '';\n        }\n      }\n    }\n\n    .slick-active {\n      button {\n        height: 10px;\n        width: 10px;\n        opacity: 0.6;\n      }\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .slick-arrow {\n      display: block !important;\n    }\n\n    .slick-disabled {\n      display: none !important;\n    }\n  }\n"]);return CustomSlider_styles_templateObject=function(){return n},n}function _templateObject1(){let n=(0,a._)(["\n  path {\n    stroke: var(--category-primary-color);\n  }\n"]);return _templateObject1=function(){return n},n}t(4741),c.ZP.div(CustomSlider_styles_templateObject());let p=c.ZP.svg(_templateObject1());var CustomSlider_NextArrow=function(n){let{className:e,style:t,onClick:r}=n;return(0,i.jsxs)(p,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",style:t,className:e,onClick:r,children:[(0,i.jsx)("g",{filter:"url(#filter0_d_5459_6213)",children:(0,i.jsx)("circle",{cx:"50",cy:"40",r:"30",fill:"white"})}),(0,i.jsx)("path",{d:"M45.5 49L54.5 40L45.5 31",strokeWidth:"4","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("filter",{id:"filter0_d_5459_6213",x:"0",y:"0",width:"100",height:"100",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,i.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,i.jsx)("feOffset",{dy:"10"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"10"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),(0,i.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5459_6213"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5459_6213",result:"shape"})]})})]})},CustomSlider_PrevArrow=function(n){let{className:e,style:t,onClick:r}=n;return(0,i.jsxs)(p,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",style:t,className:e,onClick:r,children:[(0,i.jsx)("g",{filter:"url(#filter0_d_5463_6339)",children:(0,i.jsx)("circle",{cx:"50",cy:"40",r:"30",transform:"rotate(-180 50 40)",fill:"white"})}),(0,i.jsx)("path",{d:"M54.5 31L45.5 40L54.5 49",strokeWidth:"4","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("filter",{id:"filter0_d_5463_6339",x:"0",y:"0",width:"100",height:"100",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,i.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,i.jsx)("feOffset",{dy:"10"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"10"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),(0,i.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5463_6339"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5463_6339",result:"shape"})]})})]})},components_CustomCarousel=n=>{let[e,t]=(0,r.useState)({prev:!1,next:!1}),{scrollWidth:a=360,scrollDuration:c=500,iconLeft:p=null,iconRight:h=null,renderSvgArrows:f=!1,...u}=n,x=(0,r.useRef)(null),g=(0,r.useRef)(null),k=s;null!==p&&(k=p);let m=o;null!==h&&(m=h);let b=(0,r.useMemo)(()=>f?(0,i.jsx)(CustomSlider_NextArrow,{className:"icon-arrow"}):(0,i.jsx)("img",{src:m,alt:"arrow right",className:"icon-arrow"}),[m,f]),w=(0,r.useMemo)(()=>f?(0,i.jsx)(CustomSlider_PrevArrow,{className:"icon-arrow"}):(0,i.jsx)("img",{src:k,alt:"arrow left",className:"icon-arrow"}),[k,f]);return(0,i.jsxs)(d,{className:"custom_carousel_wrapper_style",children:[(0,i.jsx)("span",{className:"cust_car_icon right ".concat(e.next?"show":""),onClick:()=>{x&&x.current&&x.current.click()},children:b}),(0,i.jsx)("span",{onClick:()=>{g&&g.current&&g.current.click()},className:"cust_car_icon left ".concat(e.prev?"show":""),children:w}),(0,i.jsx)(l.Z,{navButtonScrollLength:a,navButtonScrollDuration:c,navButtonNextRef:x,navButtonPrevRef:g,easing:"in-out-cube",afterScroll:n=>{let{isScrollable:e,hasReachedStart:i,hasReachedEnd:r,totalSlides:l,currentSlideIndex:s}=n;if(!e){t({next:!1,prev:!1});return}if(l===s+1){t({next:!1,prev:!i});return}t({next:!r,prev:!i})},...u,children:n.children})]})}},3939:function(n,e,t){t.d(e,{ZP:function(){return h}});var i=t(7437),r=t(2265),l=t(4741),s=t(230),o=t(1806);function _templateObject(){let n=(0,s._)(["\n  .right-arrow__wrapper {\n    position: relative;\n  }\n\n  .right-arrow__circle {\n    background: var(--brand-primary-white-color);\n    box-shadow: 0 0.25rem 0.25rem rgb(0, 0, 0, 0.1);\n    height: 40px;\n    width: 40px;\n    border-radius: 1.25rem;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 2.5rem;\n    right: -60px;\n  }\n\n  .right-arrow__blur-wrapper {\n    height: 100%;\n    position: absolute;\n    right: 0;\n  }\n  .right-arrow__blur {\n    position: relative;\n    z-index: 2;\n    height: 100%;\n    width: 5vw;\n    margin-left: auto;\n    background-image: linear-gradient(\n      to right,\n      #fdfdfd08,\n      #ffffff00,\n      rgba(255, 255, 255, 1)\n    );\n  }\n\n  .right-arrow__circle path {\n    stroke: rgb(0, 0, 0, 1);\n    stroke-width: 2px;\n  }\n  .right-arrow__circle path.default {\n    stroke: rgb(0, 0, 0, 1);\n    stroke-width: 2px;\n  }\n"]);return _templateObject=function(){return n},n}let a=o.ZP.div(_templateObject());var components_RightArrow=function(n){let{className:e,hideBlur:t,onClick:r,arrowColor:l,category:s}=n;return(0,i.jsxs)(a,{children:[t&&(0,i.jsx)("div",{className:"right-arrow__blur-wrapper",children:(0,i.jsx)("div",{className:"right-arrow__blur",hidden:t||e.includes("slick-disabled")})}),(0,i.jsx)("div",{hidden:e.includes("slick-disabled"),className:"right-arrow__wrapper","data-product-category":s,children:(0,i.jsx)("div",{className:"right-arrow__circle ".concat(e),onClick:r,children:(0,i.jsx)("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:(0,i.jsx)("path",{id:"XMLID_2_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605  l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396  l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998  c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"})})})})]})};function styles_templateObject(){let n=(0,s._)(["\n  z-index: 10;\n\n  .left-arrow__circle {\n    background: var(--brand-primary-white-color);\n    box-shadow: 0px 0.25rem 0.25rem rgb(0, 0, 0, 0.1);\n    height: 40px;\n    width: 40px;\n    border-radius: 1.25rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 2.5rem;\n    left: -60px;\n  }\n\n  .left-arrow__circle path {\n    stroke: rgb(0, 0, 0, 1);\n    stroke-width: 2px;\n  }\n  .left-arrow__circle path.default {\n    stroke: rgb(0, 0, 0, 1);\n    stroke-width: 2px;\n  }\n"]);return styles_templateObject=function(){return n},n}let c=o.ZP.div(styles_templateObject());var components_LeftArrow=function(n){let{className:e,onClick:t,arrowColor:r,category:l}=n;return(0,i.jsx)(c,{"data-product-category":l,children:(0,i.jsx)("div",{hidden:e.includes("slick-disabled"),children:(0,i.jsx)("div",{className:"left-arrow__circle ".concat(e),onClick:t,children:(0,i.jsx)("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:(0,i.jsx)("path",{id:"XMLID_6_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394  c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998  c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0  c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"})})})})})},d=JSON.parse('{"dots":false,"infinite":false,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2.5}},{"breakpoint":768,"settings":{"slidesToShow":2}},{"breakpoint":600,"settings":{"slidesToShow":1.8,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1,"slidesToScroll":1,"dots":false,"infinite":false,"variableWidth":true,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2}},{"breakpoint":768,"settings":{"slidesToScroll":2}},{"breakpoint":600,"settings":{"slidesToScroll":2,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1.2,"slidesToScroll":1,"dots":false,"arrows":true}}]}}]}');function Slider_styles_templateObject(){let n=(0,s._)(["\n\n  width: 100%;\n  .slick-track {\n    display: flex;\n    margin: auto 0;\n  }\n\n  .slick-initialized {\n    display: flex;\n    align-items: center;\n    position: relative;\n  }\n\n  .slick-list {\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .slider__wrapper .slick-arrow {\n    cursor: pointer;\n    z-index: 3;\n    position: absolute;\n    width: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300)));\n    /* height: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300))); */\n    -webkit-tap-highlight-color: transparent;\n  }\n  .slider__wrapper .left-arrow__circle {\n    left: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));\n  }\n  .slider__wrapper .right-arrow__circle {\n    right: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));\n  }\n"]);return Slider_styles_templateObject=function(){return n},n}let p=o.ZP.div(Slider_styles_templateObject());d.nextArrow=(0,i.jsx)(components_RightArrow,{}),d.prevArrow=(0,i.jsx)(components_LeftArrow,{});let Carousel=class Carousel extends r.Component{render(){let{slidesToShow:n,slidesToScroll:e,category:t,children:r,hideBlur:s}=this.props;return d.slidesToShow=n||1,d.slidesToScroll=e||1,d.nextArrow=(0,i.jsx)(components_RightArrow,{category:t,hideBlur:s}),d.prevArrow=(0,i.jsx)(components_LeftArrow,{category:t}),(0,i.jsx)(p,{className:"slider__wrapper",children:(0,i.jsx)(l.Z,{...d,children:r})})}};var h=Carousel}}]);