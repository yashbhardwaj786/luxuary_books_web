(()=>{var e={};e.id=967,e.ids=[967],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9972:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>g,tree:()=>d});var r=a(3137),i=a(4647),s=a(4183),n=a.n(s),o=a(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let p=r.AppPageRouteModule,d=["",{children:["bookdetails",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7178)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/bookdetails/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/bookdetails/page.tsx"],m="/bookdetails/page",x={require:a,loadChunk:()=>Promise.resolve()},g=new p({definition:{kind:i.x.APP_PAGE,page:"/bookdetails/page",pathname:"/bookdetails",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7729:(e,t,a)=>{Promise.resolve().then(a.bind(a,574))},574:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>page});var r=a(80),i=a(9885),s=a.n(i);a(61);var n=a(9817);let o=n.ZP.div`
display: flex;
flex-direction: column;
`,l=n.ZP.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding-bottom: 6px;
    padding-top: 10px;

    .bg-circle-container{
        display: flex;
        margin: 0px 8px 30px 0px;
        height: auto;
        width: 100vw;
        justify-content: center;
    }
    

    .bg-author-image{
        height: 237px;
        width: 209px;
    }

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        margin-bottom: 8px;
    }

    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        text-align: left;
        margin: 0px 65px 0px 65px;
    }

    @media (min-width: 768px) {
        padding-bottom: 16px;
        padding-top: 20px;
        .bg-circle-container{
            display: flex;
            margin: 0px 0px 26px 0px;
        }
        .bg-author-image{
            height: 430px; 
            width: 380px;

        }

        .title-text {
            font-size: 25px;
            margin-bottom: 8px;
        }

        .description-text {
            font-size: 16px;
            line-height: 19.53px;
            text-align: left;
            margin: 8px 242px 8px 242px;
        }

    }
`;var p=a(1605);function AuthorImage({imageUrl:e="",title:t="",description:a=""}){return(0,p.k)(),(0,r.jsxs)(l,{children:[r.jsx("div",{className:"bg-circle-container",children:r.jsx("img",{src:e,className:"bg-author-image"})}),r.jsx("label",{className:"title-text",children:t}),a.split("\n").map((e,t)=>r.jsx(s().Fragment,{children:r.jsx("label",{className:"description-text",children:e})},t))]})}let d=n.ZP.div`
    display: flex;
    flex-direction: column; 
    padding: 30px;    
    background-color: var(--brand-navbar-background-color);

    .title-text {
        margin: 0px 0px 30px 0px;
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-primary-white-color);
        text-align: center;
    }

    .glossary-list-conainer {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        padding: 30px;

        .title-text {
            margin: 0px 0px 50px 0px;
            font-size: 25px;
        }
    }
`,c=n.ZP.div`
    display: flex;
    flex-direction: column;
    margin: 0px 30px 12px 30px;
    
    .term-text {
      font-size: 10px;
      flex: 1;
      font-family: 'Gayathri font bold' sans-serif;
      color: var(--brand-primary-white-color);
    }
    
    .header {
      padding: 8px;
      display: flex;
      flex-direction: row;
      cursor: pointer;
    }
    .meaning-container {
      display: flex;
      flex-direction: column;
    }
    .meaning-text {
      font-size: 8px;
      padding: 8px;
      line-height: 20px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--brand-primary-white-color);
    }
    .seprator {
      margin-top: 10px;
      background-color: var(--brand-primary-white-color);
    }
    

  @media (min-width: 768px) {
    margin: 0px 90px 30px 90px;

    .term-text {
      font-size: 20px;
    }
  
    .header {
      padding: 10px;
    }

    .arrow {
      transition: transform 0.3s ease;
    }
  
    .meaning-text {
      font-size: 16px;
      padding: 10px;
    }
    .seprator {
      margin-top: 10px;
      line-height: 24px;
    }

  }
  
`,glossaryitem_DownArrow=function({isMobile:e=!1}){return r.jsx(r.Fragment,{children:r.jsx("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.00003 8C7.81403 8 7.62785 7.93483 7.48585 7.80467L0.213136 1.13804C-0.0710453 0.877537 -0.0710453 0.455706 0.213136 0.195374C0.497317 -0.064958 0.957498 -0.0651247 1.2415 0.195374L8.00003 6.39068L14.7586 0.195374C15.0428 -0.0651247 15.5029 -0.0651247 15.7869 0.195374C16.0709 0.455873 16.0711 0.877703 15.7869 1.13804L8.51422 7.80467C8.37222 7.93483 8.18603 8 8.00003 8Z",fill:"white"})})})},glossaryitem_UpArrow=function({isMobile:e=!1}){return r.jsx(r.Fragment,{children:r.jsx("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.00003 8C7.81403 8 7.62785 7.93483 7.48585 7.80467L0.213136 1.13804C-0.0710453 0.877537 -0.0710453 0.455706 0.213136 0.195374C0.497317 -0.064958 0.957498 -0.0651247 1.2415 0.195374L8.00003 6.39068L14.7586 0.195374C15.0428 -0.0651247 15.5029 -0.0651247 15.7869 0.195374C16.0709 0.455873 16.0711 0.877703 15.7869 1.13804L8.51422 7.80467C8.37222 7.93483 8.18603 8 8.00003 8Z",fill:"white"})})})};function GlossaryItem({word:e={}}){let{term:t="",meaning:a=""}=e||{},[s,n]=(0,i.useState)(!1);return(0,r.jsxs)(c,{children:[(0,r.jsxs)("div",{className:"header",onClick:()=>{n(!s)},children:[r.jsx("label",{className:"term-text",children:t}),r.jsx("span",{className:"arrow",children:s?r.jsx(glossaryitem_UpArrow,{}):r.jsx(glossaryitem_DownArrow,{})})]}),s&&r.jsx("div",{className:"meaning-container",children:r.jsx("label",{className:"meaning-text",children:a})}),r.jsx("hr",{className:"seprator"})]})}var m=a(7114);function AboutGlossaryTermsBook({glossary:e=[]}){let{title:t="",words:a=[]}=e,s=(0,m.useRouter)();return(0,i.useEffect)(()=>{if(s.asPath!==s.route){let e=s.asPath.substring(s.asPath.indexOf("#")+1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},[s.asPath]),(0,r.jsxs)(d,{id:"grossaryoftermssection",children:[r.jsx("label",{className:"title-text",children:t}),r.jsx("div",{className:"glossary-list-conainer",children:a.map((e,t)=>e?r.jsx(GlossaryItem,{word:e},t):null)})]})}let x={errorCode:200,success:!0,message:"",result:{title:"Karma Sagas - The Sangam: 1",imageUrl:"/images/book_img.jpeg",description:"In a dystopian future, the world is reeling from the effects of climate change. This period is also the harbinger of the Sangam – a cosmic convergence of realms. \nAs a monastery in a Himalayan village braces itself for an impending storm Krupa, a disciple of Sheersha yogis, finds out that hidden within an age-old manuscript lies the key to harmonising nature’s delicate balance. A quest to find it would be fraught with challenges and dangers. \nKrupa calls upon her brother Joash to help find the book. Living in a world of talking robots and flying cars, he is now a man of science. What would it take for Joash to leave London and embark on a treacherous journey back to the Himalayas? \nCan Joash harness the forgotten power of Sheersha yoga, face his karmic debts and stand against an unexpected malevolence threatening the world?",glossary:{title:"Glossary of Terms Used in Book",words:[{term:"Sangam",meaning:`It means 'meeting' or 'crossing' or 'point of crossing'. As a child, on a trip
					to the Himalayas, I remember learning about a place where two rivers were crossing.
					That spot was called the ‘Sangam of…’ In the book, it signifies the crossing of
					different realms.`},{term:"Tirtha",meaning:`A sacred or holy place, typically a place where believers would go for
					pilgrimage.`},{term:"Rakshak",meaning:"Protector or guardian."},{term:"Parvat",meaning:"Mountain."},{term:"Ashram",meaning:"A monastery."},{term:"Prakruti",meaning:"Nature."},{term:"Saram",meaning:"A summary or gist of something."},{term:"Sheersha",meaning:"It is highest or supreme."},{term:"Maha",meaning:"Great."},{term:"Moksha",meaning:"It is nirvana or enlightenment."},{term:"Roga",meaning:"Disease."}]}}};function BookDetailsLandingPage(){let{title:e="",imageUrl:t="",description:a="",glossary:i={}}=x.result;return(0,r.jsxs)(o,{children:[r.jsx(AuthorImage,{imageUrl:t,title:e,description:a}),r.jsx(AboutGlossaryTermsBook,{glossary:i})]})}var g=a(2142);let page=()=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(BookDetailsLandingPage,{}),r.jsx(g.Z,{})]})},7178:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>l});var r=a(7536);let i=(0,r.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/bookdetails/page.tsx`),{__esModule:s,$$typeof:n}=i,o=i.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[879,104,529,97],()=>__webpack_exec__(9972));module.exports=a})();