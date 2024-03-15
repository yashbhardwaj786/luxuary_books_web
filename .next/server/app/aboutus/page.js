(()=>{var e={};e.id=327,e.ids=[327],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},1553:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>p,routeModule:()=>m,tree:()=>d});var a=i(3137),r=i(4647),n=i(4183),s=i.n(n),o=i(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(t,l);let c=a.AppPageRouteModule,d=["",{children:["aboutus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,8852)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"],x="/aboutus/page",u={require:i,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:r.x.APP_PAGE,page:"/aboutus/page",pathname:"/aboutus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6586:(e,t,i)=>{Promise.resolve().then(i.bind(i,4049))},4049:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>page});var a=i(80),r=i(9885),n=i.n(r);i(61);var s=i(9817);let o=s.ZP.div`
display: flex;
flex-direction: column;
background-color: var(--brand-contactus-bg-color);
`,l=s.ZP.div`
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
`,AboutAuthor_ImageCircle=function({ismobile:e=!1}){return a.jsx(a.Fragment,{children:e?a.jsx("svg",{width:"193",height:"192",viewBox:"0 0 193 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"96.8293",cy:"96.0976",r:"95.9023",fill:"#FBEA55"})}):a.jsx("svg",{width:"348",height:"348",viewBox:"0 0 348 348",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"174",cy:"174",r:"174",fill:"#FBEA55"})})})};var c=i(1605);function AuthorImage({imageUrl:e="",title:t="",description:i=""}){let r=(0,c.k)();return(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"bg-circle-container",children:[a.jsx("img",{src:"/images/author_img.png",className:"bg-author-image"}),a.jsx(AboutAuthor_ImageCircle,{ismobile:r})]}),a.jsx("label",{className:"title-text",children:t}),i.split("\n").map((e,t)=>a.jsx(n().Fragment,{children:a.jsx("label",{className:"description-text",children:e})},t))]})}let d=s.ZP.div`
    display: flex;
    flex-direction: column;
    margin: 20px 30px 30px 30px;

    @media (min-width: 768px) {
        margin: 105px 90px 50px 90px;
    }
`,p=s.ZP.div`
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

`,usefulllinks_Arrow=function({ismobile:e=!1}){return a.jsx(a.Fragment,{children:e?a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M7.39768 6.5884C7.39769 6.5873 7.39768 6.5862 7.39768 6.5851L7.39992 3.17754C7.39984 3.15056 7.39685 3.12366 7.391 3.09731L7.36871 3.02154L7.34643 2.97697L7.32191 2.95245C7.29125 2.90798 7.25273 2.86946 7.20825 2.83879L7.18597 2.81651L7.15923 2.78976L7.10128 2.77193C7.0687 2.76229 7.03496 2.75703 7.00099 2.75632L3.5756 2.76302C3.34759 2.76211 3.16199 2.94622 3.16108 3.17424C3.16107 3.17534 3.16108 3.17644 3.16108 3.17754C3.16638 3.40301 3.3479 3.58453 3.57338 3.58984L5.60811 3.59207C5.69513 3.59292 5.76499 3.66417 5.76413 3.7512C5.76373 3.79169 5.74777 3.83047 5.71953 3.8595L2.40112 7.17791C2.23986 7.33915 2.23984 7.60056 2.40108 7.76182C2.56231 7.92307 2.82372 7.92308 2.98498 7.76186L2.98502 7.76182L6.30344 4.44341C6.36583 4.38274 6.46561 4.38413 6.52627 4.44653C6.55449 4.47556 6.57047 4.51434 6.57087 4.55483L6.56865 6.58511C6.57281 6.81229 6.75599 6.99546 6.98317 6.99963C7.21119 7.00054 7.39678 6.81643 7.39768 6.5884Z",fill:"#222124"})}):a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M17.0421 13.9592C17.0422 13.9566 17.0421 13.9539 17.0421 13.9512L17.0476 5.64932C17.0474 5.58358 17.0401 5.51804 17.0259 5.45386L16.9716 5.26926L16.9173 5.16066L16.8575 5.10092C16.7828 4.99258 16.689 4.89874 16.5806 4.82401L16.5263 4.76972L16.4612 4.70457L16.32 4.66112C16.2406 4.63763 16.1584 4.62483 16.0757 4.6231L7.73036 4.63941C7.17484 4.6372 6.72267 5.08575 6.72045 5.64128C6.72043 5.64395 6.72045 5.64662 6.72045 5.64932C6.73336 6.19864 7.1756 6.64088 7.72494 6.65381L12.6822 6.65923C12.8942 6.66132 13.0644 6.8349 13.0623 7.04693C13.0613 7.14558 13.0224 7.24006 12.9536 7.31079L4.86894 15.3955C4.47608 15.7883 4.47603 16.4252 4.86884 16.8181C5.26166 17.2109 5.89853 17.211 6.29142 16.8182L14.3762 8.73336C14.5282 8.58557 14.7713 8.58895 14.9191 8.74097C14.9879 8.8117 15.0268 8.90618 15.0278 9.00483L15.0224 13.9512C15.0325 14.5047 15.4788 14.951 16.0323 14.9611C16.5878 14.9633 17.04 14.5148 17.0421 13.9592Z",fill:"#222124"})})})};var x=i(7114);function UsefulLinkItem({isMobile:e=!1,usefulLink:t={}}){let i=(0,x.useRouter)(),{title:n="",link:s=""}=t||{},o=(0,r.useCallback)(e=>{i.push(e)},[]);return(0,a.jsxs)(p,{children:[a.jsx("div",{className:"top-stroke"}),(0,a.jsxs)("div",{className:"item-container",onClick:()=>o(s),children:[a.jsx("label",{className:"content",children:n}),a.jsx(usefulllinks_Arrow,{isMobile:e})]}),a.jsx("div",{className:"bottom-stroke"})]})}function UseFulLinkPage({isMobile:e=!1,usefulLinks:t=[]}){return a.jsx(d,{children:a.jsx("div",{children:t.map((t,i)=>t?a.jsx(UsefulLinkItem,{isMobile:e,usefulLink:t},i):null)})})}let u=s.ZP.div`
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
`;function OtherInfo({otherInfo:e={}}){let{description:t="",cta:i={}}=e||{},{text:r="",link:n=""}=i||{};return(0,a.jsxs)(u,{children:[a.jsx("label",{className:"description",children:t}),a.jsx("div",{className:"button-container",children:a.jsx("label",{className:"button-text",children:r})})]})}let m=s.ZP.div`
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
`,g=s.ZP.div`
     width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    object-fit: contain;


    .inner-cover-area{
        display: flex;
        flex-direction: column;
        background-image:  url('/images/Rectangle.svg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 238px;
        margin: 10px 96px 0px 96px;
        border-radius: 10px;
        align-items: center;
    }

    .review-title {
      color: var(--black-color);
      font-size: 8px;
      font-family: 'Gayathri font', sans-serif;
      text-align: center;
      z-index: 1;
      margin-top: 5px;
      margin-left: -3px;

    }

    .quote-image {
        margin-top: -65px;
        margin-right: -14px;
    }

    .text-container {
        display: flex;
        flex-direction: row;
        margin: 10px 13px;
    }

    .user-info-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

    }

    .user-image{
        height: 20px;
        width: 20px;
    }

    .about-user{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 4px;
    }

    .user-name {
      color: var(--book-title-color);
      font-size: 8px;
      font-family: 'primary font light2', sans-serif;
      
    }

    .user-occupation {
      color: var(--book-title-color);
      font-size: 3px;
      font-family: 'primary font light2', sans-serif;
      margin-top: 2px;
    }


    

    @media (min-width: 768px) {
        padding: 50px; 
        
        .inner-cover-area{
            width: 727px;
            background-image:  url('/images/Rectangle.svg');
            margin: 13px 162px 0px 177px;
            border-radius: 20px;
            padding: 30px;
        }

        .review-title {
            font-size: 16px;
            margin-left: 2px;
            margin-top: 5px;
        }

        .text-container {
            display: flex;
            flex-direction: row;
            margin: 20px 47px;
        }
        .quote-image {
            margin-top: -105px;
            margin-right: -22px;
        }
        .user-info-container {
            margin-bottom: 30px;

        }
        .user-image{
            height: 50px;
            width: 50px;
        }
        .about-user{
            margin-top: 8px;
            margin-left: 10px;
        }
        .user-name {
            font-size: 16px;
        }

        .user-occupation {
            font-size: 8px;
            
        }
        
    }
`;var h=i(860);let Star=({filled:e,isMobile:t})=>a.jsx(a.Fragment,{children:t?a.jsx("img",{src:e?"./images/FilledStarMobile.svg":"./images/EmptyStarMobile.svg",alt:e?"Filled Star":"Empty Star",style:{display:"inline-block"}}):a.jsx("img",{src:e?"./images/FilledStar.svg":"./images/EmptyStar.svg",alt:e?"Filled Star":"Empty Star",style:{display:"inline-block"}})}),StarRating=({rating:e,isMobile:t})=>{let i=Math.floor(e),r=e-i>=.5,n=[];for(let e=0;e<i;e++)n.push(a.jsx(Star,{filled:!0,isMobile:t},e));r&&n.push(a.jsx(Star,{filled:!1,isMobile:t},i));let s=5-i-(r?1:0);for(let e=0;e<s;e++)n.push(a.jsx(Star,{filled:!1,isMobile:t},i+(r?1:0)+e));return a.jsx("div",{children:n})},testimonials_StarRating=({isMobile:e=!1})=>a.jsx("div",{children:a.jsx(StarRating,{rating:4.5,isMobile:e})});var f=i(3011);function TestimonialsPage({testimonials:e={},isMobile:t=!1}){let{title:i="",reviews:r=[]}=e||{};return(0,a.jsxs)(m,{children:[a.jsx("div",{className:"blur-background"}),a.jsx("label",{className:"title-text ",children:i}),t?a.jsx(f.Z,{scrollWidth:1,scrollDuration:100,children:r.map((e,i)=>{if(!e)return null;let{name:r="",occupation:n="",reviewerImage:s="",description:o="",rating:l=""}=e;return a.jsx(g,{children:(0,a.jsxs)("div",{className:"inner-cover-area",children:[a.jsx(testimonials_StarRating,{isMobile:t}),(0,a.jsxs)("div",{className:"text-container",children:[a.jsx("img",{src:"./images/shape_quotes_mobile.svg",className:"quote-image"}),a.jsx("label",{className:"review-title",children:o})]}),(0,a.jsxs)("div",{className:"user-info-container",children:[a.jsx("img",{src:"./images/userImage.png",className:"user-image"}),(0,a.jsxs)("div",{className:"about-user",children:[a.jsx("label",{className:"user-name",children:r}),a.jsx("label",{className:"user-occupation",children:n})]})]})]})},i)})}):a.jsx(h.ZP,{slidesToShow:1,slidesToScroll:1,hideBlur:!0,children:r.map((e,i)=>{if(!e)return null;let{name:r="",occupation:n="",reviewerImage:s="",description:o="",rating:l=""}=e;return a.jsx(g,{children:(0,a.jsxs)("div",{className:"inner-cover-area",children:[a.jsx(testimonials_StarRating,{isMobile:t}),(0,a.jsxs)("div",{className:"text-container",children:[a.jsx("img",{src:"./images/shape_quotes.svg",className:"quote-image"}),a.jsx("label",{className:"review-title",children:o})]}),(0,a.jsxs)("div",{className:"user-info-container",children:[a.jsx("img",{src:"./images/userImage.png",className:"user-image"}),(0,a.jsxs)("div",{className:"about-user",children:[a.jsx("label",{className:"user-name",children:r}),a.jsx("label",{className:"user-occupation",children:n})]})]})]})},i)})})]})}let b={result:{title:"About Author",imageUrl:"autherImageUrl",description:"Kshamta is an author, poetess, dentist, teacher, mum, cook and a Tolkien fan. Karma Sagas - The Sangam is her first book and she intends to write at least a few more. Her interest in consciousness, sustainability and climate change has led her to explore science, spirituality and philosophy. It was all getting a bit too serious so she thought why not bring it all together into an entertaining story? \nWhen she is not busy figuring out treatment plans or lost in a fantasy land, she loves talking to her son about all things science. Born not too far from the Thar desert in North India, she now calls North Yorkshire her home. She blames the serene and picturesque surroundings to make her want to write – a desire that had been peacefully sleeping since she was fourteen. But before that, she would make up stories and songs and even recite her poetry unabashedly at every opportunity.",usefulLinks:[{title:"Contact Information",link:"/contactus"},{title:"Frequently Asked Questions",link:"/contactus#faqsection"},{title:"Glossary of terms",link:"/bookdetails#glossaryofterms"}],otherInfo:{description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",cta:{text:"Learn More",link:"someurltonavigatetheuser"}},testimonials:{title:"testmonial",reviews:[{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"},{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"},{name:"Tamara joe",occupation:"CEO, lOREAM iPSAUM",reviewerImage:"userImage",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",rating:"5"}]}}};function AboutUsLandingPage(){let{title:e="",imageUrl:t="",description:i="",usefulLinks:r=[],otherInfo:n={},testimonials:s={}}=b.result,l=(0,c.k)();return(0,a.jsxs)(o,{children:[a.jsx(AuthorImage,{imageUrl:t,title:e,description:i}),a.jsx(UseFulLinkPage,{isMobile:l,usefulLinks:r}),a.jsx(OtherInfo,{otherInfo:n}),a.jsx(TestimonialsPage,{testimonials:s,isMobile:l})]})}var v=i(8707);let page=()=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(AboutUsLandingPage,{}),a.jsx(v.default,{})]})},8852:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>s,__esModule:()=>n,default:()=>l});var a=i(7536);let r=(0,a.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx`),{__esModule:n,$$typeof:s}=r,o=r.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[795,104,738,30,232,39],()=>__webpack_exec__(1553));module.exports=i})();