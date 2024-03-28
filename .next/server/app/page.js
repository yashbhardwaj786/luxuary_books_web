(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},7796:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>g,routeModule:()=>x,tree:()=>p});var n=o(3137),r=o(4647),i=o(4183),a=o.n(i),l=o(1775),s={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>l[e]);o.d(t,s);let c=n.AppPageRouteModule,p=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,6768)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(o.bind(o,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],g=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/page.tsx"],d="/page",m={require:o,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},9287:(e,t,o)=>{Promise.resolve().then(o.bind(o,7261))},7261:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Home});var n=o(80);o(61);var r=o(9885),i=o(860),a=o(9817);let l=a.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/images/homepage_bg_mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-image: url('/images/homepage_bg.png');
  }

`,s=a.ZP.div`

    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    
    .book__img img {
      object-fit: contain;
      width: auto;
      height: 161px;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .book-title {
      color: var(--book-title-color);
      font-size: 12px;
      line-height: 14.44px;
      font-family: 'primary font bold', sans-serif;
      margin-top: 10px;

    }

    .book-subtitle {
      color: var(--book-subtitle-color);
      font-size: 16px;
      line-height: 19.53px;
      font-family: 'Gayathri font', sans-serif;
      font-weight: var(--brand-font-weight-roman);
      margin-top: 10px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 15px;
      margin-right: 40px;
      margin-left: 40px;

    }

    .button-container {
      display: flex;
      background: var(--brand-navbar-background-color);
      width: 119px;
      border-radius: 24.5px;
      padding: 8px 0px;
      margin: 8px 0px 15px;
      cursor: pointer;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 8px;
      text-align: center;
      margin-left: 16px;
      font-family: 'primary font bold', sans-serif;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      padding: 50px; 

      .book__img img {
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        height: 450px;
        width: auto;
      }

      .book-title {
        font-size: 25px;
        line-height: 30.8px;
        margin-top: 20px;
      }

      .book-subtitle {

        font-size: 16px;
        line-height: 19.53px;
        margin-top: 10px;
        margin-right: 215px;
        margin-left: 215px;
        text-align: center;
        text-transform: capitalize;
      }

      .button-container {
        width: 243px;
        padding: 17px 34px;
        margin: 18px 0px 0px;
      }

      .button-text {
        font-size: 16px;
        line-height: 19.25px;
        margin-left: 0px;
      }

    }
  `;var c=o(3011),p=o(1605),g=o(2342),d=o.n(g);function BannerContent({bannerData:e=[],exploreBookClick:t=d()}){let o=(0,p.k)(),a=(0,r.useCallback)(e=>{t(e)},[]);return n.jsx(l,{children:o?n.jsx(c.Z,{scrollWidth:1,scrollDuration:100,children:e.map((e,t)=>{if(!e)return null;let{bookImage:o="",cta:r={}}=e,{text:i="",link:l=""}=r;return(0,n.jsxs)(s,{children:[n.jsx("div",{className:"book__img",children:n.jsx("img",{src:o,alt:"book-image"})}),n.jsx("div",{className:"button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),a(l)},children:n.jsx("label",{className:"button-text",children:i})})]},t)})}):n.jsx(i.ZP,{slidesToShow:1,slidesToScroll:1,hideBlur:!0,children:e.map((e,t)=>{if(!e)return null;let{bookImage:o="",title:r="",description:i="",cta:l={}}=e,{text:c="",link:p=""}=l;return(0,n.jsxs)(s,{children:[n.jsx("div",{className:"book__img",children:n.jsx("img",{src:o,alt:"luxary-book"})}),n.jsx("label",{className:"book-title",children:r}),n.jsx("label",{className:"book-subtitle",children:i}),n.jsx("div",{className:"button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),a(p)},children:n.jsx("label",{className:"button-text",children:c})})]},t)})})})}let m=a.ZP.div`
    display: flex;
    flex-direction: row;
    background-color: var(--brand-navbar-background-color);
    padding: 15px;
    width: 100%;
    justify-content: center;
    

    .book-img {
        margin-left: 20px;
        margin-right: 20px;
    }
    .text-container {
        flex: 1;
        display: flex ;
        flex-direction: column;
        justify-content: center;
    }
    .image {
        margin-top: 12px;
        margin-bottom: 7px;
        align-self: center;
    }
    .button-container-aboutbook {
        display: flex;
        background: var(--brand-yellow-color);
        border-radius: 24.5px;
        padding-bottom: 7px;
        padding-top: 7px;
        padding-left: 25px;
        padding-right: 25px;
        width: 96px;
        align-self: center;
        margin-bottom: 23px;
        margin-top: 7px;
        cursor: pointer;
    }

    .button-text-aboutbook {
      color: var(--brand-navbar-background-color);
      font-size: 6px;
      width: 100%;
      text-align: center;
      align-self: center;
      font-family: 'primary font bold', sans-serif;
      cursor: pointer;
    
    }

    @media (min-width: 768px) {
        height: 250px;
        padding: 40px;

        .book-img {
            margin-left: 61px;
            margin-right: 61px;
        }
        .image {
            margin-top: 30px;
            margin-bottom: 20px;
        }

        .button-container-aboutbook {
            padding-bottom: 18px;
            padding-top: 18px;
            padding-left: 64px;
            padding-right: 64px;
            width: 243px;
            margin-bottom: 60px;
        }
        .button-text-aboutbook {
            font-size: 16px;
            width: 100%;
            line-height: 19.25px;
        }
    }

`,AboutBook_LeftBook=function({ismobile:e=!1}){return n.jsx(n.Fragment,{children:e?n.jsx("svg",{opacity:.1,width:"77",height:"69",viewBox:"0 0 77 69",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M71.4099 21.1102C71.1025 18.4479 71.0592 13.8626 73.205 12.323C73.2434 12.2947 73.2719 12.254 73.3055 12.2189C75.0598 11.5723 76.2739 10.6649 75.3209 9.44382L49.4419 0.458252L7.53786 7.17182C7.53786 7.17182 2.73933 7.96217 3.16799 16.5531C3.40069 21.2288 4.6733 23.5251 5.78624 24.6553L2.34763 25.8494C1.39323 27.0705 2.6071 27.9782 4.36167 28.6238C4.39501 28.6598 4.42313 28.7003 4.46214 28.7286C6.6066 30.2695 6.56532 34.8543 6.25686 37.5171C-1.44706 40.0379 1.31839 40.8593 1.31839 40.8593L3.00832 41.3306C1.81963 42.5684 0.639101 44.9157 0.860237 49.3674C1.28913 57.9568 5.23056 58.5495 5.23056 58.5495L32.6523 68.8205L74.0422 57.2678C74.0422 57.2678 76.8085 56.445 69.1026 53.924C68.7927 51.2654 68.7496 46.6811 70.8991 45.1362C70.9386 45.1088 70.9674 45.0672 70.9993 45.0327C72.7539 44.3861 73.9669 43.4795 73.0136 42.2584L71.2146 41.6324C72.4144 40.7987 74.2166 38.6197 74.499 32.9597C74.6938 29.0665 73.8124 26.7864 72.7922 25.444L76.3481 24.4524C76.3483 24.454 79.1147 23.6312 71.4099 21.1102ZM36.7897 21.0001L43.7499 19.3517L67.2715 13.7816L70.7759 12.951C69.6562 15.3127 69.7031 18.5447 69.8884 20.6219C69.929 21.0919 69.9758 21.521 70.0211 21.8472L66.1854 22.9462L36.4971 31.4569L36.7897 21.0001ZM6.89146 29.3592L10.3954 30.1898L32.9846 35.5409L34.958 36.0067L40.8761 37.4083L41.168 47.8654L10.6549 39.1174L7.64673 38.2559C7.69096 37.9292 7.73768 37.5006 7.78009 37.0294C7.96426 34.9536 8.01211 31.7209 6.89146 29.3592ZM5.53017 16.1396C5.48776 13.8545 5.84113 12.202 6.55534 11.3619C7.00986 10.8256 7.54625 10.714 7.91413 10.714C8.10851 10.714 8.24845 10.7451 8.25797 10.7451L26.3133 17.5282L35.3214 20.9126L35.0259 31.4425L9.75466 23.2781L8.42104 22.8477C8.37205 22.8317 8.3056 22.8208 8.25434 22.8182C8.15024 22.8095 5.65174 22.5445 5.53017 16.1396ZM32.7176 64.2584L6.11352 55.6633C6.0643 55.6468 5.99853 55.6359 5.94727 55.633C5.84135 55.6249 3.34172 55.3601 3.22083 48.9568C3.17774 46.6689 3.53292 45.0178 4.24577 44.177C4.70143 43.6407 5.23805 43.5291 5.60525 43.5291C5.80007 43.5291 5.93956 43.5592 5.94977 43.5592L33.0114 53.7282L32.7176 64.2584ZM67.5789 53.4363C67.6208 53.9078 67.6676 54.3361 67.7129 54.6628L34.1883 64.2733L34.4813 53.8163L41.6486 52.1182L42.7071 52.4133L46.6744 50.9275L64.962 46.597L68.4677 45.7659C67.3469 48.1272 67.3933 51.3605 67.5789 53.4363ZM69.4255 39.2248C69.3645 39.2264 69.3035 39.2358 69.2461 39.2567L66.7177 40.0724L42.6427 47.8515L42.3483 37.3216L50.247 34.3528L69.3729 27.1651C69.3754 27.1638 70.379 26.9069 71.1157 27.7702C71.8288 28.6102 72.1826 30.2627 72.1409 32.5478C72.0161 38.9506 69.5165 39.2167 69.4255 39.2248Z",fill:"#F0EFF4"})}):n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"191",height:"172",opacity:.1,fill:"none",viewBox:"0 0 191 172",children:n.jsx("path",{fill:"#F0EFF4",d:"M177.262 51.87c-.772-6.687-.881-18.203 4.509-22.07.096-.071.168-.174.252-.262 4.406-1.624 7.456-3.903 5.062-6.97L122.087 0 16.839 16.862S4.787 18.847 5.864 40.424c.584 11.744 3.78 17.511 6.576 20.35l-8.637 3c-2.397 3.066.652 5.346 5.059 6.967.084.09.154.193.252.263 5.386 3.87 5.283 15.386 4.508 22.074-19.35 6.331-12.404 8.394-12.404 8.394l4.245 1.184c-2.986 3.109-5.95 9.004-5.395 20.186 1.077 21.573 10.976 23.062 10.976 23.062L79.917 171.7l103.956-29.016s6.948-2.066-12.406-8.398c-.778-6.677-.887-18.191 4.512-22.072.099-.068.172-.173.252-.259 4.407-1.625 7.453-3.902 5.059-6.969l-4.519-1.572c3.014-2.094 7.54-7.567 8.25-21.782.489-9.779-1.725-15.506-4.287-18.877l8.931-2.49c.001.003 6.949-2.063-12.403-8.395zm-86.953-.276l17.482-4.14 59.077-13.99 8.802-2.087c-2.813 5.932-2.695 14.05-2.229 19.267.102 1.18.219 2.258.333 3.077l-9.634 2.76-74.566 21.376.735-26.264zM15.216 72.588l8.8 2.087 56.736 13.44 4.957 1.17 14.863 3.52.734 26.264-76.638-21.972-7.555-2.163c.11-.82.228-1.897.335-3.081.462-5.213.582-13.333-2.232-19.264zm-3.42-33.202c-.106-5.74.782-9.89 2.575-12 1.142-1.347 2.49-1.627 3.413-1.627.489 0 .84.078.864.078l45.348 17.036 22.625 8.5-.742 26.448-63.472-20.506-3.35-1.081a1.786 1.786 0 00-.418-.074c-.262-.022-6.537-.688-6.842-16.774zm68.285 120.856l-66.82-21.587a1.755 1.755 0 00-.417-.077c-.266-.02-6.544-.685-6.848-16.768-.108-5.746.784-9.893 2.575-12.005 1.144-1.347 2.492-1.627 3.414-1.627.49 0 .84.076.866.076l67.968 25.54-.737 26.448zm87.559-27.181c.105 1.184.223 2.26.337 3.081L83.775 160.28l.736-26.265 18.002-4.264 2.658.741 9.965-3.732 45.931-10.877 8.805-2.087c-2.815 5.931-2.698 14.052-2.232 19.265zm4.638-35.694a1.43 1.43 0 00-.451.08l-6.35 2.049-60.468 19.538-.739-26.447 19.839-7.457 48.037-18.052c.006-.004 2.527-.649 4.377 1.52 1.791 2.11 2.68 6.26 2.575 11.999-.313 16.082-6.592 16.75-6.82 16.77z"})})})},RightBook=function({ismobile:e=!1}){return n.jsx(n.Fragment,{children:e?n.jsx("svg",{opacity:.1,width:"77",height:"69",viewBox:"0 0 77 69",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.54202 21.1102C5.84934 18.4479 5.89266 13.8626 3.74685 12.323C3.70852 12.2947 3.67994 12.254 3.64638 12.2189C1.89203 11.5723 0.677933 10.6649 1.63097 9.44382L27.51 0.458252L69.414 7.17182C69.414 7.17182 74.2125 7.96217 73.7839 16.5531C73.5512 21.2288 72.2786 23.5251 71.1656 24.6553L74.6042 25.8494C75.5586 27.0705 74.3448 27.9782 72.5902 28.6238C72.5569 28.6598 72.5287 28.7003 72.4897 28.7286C70.3453 30.2695 70.3866 34.8543 70.695 37.5171C78.3989 40.0379 75.6335 40.8593 75.6335 40.8593L73.9436 41.3306C75.1322 42.5684 76.3128 44.9157 76.0916 49.3674C75.6627 57.9568 71.7213 58.5495 71.7213 58.5495L44.2995 68.8205L2.90971 57.2678C2.90971 57.2678 0.143349 56.445 7.84931 53.924C8.15913 51.2654 8.20222 46.6811 6.05279 45.1362C6.01332 45.1088 5.98452 45.0672 5.95254 45.0327C4.19797 44.3861 2.98501 43.4795 3.93827 42.2584L5.7373 41.6324C4.5375 40.7987 2.73529 38.6197 2.45292 32.9597C2.25809 29.0665 3.13947 26.7864 4.15964 25.444L0.603767 24.4524C0.603546 24.454 -2.16281 23.6312 5.54202 21.1102ZM40.1622 21.0001L33.2019 19.3517L9.68033 13.7816L6.17594 12.951C7.29568 15.3127 7.24873 18.5447 7.06343 20.6219C7.02283 21.0919 6.97611 21.521 6.93075 21.8472L10.7665 22.9462L40.4547 31.4569L40.1622 21.0001ZM70.0604 29.3592L66.5565 30.1898L43.9673 35.5409L41.9938 36.0067L36.0758 37.4083L35.7839 47.8654L66.297 39.1174L69.3051 38.2559C69.2609 37.9292 69.2142 37.5006 69.1718 37.0294C68.9876 34.9536 68.9398 31.7209 70.0604 29.3592ZM71.4217 16.1396C71.4641 13.8545 71.1107 12.202 70.3965 11.3619C69.942 10.8256 69.4056 10.714 69.0377 10.714C68.8434 10.714 68.7034 10.7451 68.6939 10.7451L50.6386 17.5282L41.6305 20.9126L41.926 31.4425L67.1972 23.2781L68.5308 22.8477C68.5798 22.8317 68.6463 22.8208 68.6975 22.8182C68.8016 22.8095 71.3001 22.5445 71.4217 16.1396ZM44.2342 64.2584L70.8384 55.6633C70.8876 55.6468 70.9533 55.6359 71.0046 55.633C71.1105 55.6249 73.6102 55.3601 73.731 48.9568C73.7741 46.6689 73.419 45.0178 72.7061 44.177C72.2504 43.6407 71.7138 43.5291 71.3466 43.5291C71.1518 43.5291 71.0123 43.5592 71.0021 43.5592L43.9405 53.7282L44.2342 64.2584ZM9.373 53.4363C9.33104 53.9078 9.28432 54.3361 9.23896 54.6628L42.7636 64.2733L42.4706 53.8163L35.3033 52.1182L34.2448 52.4133L30.2775 50.9275L11.9899 46.597L8.48415 45.7659C9.60502 48.1272 9.55853 51.3605 9.373 53.4363ZM7.52634 39.2248C7.58736 39.2264 7.64836 39.2358 7.70575 39.2567L10.2342 40.0724L34.3092 47.8515L34.6036 37.3216L26.7048 34.3528L7.57896 27.1651C7.57647 27.1638 6.57285 26.9069 5.83619 27.7702C5.12311 28.6102 4.76929 30.2627 4.81102 32.5478C4.93576 38.9506 7.43539 39.2167 7.52634 39.2248Z",fill:"#F0EFF4"})}):n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"191",height:"172",opacity:.1,fill:"none",viewBox:"0 0 191 172",children:n.jsx("path",{fill:"#F0EFF4",d:"M13.617 51.87c.772-6.687.88-18.203-4.509-22.07-.096-.071-.168-.174-.252-.262-4.406-1.624-7.456-3.903-5.062-6.97L68.793 0 174.04 16.862s12.052 1.985 10.975 23.562c-.584 11.744-3.78 17.511-6.576 20.35l8.637 3c2.397 3.066-.652 5.346-5.059 6.967-.083.09-.154.193-.252.263-5.386 3.87-5.282 15.386-4.508 22.074 19.35 6.331 12.404 8.394 12.404 8.394l-4.245 1.184c2.986 3.109 5.951 9.004 5.396 20.186-1.078 21.573-10.977 23.062-10.977 23.062L110.962 171.7 7.006 142.684s-6.948-2.066 12.406-8.398c.778-6.677.887-18.191-4.512-22.072-.099-.068-.171-.173-.252-.259-4.406-1.625-7.453-3.902-5.059-6.969l4.519-1.572c-3.014-2.094-7.54-7.567-8.25-21.782-.489-9.779 1.725-15.506 4.287-18.877l-8.93-2.49c-.001.003-6.95-2.063 12.402-8.395zm86.953-.276l-17.481-4.14-59.078-13.99-8.802-2.087c2.813 5.932 2.695 14.05 2.23 19.267a62.42 62.42 0 01-.334 3.077l9.634 2.76 74.566 21.376-.735-26.264zm75.093 20.994l-8.8 2.087-56.736 13.44-4.956 1.17-14.864 3.52-.734 26.264 76.638-21.972 7.555-2.163a72.04 72.04 0 01-.334-3.081c-.463-5.213-.583-13.333 2.231-19.264zm3.419-33.202c.107-5.74-.781-9.89-2.574-12-1.142-1.347-2.489-1.627-3.413-1.627-.488 0-.84.078-.864.078l-45.348 17.036-22.625 8.5.742 26.448 63.472-20.506 3.35-1.081c.123-.04.29-.068.418-.074.262-.022 6.537-.688 6.842-16.774zm-68.284 120.856l66.819-21.587a1.76 1.76 0 01.418-.077c.266-.02 6.544-.685 6.848-16.768.108-5.746-.784-9.893-2.575-12.005-1.144-1.347-2.492-1.627-3.414-1.627-.489 0-.84.076-.865.076l-67.969 25.54.738 26.448zm-87.559-27.181a66.386 66.386 0 01-.336 3.081l84.201 24.138-.736-26.265-18.002-4.264-2.658.741-9.965-3.732-45.931-10.877-8.805-2.087c2.815 5.931 2.698 14.052 2.232 19.265zm-4.638-35.694c.153.004.307.028.45.08l6.351 2.049 60.468 19.538.74-26.447-19.84-7.457-48.037-18.052c-.006-.004-2.527-.649-4.377 1.52-1.79 2.11-2.68 6.26-2.575 11.999.313 16.082 6.592 16.75 6.82 16.77z"})})})};function AboutBook({learnMoreClick:e=d(),aboutBook:t={}}){let{logoImage:o="",cta:i={}}=t,{text:a="",link:l=""}=i||{},s=(0,r.useCallback)(t=>{e(t)},[]),c=(0,p.k)();return(0,n.jsxs)(m,{children:[n.jsx("div",{className:"book-img",children:n.jsx(AboutBook_LeftBook,{ismobile:c})}),(0,n.jsxs)("div",{className:"text-container",children:[n.jsx("img",{className:"image",src:"/images/logo1.png",alt:"Logo"}),n.jsx("div",{className:"button-container-aboutbook",onClick:()=>s(l),children:n.jsx("label",{className:"button-text-aboutbook",children:a})})]}),n.jsx("div",{className:"book-img",children:n.jsx(RightBook,{ismobile:c})})]})}let x=a.ZP.div`
    display: flex;
    flex-direction: column;
    background-repeat: repeat;
    padding-bottom: 10px;
    background-image: url('/images/background_list_mobile.png');

    .bgContainer{
        display: flex;
        flex-direction: column;
        background-image: url('/images/FullWaveMobile.svg');
        background-repeat: repeat-y;
    }

    @media (min-width: 768px) {
        background-image: url('/images/background_list.png');
        padding-bottom: 0px;
        .bgContainer{
            display: flex;
            background-image: url('/images/fullwave.svg');
            margin-left: 70px;
            height: fit-content;
        }
    
    }
`,u=a.ZP.div`
    display: flex;
    margin-right: 126px;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-size: auto 100%;
    background-position: left center;

    .book-item-image {
        height: 300px;
        width: 237px;
        margin-top: 121px;
    }

    .book-details-container {
        display: flex;
        flex-direction: column;
        margin-top: 34px;
        margin-right: 100px;
        flex: 1;
        
    }
    
    .book-journey-title {
        font-size: 35px;
        font-family: 'primary font', sans-serif;
        margin-top: 80px;
        margin-right: 25px;
        margin-left: 100px;
        color: var(--brand-primary-white-color);

    }
    .book-journey-subtitle {
        font-size: 16px;
        font-family: 'Gayathri font', sans-serif;
        margin-top: 10px;
        margin-right: 325px;
        margin-left: 100px;
        color: var(--brand-primary-white-color);
        margin-bottom: 10px;
    }

    .book-journey-button-container {
        display: flex;
        height: 49px;
        width: 243px;
        border-radius: 24.5px;
        background-color: var(--brand-yellow-color);
        margin-top: 10px;
        margin-left: 100px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 16px;
        margin-top: 18px;
        margin-bottom: 17px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

    
`;function BookJourneyOddItem({journey:e={},learnMoreClick:t=d()}){let{bookImageUrl:o="",title:i="",description:a="",cta:l={}}=e||{},{text:s="",link:c=""}=l||{},p=(0,r.useCallback)(e=>{t(e)},[]);return(0,n.jsxs)(u,{children:[(0,n.jsxs)("div",{className:"book-details-container",children:[n.jsx("label",{className:"book-journey-title",children:i}),n.jsx("label",{className:"book-journey-subtitle",children:a}),n.jsx("div",{className:"book-journey-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),p(c)},children:n.jsx("label",{className:"book-journey-button-text",children:s})})]}),n.jsx("img",{className:"book-item-image",src:o})]})}let b=a.ZP.div`
    display: flex;
    margin-left: 126px;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-size: auto 100%;
    background-position: right center;

    .book-item-image {
        height: 300px;
        width: 237px;
        margin-top: 121px;
    }

    .book-details-container {
        display: flex;
        flex-direction: column;
        margin-top: 34px;
        margin-left: 80px;
        flex: 1;
        
    }
    
    .book-journey-title {
        font-size: 35px;
        font-family: 'primary font', sans-serif;
        margin-top: 80px;
        margin-left: 25px;
        margin-right: 100px;
        color: var(--brand-primary-white-color);

    }
    .book-journey-subtitle {
        font-size: 16px;
        font-family: 'Gayathri font', sans-serif;
        margin-top: 10px;
        margin-left: 25px;
        margin-right: 106px;
        color: var(--brand-primary-white-color);
        margin-bottom: 10px;
    }

    .book-journey-button-container {
        display: flex;
        height: 49px;
        width: 243px;
        border-radius: 24.5px;
        background-color: var(--brand-yellow-color);
        margin-top: 10px;
        margin-left: 25px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 16px;
        margin-top: 18px;
        margin-bottom: 17px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

    
`;function BookJourneyEvenItem({journey:e={},learnMoreClick:t=d()}){let{bookImageUrl:o="",title:i="",description:a="",cta:l={}}=e||{},{text:s="",link:c=""}=l||{},p=(0,r.useCallback)(e=>{t(e)},[]);return(0,n.jsxs)(b,{children:[n.jsx("img",{className:"book-item-image",src:o}),(0,n.jsxs)("div",{className:"book-details-container",children:[n.jsx("label",{className:"book-journey-title",children:i}),n.jsx("label",{className:"book-journey-subtitle",children:a}),n.jsx("div",{className:"book-journey-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),p(c)},children:n.jsx("label",{className:"book-journey-button-text",children:s})})]})]})}let h=a.ZP.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-position: right center;
    align-items: center; /* Vertically center items */
    justify-content: center; /* Horizontally center items */

    .book-item-image {
        height: fit-content;
        width: 130px;
        margin-top: -10px;
        align-self: center;
    }

    .book-journey-title {
        font-size: 19px;
        font-family: 'primary font', sans-serif;
        margin: 0px 67px 0px 67px;
        text-align: center;
        color: var(--brand-primary-white-color);
    }
    .book-journey-subtitle {
        font-size: 9px;
        font-family: 'Gayathri font', sans-serif;
        margin: 5px 67px 8px 67px;
        color: var(--brand-primary-white-color);
    }

    .book-journey-button-container {
        display: flex;
        height: 26px;
        width: 133px;
        border-radius: 13.4px;
        background-color: var(--brand-yellow-color);

        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 8px;
        margin-top: 9px;
        margin-bottom: 9px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

`;function BookJourneyEvenComponent({journey:e={},learnMoreClick:t=d()}){let{bookImageUrl:o="",title:i="",description:a="",cta:l={}}=e||{},{text:s="",link:c=""}=l||{},p=(0,r.useCallback)(e=>{t(e)},[]);return(0,n.jsxs)(h,{children:[n.jsx("img",{src:o,className:"book-item-image"}),n.jsx("label",{className:"book-journey-title",children:i}),n.jsx("label",{className:"book-journey-subtitle",children:a}),n.jsx("div",{className:"book-journey-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),p(c)},children:n.jsx("label",{className:"book-journey-button-text",children:s})})]})}let f=a.ZP.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-image: url('/images/character_bg.png');
    background-position: left center;
    align-items: center; /* Vertically center items */
    justify-content: center; /* Horizontally center items */

    .book-item-image {
        height: fit-content;
        width: 130px;
        margin-top: -10px;
        align-self: center;
    }

    .book-journey-title {
        font-size: 19px;
        font-family: 'primary font', sans-serif;
        margin: 0px 67px 0px 67px;
        text-align: center;
        color: var(--brand-primary-white-color);
    }
    .book-journey-subtitle {
        font-size: 9px;
        font-family: 'Gayathri font', sans-serif;
        margin: 5px 67px 8px 67px;
        color: var(--brand-primary-white-color);
    }

    .book-journey-button-container {
        display: flex;
        height: 26px;
        width: 133px;
        border-radius: 13.4px;
        background-color: var(--brand-yellow-color);

        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    .book-journey-button-text {
        font-size: 8px;
        margin-top: 9px;
        margin-bottom: 9px;
        cursor: pointer;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }

`;function BookJourneyOddComponent({journey:e={},learnMoreClick:t=d()}){let{bookImageUrl:o="",title:i="",description:a="",cta:l={}}=e||{},{text:s="",link:c=""}=l||{},p=(0,r.useCallback)(e=>{t(e)},[]);return(0,n.jsxs)(f,{children:[n.jsx("img",{src:o,className:"book-item-image"}),n.jsx("label",{className:"book-journey-title",children:i}),n.jsx("label",{className:"book-journey-subtitle",children:a}),n.jsx("div",{className:"book-journey-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),p(c)},children:n.jsx("label",{className:"book-journey-button-text",children:s})})]})}function BookJourney({bookJourney:e=[],learnMoreClick:t=d()}){let o=(0,p.k)();return n.jsx(x,{children:o?n.jsx("div",{className:"bgContainer",children:e.map((e,o)=>{if(!e)return null;let r=o%2==0;return n.jsx("div",{children:r?n.jsx(BookJourneyEvenComponent,{journey:e,learnMoreClick:t}):n.jsx(BookJourneyOddComponent,{journey:e,learnMoreClick:t})},o)})}):n.jsx("div",{className:"bgContainer",children:e.map((e,o)=>{if(!e)return null;let r=o%2==0;return n.jsx("div",{children:r?n.jsx(BookJourneyEvenItem,{journey:e,learnMoreClick:t}):n.jsx(BookJourneyOddItem,{journey:e,learnMoreClick:t})},o)})})})}let k={result:{bannerData:[{bookImage:"/images/book_image.jpg",cta:{text:"Explore the book",link:"/bookdetails?bookName=${encodeURIComponent('Karma Sagas The Sangam: 1')}"}}],aboutBook:{logoImage:"logoUrlor add it to static",cta:{text:"Learn More",link:"/shop"}},bookJourney:[{bookImageUrl:"/images/joash_pundit.jpeg",title:"Joash Pundit",description:"Joash Pundit - a science journalist. Torn between the past and future, science and mysticism, will he find the answers?",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/Krupa.png",title:"Krupa",description:"Krupa, a feisty yogini, lives in a monastery (the Ashram) in the Himalayas.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/Swamiji.png",title:"Swamiji",description:" Swamiji is Krupa's spiritual teacher and the head of the Ashram.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/tejas.png",title:"Tejas",description:"Tejas is the yogini who knows fire, she lives deep in the jungles.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/Callum_Bailey.png",title:"Callum",description:"Callum is a bright teenager from Glasgow, with a sunshine smile, he spreads happiness wherever he goes.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/Jaggu_baba.webp",title:"Jaggu Baba",description:"Jaggu Baba is an enigma, no one can understand what he really wants.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/book_bg_odd.png",title:"London reeling",description:"London reeling with relentless rains, this is where the story starts.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"},{bookImageUrl:"/images/book_bg_even.webp",title:"The Himalayas",description:"The Himalayas near Jispa.",cta:{text:"View Series",link:"/shop"},backgroundImageUrl:"somebackgroundImageURL"}]}},y=a.ZP.div`
    display: flex;
    flex-direction: column;
  `;function HomeLandingPage(e){let{learnMoreClick:t=d(),exploreBookClick:o=d()}=e.actions||{},{bannerData:r=[],aboutBook:i={},bookJourney:a=[]}=k.result;return(0,n.jsxs)(y,{children:[n.jsx(BannerContent,{exploreBookClick:o,bannerData:r}),n.jsx(AboutBook,{learnMoreClick:t,aboutBook:i}),n.jsx(BookJourney,{bookJourney:a,learnMoreClick:t})]})}let j=a.ZP.div`

    display: flex;
    flex-direction: column;

`;var C=o(7114),v=o(2142);function Home(){let e=(0,C.useRouter)(),t=(0,r.useCallback)(t=>{e.push(t)},[]),o=(0,r.useCallback)(t=>{e.push(t)},[]),i=(0,r.useMemo)(()=>({learnMoreClick:t,exploreBookClick:o}),[t,o]);return(0,n.jsxs)(n.Fragment,{children:[n.jsx(j,{children:n.jsx(HomeLandingPage,{actions:i})}),n.jsx(v.Z,{})]})}},6768:(e,t,o)=>{"use strict";o.r(t),o.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>s});var n=o(7536);let r=(0,n.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/page.tsx`),{__esModule:i,$$typeof:a}=r,l=r.default,s=l}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),o=t.X(0,[879,104,405,529,168,763],()=>__webpack_exec__(7796));module.exports=o})();