"use strict";exports.id=763,exports.ids=[763],exports.modules={3011:(e,i,t)=>{t.d(i,{Z:()=>components_CustomCarousel});var r=t(80),s=t(9885),o=t(3359);let l={src:"/_next/static/media/ArrowLeft.57b32110.svg",height:100,width:100,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/ArrowRight.dabd6799.svg",height:100,width:100,blurWidth:0,blurHeight:0};var a=t(9817);let c=a.ZP.div`
  position: relative;

  .cust_car_icon {
    position: absolute;
    z-index: 1;
    top: calc(20%);
    display: none;
    cursor: pointer;
  }
  .cust_car_icon img {
    width: 90px;
  }

  .cust_car_icon.left {
    left: -45px;
  }
  .cust_car_icon.right {
    right: -45px;
  }

  .carousel-nav-button {
    display: none;
  }

  @media (min-width: 768px) {
    .cust_car_icon.show {
      display: block;
    }
  }
`;t(2723),a.ZP.div`

  /* SLICK DEFAULT - Styles */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;
    overflow-x: hidden;
    overscroll-behavior: unset;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  /* SLICK DEFAULTS - theme */
  /* Slider */
  .slick-loading .slick-list {
    background: #fff url('./ajax-loader.gif') center center no-repeat;
  }

  /* Icons */
  @font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('./fonts/slick.eot');
    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'),
      url('./fonts/slick.woff') format('woff'),
      url('./fonts/slick.ttf') format('truetype'),
      url('./fonts/slick.svg#slick') format('svg');
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: '←';
  }
  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  .slick-next {
    right: -25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '→';
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }

  max-width: 1120px;
  margin: auto;

  .slick-arrow {
    display: none !important;
    height: 80px;
    width: 80px;
  }

  .slick-prev {
    left: -85px;
  }

  .slick-next {
    right: -85px;
  }

  .slick-slide > div {
    margin: 0 12px;
  }
  .slick-list {
    margin: 0 -12px;
  }

  .slick-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: lightgrey;
    border-radius: 1rem;
    margin: 0.5rem;
    height: 300px;
  }

  .slick-dots {
    bottom: -32px;

    li {
      margin: 0px !important;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      button {
        padding: 0px !important;
        outline: 0;
        border: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: black;
        opacity: 0.25;

        ::before {
          content: '';
        }
      }
    }

    .slick-active {
      button {
        height: 10px;
        width: 10px;
        opacity: 0.6;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .slick-arrow {
      display: block !important;
    }

    .slick-disabled {
      display: none !important;
    }
  }
`;let d=a.ZP.svg`
  path {
    stroke: var(--category-primary-color);
  }
`,CustomSlider_NextArrow=function(e){let{className:i,style:t,onClick:s}=e;return(0,r.jsxs)(d,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",style:t,className:i,onClick:s,children:[r.jsx("g",{filter:"url(#filter0_d_5459_6213)",children:r.jsx("circle",{cx:"50",cy:"40",r:"30",fill:"white"})}),r.jsx("path",{d:"M45.5 49L54.5 40L45.5 31",strokeWidth:"4","stroke-linecap":"round","stroke-linejoin":"round"}),r.jsx("defs",{children:(0,r.jsxs)("filter",{id:"filter0_d_5459_6213",x:"0",y:"0",width:"100",height:"100",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[r.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),r.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),r.jsx("feOffset",{dy:"10"}),r.jsx("feGaussianBlur",{stdDeviation:"10"}),r.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),r.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5459_6213"}),r.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5459_6213",result:"shape"})]})})]})},CustomSlider_PrevArrow=function(e){let{className:i,style:t,onClick:s}=e;return(0,r.jsxs)(d,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",style:t,className:i,onClick:s,children:[r.jsx("g",{filter:"url(#filter0_d_5463_6339)",children:r.jsx("circle",{cx:"50",cy:"40",r:"30",transform:"rotate(-180 50 40)",fill:"white"})}),r.jsx("path",{d:"M54.5 31L45.5 40L54.5 49",strokeWidth:"4","stroke-linecap":"round","stroke-linejoin":"round"}),r.jsx("defs",{children:(0,r.jsxs)("filter",{id:"filter0_d_5463_6339",x:"0",y:"0",width:"100",height:"100",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[r.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),r.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),r.jsx("feOffset",{dy:"10"}),r.jsx("feGaussianBlur",{stdDeviation:"10"}),r.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),r.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5463_6339"}),r.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5463_6339",result:"shape"})]})})]})},components_CustomCarousel=e=>{let[i,t]=(0,s.useState)({prev:!1,next:!1}),{scrollWidth:a=360,scrollDuration:d=500,iconLeft:p=null,iconRight:h=null,renderSvgArrows:f=!1,...x}=e,u=(0,s.useRef)(null),g=(0,s.useRef)(null),k=l;null!==p&&(k=p);let m=n;null!==h&&(m=h);let w=(0,s.useMemo)(()=>f?r.jsx(CustomSlider_NextArrow,{className:"icon-arrow"}):r.jsx("img",{src:m,alt:"arrow right",className:"icon-arrow"}),[m,f]),b=(0,s.useMemo)(()=>f?r.jsx(CustomSlider_PrevArrow,{className:"icon-arrow"}):r.jsx("img",{src:k,alt:"arrow left",className:"icon-arrow"}),[k,f]);return(0,r.jsxs)(c,{className:"custom_carousel_wrapper_style",children:[r.jsx("span",{className:`cust_car_icon right ${i.next?"show":""}`,onClick:()=>{u&&u.current&&u.current.click()},children:w}),r.jsx("span",{onClick:()=>{g&&g.current&&g.current.click()},className:`cust_car_icon left ${i.prev?"show":""}`,children:b}),r.jsx(o.Z,{navButtonScrollLength:a,navButtonScrollDuration:d,navButtonNextRef:u,navButtonPrevRef:g,easing:"in-out-cube",afterScroll:({isScrollable:e,hasReachedStart:i,hasReachedEnd:r,totalSlides:s,currentSlideIndex:o})=>{if(!e){t({next:!1,prev:!1});return}if(s===o+1){t({next:!1,prev:!i});return}t({next:!r,prev:!i})},...x,children:e.children})]})}},860:(e,i,t)=>{t.d(i,{ZP:()=>p});var r=t(80),s=t(9885),o=t(2723),l=t(9817);let n=l.ZP.div`
  .right-arrow__wrapper {
    position: relative;
  }

  .right-arrow__circle {
    background: var(--brand-primary-white-color);
    box-shadow: 0 0.25rem 0.25rem rgb(0, 0, 0, 0.1);
    height: 40px;
    width: 40px;
    border-radius: 1.25rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.5rem;
    right: -60px;
  }

  .right-arrow__blur-wrapper {
    height: 100%;
    position: absolute;
    right: 0;
  }
  .right-arrow__blur {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 5vw;
    margin-left: auto;
    background-image: linear-gradient(
      to right,
      #fdfdfd08,
      #ffffff00,
      rgba(255, 255, 255, 1)
    );
  }

  .right-arrow__circle path {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
  .right-arrow__circle path.default {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
`,components_RightArrow=function(e){let{className:i,hideBlur:t,onClick:s,arrowColor:o,category:l}=e;return(0,r.jsxs)(n,{children:[t&&r.jsx("div",{className:"right-arrow__blur-wrapper",children:r.jsx("div",{className:"right-arrow__blur",hidden:t||i.includes("slick-disabled")})}),r.jsx("div",{hidden:i.includes("slick-disabled"),className:"right-arrow__wrapper","data-product-category":l,children:r.jsx("div",{className:`right-arrow__circle ${i}`,onClick:s,children:r.jsx("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:r.jsx("path",{id:"XMLID_2_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605  l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396  l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998  c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"})})})})]})},a=l.ZP.div`
  z-index: 10;

  .left-arrow__circle {
    background: var(--brand-primary-white-color);
    box-shadow: 0px 0.25rem 0.25rem rgb(0, 0, 0, 0.1);
    height: 40px;
    width: 40px;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.5rem;
    left: -60px;
  }

  .left-arrow__circle path {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
  .left-arrow__circle path.default {
    stroke: rgb(0, 0, 0, 1);
    stroke-width: 2px;
  }
`,components_LeftArrow=function(e){let{className:i,onClick:t,arrowColor:s,category:o}=e;return r.jsx(a,{"data-product-category":o,children:r.jsx("div",{hidden:i.includes("slick-disabled"),children:r.jsx("div",{className:`left-arrow__circle ${i}`,onClick:t,children:r.jsx("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:r.jsx("path",{id:"XMLID_6_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394  c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998  c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0  c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"})})})})})},c=JSON.parse('{"dots":false,"infinite":false,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2.5}},{"breakpoint":768,"settings":{"slidesToShow":2}},{"breakpoint":600,"settings":{"slidesToShow":1.8,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1,"slidesToScroll":1,"dots":false,"infinite":false,"variableWidth":true,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2}},{"breakpoint":768,"settings":{"slidesToScroll":2}},{"breakpoint":600,"settings":{"slidesToScroll":2,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1.2,"slidesToScroll":1,"dots":false,"arrows":true}}]}}]}'),d=l.ZP.div`

  width: 100%;
  .slick-track {
    display: flex;
    margin: auto 0;
  }

  .slick-initialized {
    display: flex;
    align-items: center;
    position: relative;
  }

  .slick-list {
    width: 100%;
    overflow: hidden;
  }

  .slider__wrapper .slick-arrow {
    cursor: pointer;
    z-index: 3;
    position: absolute;
    width: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300)));
    /* height: calc(30px + (40 - 30) * ((100vw -300px) / (1440 - 300))); */
    -webkit-tap-highlight-color: transparent;
  }
  .slider__wrapper .left-arrow__circle {
    left: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));
  }
  .slider__wrapper .right-arrow__circle {
    right: calc(0px - (25px + (46 - 25) * ((100vw - 500px) / (1440 - 500))));
  }
`;c.nextArrow=r.jsx(components_RightArrow,{}),c.prevArrow=r.jsx(components_LeftArrow,{});let Carousel=class Carousel extends s.Component{render(){let{slidesToShow:e,slidesToScroll:i,category:t,children:s,hideBlur:l}=this.props;return c.slidesToShow=e||1,c.slidesToScroll=i||1,c.nextArrow=r.jsx(components_RightArrow,{category:t,hideBlur:l}),c.prevArrow=r.jsx(components_LeftArrow,{category:t}),r.jsx(d,{className:"slider__wrapper",children:r.jsx(o.Z,{...c,children:s})})}};let p=Carousel}};