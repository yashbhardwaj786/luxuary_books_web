exports.id=917,exports.ids=[917],exports.modules={860:(r,e,i)=>{"use strict";i.d(e,{ZP:()=>p});var t=i(80),s=i(9885),l=i(2723),o=i(9817);let a=o.ZP.div`
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
`,components_RightArrow=function(r){let{className:e,hideBlur:i,onClick:s,arrowColor:l,category:o}=r;return(0,t.jsxs)(a,{children:[i&&t.jsx("div",{className:"right-arrow__blur-wrapper",children:t.jsx("div",{className:"right-arrow__blur",hidden:i||e.includes("slick-disabled")})}),t.jsx("div",{hidden:e.includes("slick-disabled"),className:"right-arrow__wrapper","data-product-category":o,children:t.jsx("div",{className:`right-arrow__circle ${e}`,onClick:s,children:t.jsx("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:t.jsx("path",{id:"XMLID_2_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605  l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396  l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998  c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"})})})})]})},d=o.ZP.div`
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
`,components_LeftArrow=function(r){let{className:e,onClick:i,arrowColor:s,category:l}=r;return t.jsx(d,{"data-product-category":l,children:t.jsx("div",{hidden:e.includes("slick-disabled"),children:t.jsx("div",{className:`left-arrow__circle ${e}`,onClick:i,children:t.jsx("svg",{fill:"#ffffff",height:"64px",width:"64px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",children:t.jsx("path",{id:"XMLID_6_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394  c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998  c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0  c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"})})})})})},n=JSON.parse('{"dots":false,"infinite":false,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2.5}},{"breakpoint":768,"settings":{"slidesToShow":2}},{"breakpoint":600,"settings":{"slidesToShow":1.8,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1,"slidesToScroll":1,"dots":false,"infinite":false,"variableWidth":true,"speed":500,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":2}},{"breakpoint":768,"settings":{"slidesToScroll":2}},{"breakpoint":600,"settings":{"slidesToScroll":2,"initialSlide":2}},{"breakpoint":480,"settings":{"slidesToShow":1.2,"slidesToScroll":1,"dots":false,"arrows":true}}]}}]}'),c=o.ZP.div`

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
`;n.nextArrow=t.jsx(components_RightArrow,{}),n.prevArrow=t.jsx(components_LeftArrow,{});let Carousel=class Carousel extends s.Component{render(){let{slidesToShow:r,slidesToScroll:e,category:i,children:s,hideBlur:o}=this.props;return n.slidesToShow=r||1,n.slidesToScroll=e||1,n.nextArrow=t.jsx(components_RightArrow,{category:i,hideBlur:o}),n.prevArrow=t.jsx(components_LeftArrow,{category:i}),t.jsx(c,{className:"slider__wrapper",children:t.jsx(l.Z,{...n,children:s})})}};let p=Carousel},61:()=>{}};