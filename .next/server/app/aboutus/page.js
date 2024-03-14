(()=>{var e={};e.id=327,e.ids=[327],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},1553:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>g,tree:()=>c});var r=i(3137),a=i(4647),n=i(4183),o=i.n(n),s=i(1775),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);i.d(t,l);let d=r.AppPageRouteModule,c=["",{children:["aboutus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,8852)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"],u="/aboutus/page",x={require:i,loadChunk:()=>Promise.resolve()},g=new d({definition:{kind:a.x.APP_PAGE,page:"/aboutus/page",pathname:"/aboutus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6586:(e,t,i)=>{Promise.resolve().then(i.bind(i,2761))},2761:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>page});var r=i(80),a=i(9885),n=i.n(a);i(61);var o=i(9817);let s=o.ZP.div`
display: flex;
flex-direction: column;
background-color: var(--brand-contactus-bg-color);
`,l=o.ZP.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding-bottom: 6px;

    .image-outer-container {
        display: flex;
        margin: 30px 0px 30px 0px;
    }
    .bg-circle-container{
        display: flex;
        margin: 30px 8px 30px 8px;
    }
    

    .bg-author-image{
        z-index: 99;
        position: absolute;
        height: 237px;
        width: 209px;
        margin-top: -50px;
        margin-left: -6px;
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
        
        .image-outer-container {
            display: flex;
            margin: 50px 0px 26px 0px;
        }
        .bg-circle-container{
            display: flex;
            margin: 60px 15px 26px 15px;
        }
        .bg-author-image{
            z-index: 99;
            position: absolute;
            height: fit-content; 
            width: 380px;
            margin-top: -160px;
            align-self: center;
            margin-left: -10px;
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
`,AboutAuthor_ImageCircle=function({ismobile:e=!1}){return r.jsx(r.Fragment,{children:e?r.jsx("svg",{width:"193",height:"192",viewBox:"0 0 193 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("circle",{cx:"96.8293",cy:"96.0976",r:"95.9023",fill:"#FBEA55"})}):r.jsx("svg",{width:"348",height:"348",viewBox:"0 0 348 348",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("circle",{cx:"174",cy:"174",r:"174",fill:"#FBEA55"})})})};var d=i(1605);function AuthorImage({imageUrl:e="",title:t="",description:i=""}){let a=(0,d.k)();return(0,r.jsxs)(l,{children:[(0,r.jsxs)("div",{className:"bg-circle-container",children:[r.jsx("img",{src:"/images/author_img.png",className:"bg-author-image"}),r.jsx(AboutAuthor_ImageCircle,{ismobile:a})]}),r.jsx("label",{className:"title-text",children:t}),i.split("\n").map((e,t)=>r.jsx(n().Fragment,{children:r.jsx("label",{className:"description-text",children:e})},t))]})}let c=o.ZP.div`
    display: flex;
    flex-direction: column;
    margin: 20px 30px 30px 30px;

    @media (min-width: 768px) {
        margin: 105px 90px 50px 90px;
    }
`,p=o.ZP.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    
    .top-stroke,.bottom-stroke {
        height: 0.41px; 
        background-color: var(--brand-navbar-background-color); 
    }

    .item-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        padding: 7px 8px;
        cursor: pointer;
    }

    .content{
        font-size: 10px;
        flex: 1;
        font-family: 'Gayathri font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        cursor: pointer;
    }

    @media (min-width: 768px) {
        
        margin-bottom: 16px;

        .top-stroke,.bottom-stroke {
            height: 1px; 
        }

        .item-container{
            padding: 16px 20px 16px 20px;
        }
        .content{
            
            font-size: 20px;
        }
    }

`,usefulllinks_Arrow=function({ismobile:e=!1}){return r.jsx(r.Fragment,{children:e?r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.39768 6.5884C7.39769 6.5873 7.39768 6.5862 7.39768 6.5851L7.39992 3.17754C7.39984 3.15056 7.39685 3.12366 7.391 3.09731L7.36871 3.02154L7.34643 2.97697L7.32191 2.95245C7.29125 2.90798 7.25273 2.86946 7.20825 2.83879L7.18597 2.81651L7.15923 2.78976L7.10128 2.77193C7.0687 2.76229 7.03496 2.75703 7.00099 2.75632L3.5756 2.76302C3.34759 2.76211 3.16199 2.94622 3.16108 3.17424C3.16107 3.17534 3.16108 3.17644 3.16108 3.17754C3.16638 3.40301 3.3479 3.58453 3.57338 3.58984L5.60811 3.59207C5.69513 3.59292 5.76499 3.66417 5.76413 3.7512C5.76373 3.79169 5.74777 3.83047 5.71953 3.8595L2.40112 7.17791C2.23986 7.33915 2.23984 7.60056 2.40108 7.76182C2.56231 7.92307 2.82372 7.92308 2.98498 7.76186L2.98502 7.76182L6.30344 4.44341C6.36583 4.38274 6.46561 4.38413 6.52627 4.44653C6.55449 4.47556 6.57047 4.51434 6.57087 4.55483L6.56865 6.58511C6.57281 6.81229 6.75599 6.99546 6.98317 6.99963C7.21119 7.00054 7.39678 6.81643 7.39768 6.5884Z",fill:"#222124"})}):r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M17.0421 13.9592C17.0422 13.9566 17.0421 13.9539 17.0421 13.9512L17.0476 5.64932C17.0474 5.58358 17.0401 5.51804 17.0259 5.45386L16.9716 5.26926L16.9173 5.16066L16.8575 5.10092C16.7828 4.99258 16.689 4.89874 16.5806 4.82401L16.5263 4.76972L16.4612 4.70457L16.32 4.66112C16.2406 4.63763 16.1584 4.62483 16.0757 4.6231L7.73036 4.63941C7.17484 4.6372 6.72267 5.08575 6.72045 5.64128C6.72043 5.64395 6.72045 5.64662 6.72045 5.64932C6.73336 6.19864 7.1756 6.64088 7.72494 6.65381L12.6822 6.65923C12.8942 6.66132 13.0644 6.8349 13.0623 7.04693C13.0613 7.14558 13.0224 7.24006 12.9536 7.31079L4.86894 15.3955C4.47608 15.7883 4.47603 16.4252 4.86884 16.8181C5.26166 17.2109 5.89853 17.211 6.29142 16.8182L14.3762 8.73336C14.5282 8.58557 14.7713 8.58895 14.9191 8.74097C14.9879 8.8117 15.0268 8.90618 15.0278 9.00483L15.0224 13.9512C15.0325 14.5047 15.4788 14.951 16.0323 14.9611C16.5878 14.9633 17.04 14.5148 17.0421 13.9592Z",fill:"#222124"})})})};var u=i(7114);function UsefulLinkItem({isMobile:e=!1,usefulLink:t={}}){let i=(0,u.useRouter)(),{title:n="",link:o=""}=t||{},s=(0,a.useCallback)(e=>{i.push(e)},[]);return(0,r.jsxs)(p,{children:[r.jsx("div",{className:"top-stroke"}),(0,r.jsxs)("div",{className:"item-container",onClick:()=>s(o),children:[r.jsx("label",{className:"content",children:n}),r.jsx(usefulllinks_Arrow,{isMobile:e})]}),r.jsx("div",{className:"bottom-stroke"})]})}function UseFulLinkPage({isMobile:e=!1,usefulLinks:t=[]}){return r.jsx(c,{children:r.jsx("div",{children:t.map((t,i)=>t?r.jsx(UsefulLinkItem,{isMobile:e,usefulLink:t},i):null)})})}let x=o.ZP.div`
    display: flex;
    flex-direction: column;
    background-color: var(--brand-navbar-background-color);
    padding: 23px 31px;
    margin-bottom: 30px;

    .description{
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-navbar-background-color);
        text-align: center;
        line-height: auto;
        color: var(--brand-primary-white-color);
    }

    .button-container {
      display: flex;
      background: var(--brand-yellow-color);
      border-radius: 9.75px;
      padding: 7px 25px;
      margin-top: 10px;
      cursor: pointer;
      width: fit-content;
      align-self: center;
    }

    .button-text {
      color: var(--brand-navbar-background-color);
      font-size: 6.37px;
      width: 100%;
      cursor: pointer;
      font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px 90px;
        margin-bottom: 50px;

        .description{
            font-size: 16px;
            line-height: auto;
        }

        .button-container {
            border-radius: 24.5px;
            padding: 18px 64px;
            margin-top: 20px;
        }

        .button-text {
            font-size: 16px;
            line-height: auto;
        }
    }
`;function OtherInfo({otherInfo:e={}}){let{description:t="",cta:i={}}=e||{},{text:a="",link:n=""}=i||{};return(0,r.jsxs)(x,{children:[r.jsx("label",{className:"description",children:t}),r.jsx("div",{className:"button-container",children:r.jsx("label",{className:"button-text",children:a})})]})}let g=o.ZP.div`
    display: flex;
    flex-direction: column;
    /* background-image:  url('/images/outline_bg_mobile.svg'); */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    background-color: rgba(179, 179, 179, 1);
    padding: 20px;
    justify-items: center;
    align-items: center; /* Center vertically */
    min-height: 200px;
    ::selection {
        background-color: rgba(179, 179, 179, 1);
    }

    .title-text {
        color: var(--brand-navbar-background-color);
        font-size: 8px;
        font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px;
        /* background-image:  url('/images/Outline_Bg.svg'); */
        min-height: 400px;
        
        .title-text {
            font-size: 25px;
        }
    }
`,m=o.ZP.div`
    display: flex;
    flex-direction: column;
    /* background-image:  url('/images/Rectangle.svg');
    background-size: cover;
    background-repeat: no-repeat; */
    min-height: 140px;
    margin: 10px 96px 0px 96px;
    border-radius: 10px;
    background-color: rgba(255, 251, 251, 1);

    @media (min-width: 768px) {
        min-height: 242px;
        min-width: 727px;
        /* background-image:  url('/images/Rectangle.svg'); */
        background-size: cover;
        background-repeat: no-repeat;
        margin: 28px 177px 0px 177px;
        border-radius: 20px;
    }
`;var h=i(860);function TestimonialsPage({testimonials:e={}}){let{title:t="",reviews:i=[]}=e||{};return(0,r.jsxs)(g,{children:[r.jsx("div",{className:"blur-background"}),r.jsx("label",{className:"title-text ",children:t}),r.jsx(h.ZP,{slidesToShow:1,slidesToScroll:1,hideBlur:!0,children:i.map((e,t)=>{if(!i)return null;let{name:a="",occupation:n="",reviewerImage:o="",description:s="",rating:l=""}=i;return r.jsx(m,{},t)})})]})}let b={result:{title:"About Author",imageUrl:"autherImageUrl",description:"Kshamta is an author, poetess, dentist, teacher, mum, cook and a Tolkien fan. Karma Sagas - The Sangam is her first book and she intends to write at least a few more. Her interest in consciousness, sustainability and climate change has led her to explore science, spirituality and philosophy. It was all getting a bit too serious so she thought why not bring it all together into an entertaining story? \nWhen she is not busy figuring out treatment plans or lost in a fantasy land, she loves talking to her son about all things science. Born not too far from the Thar desert in North India, she now calls North Yorkshire her home. She blames the serene and picturesque surroundings to make her want to write – a desire that had been peacefully sleeping since she was fourteen. But before that, she would make up stories and songs and even recite her poetry unabashedly at every opportunity.",usefulLinks:[{title:"Contact Information",link:"/contactus"},{title:"Frequently Asked Questions",link:"/contactus#faqsection"},{title:"Glossary of terms",link:"/bookdetails#glossaryofterms"}],otherInfo:{description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",cta:{text:"Learn More",link:"someurltonavigatetheuser"}},testimonials:{title:"testmonial",reviews:[{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"},{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"},{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"}]}}};function AboutUsLandingPage(){let{title:e="",imageUrl:t="",description:i="",usefulLinks:a=[],otherInfo:n={},testimonials:o={}}=b.result,l=(0,d.k)();return(0,r.jsxs)(s,{children:[r.jsx(AuthorImage,{imageUrl:t,title:e,description:i}),r.jsx(UseFulLinkPage,{isMobile:l,usefulLinks:a}),r.jsx(OtherInfo,{otherInfo:n}),r.jsx(TestimonialsPage,{testimonials:o,isMobile:l})]})}var f=i(8707);let page=()=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(AboutUsLandingPage,{}),r.jsx(f.default,{})]})},8852:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var r=i(7536);let a=(0,r.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx`),{__esModule:n,$$typeof:o}=a,s=a.default,l=s}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[795,104,723,30,232,917],()=>__webpack_exec__(1553));module.exports=i})();