(()=>{var e={};e.id=21,e.ids=[21],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},2342:e=>{e.exports=function(){}},5631:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>b,tree:()=>p});var o=t(3137),r=t(4647),i=t(4183),n=t.n(i),s=t(1775),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(a,l);let c=o.AppPageRouteModule,p=["",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,106)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/shop/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/shop/page.tsx"],m="/shop/page",x={require:t,loadChunk:()=>Promise.resolve()},b=new c({definition:{kind:r.x.APP_PAGE,page:"/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},6019:(e,a,t)=>{Promise.resolve().then(t.bind(t,9941))},9941:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>page});var o=t(80),r=t(9885),i=t(2142),n=t(9817);let s=n.ZP.div`
    display: flex;
    flex-direction: column;
    background-color: var(--brand-contactus-bg-color);
`,l=n.ZP.div`
    display: flex;
    flex-direction: row;
    padding: 30px 31px;
    

    .banner-text-container {
        display: flex;
        flex-direction: column;
        flex: 1;

    }


    .banner-image-container {
        display: flex;
        height: fit-content;
        flex: 1;
        /* position: relative; */
        margin-left: 34px;
    }

    .banner-image {
        height: 247px;
        width: 179px;
        /* position: absolute; 
        top: 0;
        right: 0; */
    }

    .shop-banner-title {
        font-size: 50px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);

    }
    .shop-banner-subtitle {
        font-size: 13px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
    }
    .shop-banner-description {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
    }
    

    @media (min-width: 768px) {
        padding: 50px 90px;

        .banner-image-container {
            margin-left: 0px;
            justify-content: end;
        }

        .banner-image {
            height: 500px;
            width: 350px;
        }

        .shop-banner-title {
            font-size: 120px;
            margin-left: 19px;
        }

        .shop-banner-subtitle {
            font-size: 30px;
            margin-left: 19px;
        }

        .shop-banner-description {
            font-size: 16px;
            font-family: 'Gayathri font', sans-serif;
            color: var(--book-subtitle-color);
            margin-left: 19px;
        }

    }
`;function ShopBannerPage({bannerData:e={}}){let{bookImageUrl:a="",title:t="",subtitle:r="",description:i=""}=e||{};return o.jsx("div",{children:(0,o.jsxs)(l,{children:[(0,o.jsxs)("div",{className:"banner-text-container",children:[o.jsx("label",{className:"shop-banner-title",children:t}),o.jsx("label",{className:"shop-banner-subtitle",children:r}),o.jsx("label",{className:"shop-banner-description",children:i})]}),o.jsx("div",{className:"banner-image-container",children:o.jsx("img",{src:a,className:"banner-image",alt:"Book Shop Image",loading:"lazy"})})]})})}let c=n.ZP.div`

    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 30px;
    align-items: center;
    background-color: var(--brand-navbar-background-color);

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-primary-white-color);
    }
    .description-text {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-primary-white-color);
        margin: 6px 50px 10px 50px;
        text-align: center;
    }

    .subscribe-email-container {
        display: flex;
        flex-direction: row;
        background-color: var(--brand-primary-white-color);
        border-radius: 9.75px;
        margin-left: 96px;
        margin-right: 94px;
        height: 20px;
        width: 240px;
    }

    .email-input-text {
        font-size: 6px;
        flex: 1;
        margin-left: 25px;
        font-family: 'primary font light2' sans-serif;
        color: var(--brand-navbar-background-color);
        height: fit-content;
        border: none;
        outline: none;
        background-color: transparent;
        align-self: center;
    }

    .subscribe-button-container {
        display: flex;
        background-color: var(--brand-yellow-color);
        border-radius: 9.75px;
        height: 100%;
        align-items: center;
        cursor: pointer;
    }

    .subscribe-button-text {
        font-size: 6.37px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        padding-left: 30px;
        padding-right: 30px;
        cursor: pointer;
    }


    @media (min-width: 768px) {
        padding: 50px;
        margin-bottom: 50px;
        .title-text {
            font-size: 25px;
        }
        
        .description-text {
            font-size: 16px;
            margin: 20px 350px;
        }

        .subscribe-email-container {
            border-radius: 24.5px;
            margin-left: 248px;
            margin-right: 247px;
            height: 50px;
            width: 585px;
        }

        .email-input-text {
            font-size: 16px;
            align-self: center;
            margin-left: 44px;
        }

        .subscribe-button-container {
            border-radius: 24.5px;
            padding: 18px 74px;
        }

        .subscribe-button-text {
            font-size: 16px;
        }
    }

`;function StayUpdate({getUpdatesData:e={}}){let{title:a="",description:t=""}=e||{},[i,n]=(0,r.useState)("");return o.jsx("div",{children:(0,o.jsxs)(c,{children:[o.jsx("label",{className:"title-text",children:a}),o.jsx("label",{className:"description-text",children:t}),(0,o.jsxs)("div",{className:"subscribe-email-container",children:[o.jsx("input",{className:"email-input-text",type:"email",value:i,placeholder:"Your Email",onChange:e=>{n(e.target.value)}}),o.jsx("div",{className:"subscribe-button-container",children:o.jsx("label",{className:"subscribe-button-text",children:"Subscribe"})})]})]})})}let p=n.ZP.div`
    display: flex;
    flex-direction: column;

    .title-text {
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--black-color);
        align-self: center;
    }

    .selection-container {
        display: flex;
        flex-direction: row;
    }

    .select-book {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 12px 30px 32px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }
    .select-book-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);
        align-self: center;
        flex: 1;
        background-image: url('./images/arrowIconMobile.svg');
        background-repeat: no-repeat;
        background-position: right center;
        appearance: none; // Hide default arrow icon
        -webkit-appearance: none; // For Safari
        -moz-appearance: none;
        background-color: transparent;
        outline: none;
    }

    .select-option-text {
        font-size: 8px;
        font-family: 'primary font light2', sans-serif;
        color: var(--book-subtitle-color);

    }

    .select-country {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 10px 13px 30px 0px ;
        padding: 9px 20px;
        border-radius: 11.45px;
        border: 1px solid var(--black-color);
        align-items: center;
    }

    .marketplace-mobile-list-container {
        display: flex;
        flex-direction: column;
        margin: 0px 70px 30px 70px;
    }

    .marketplace-container {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--book-subtitle-color-60);
        border-radius: 4.72px;
        margin-bottom: 30px;
    }

    .marketplace-image {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100px;
        height: 40px;
        align-self: center;
    }

    .line-seprator{
        background-color: var(--book-subtitle-color-60);
        margin-bottom: 17px;
    }

    .book-title-text {
        font-size: 19.14px;
        font-family: 'primary font light2', sans-serif;
        color: var(--black-color);
        margin: 0px 48px 10px 48px;
        text-align: center;
        max-lines: 2;
    }
    .book-description-text {
        font-size: 8.75px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--book-subtitle-color);
        margin: 0px 14px 10px 14px;
        text-align: center;
    }

    .marketplace-button-container {
        display: flex;
        background-color: var(--brand-navbar-background-color);
        border-radius: 13.4px;
        justify-content: center;
        cursor: pointer;
        margin: 10px 35px 26px 35px;
    }

        .marketplace-button-text {
            font-size: 8.75px;
            padding-left: 37px;
            padding-right: 37px;
            padding-top: 9px;
            padding-bottom: 7px;
            font-family: 'primary font bold', sans-serif;
            color: var(--brand-yellow-color);
            cursor: pointer;
        }

    @media (min-width: 768px) {

        .title-text {
            font-size: 25px;
        }

        .select-book {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 44px 50px 145px;
        }

        .select-country {
            padding: 18px 44px;
            border-radius: 24.5px;
            margin: 30px 145px 50px 0px;
        }

        .select-book-text {
            font-size: 16px;
            background-image: url('./images/arrowIconWeb.svg');
            background-repeat: no-repeat;
            background-position: right center;
        }

        .select-option-text {
            font-size: 16px;
            font-family: 'primary font light2', sans-serif;
            color: var(--book-subtitle-color);

        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust width as needed */
            gap: 27px;
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 27px;
        }

        .grid-item {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--book-subtitle-color-60);
            border-radius: 4.72px;
            margin-bottom: 27px;
        }

        .marketplace-image {
            margin: 0px 20px 20px ;
            width: 200px;
            height: 120px;
            align-self: center;
        }
        .line-seprator{
            background-color: var(--book-subtitle-color-60);
            margin-bottom: 33px;
        }

        .book-title-text {
            font-size: 28.34px;
            margin: 0px 17px 18px 17px;
        }

        .book-description-text {
            font-size: 15.12px;
            margin: 0px 17px 18px 19px;
        }

        .marketplace-button-container {
            border-radius: 23.15px;
            margin: 18px 27px 36px 24px;
        }

        .marketplace-button-text {
            font-size: 15.12px;
            padding-left: 65px;
            padding-right: 65px;
            padding-top: 17px;
            padding-bottom: 16px;
        }

    }
`;var d=t(2342),m=t.n(d);function ShowMarketPlace({isMobile:e=!1,book:a=[],country:t=[],marketPlace:i=[],viewSeriesClick:n=m()}){let s=(0,r.useCallback)(e=>{n(e)},[]),[l,c]=(0,r.useState)(""),[d,x]=(0,r.useState)("");return(0,o.jsxs)(p,{children:[o.jsx("label",{className:"title-text",children:"Select Book and Your Country"}),(0,o.jsxs)("div",{className:"selection-container",children:[o.jsx("div",{className:"select-book",children:(0,o.jsxs)("select",{className:"select-book-text",value:l,onChange:e=>{c(e.target.value),x("")},children:[o.jsx("option",{className:"select-option-text",value:"",children:"Select Book"}),a.map(e=>o.jsx("option",{className:"select-option-text",value:e.bookId,children:e.bookName},e.bookId))]})}),o.jsx("div",{className:"select-country",children:(0,o.jsxs)("select",{className:"select-book-text",value:d,onChange:e=>{x(e.target.value)},children:[o.jsx("option",{className:"select-option-text",value:"",children:"Select Country"}),t.map(e=>o.jsx("option",{className:"select-option-text",value:e.countryId,children:e.countryName},e.countryId))]})})]}),""!==l&&""!==d&&e&&o.jsx("div",{className:"marketplace-mobile-list-container",children:i.map((e,a)=>{let{marketPlaceName:t="",marketPlaceImage:r="",bookTitle:i="",bookDescription:n="",cta:l={}}=e||{},{title:c="",marketPlaceUrl:p=""}=l||{};return(0,o.jsxs)("div",{className:"marketplace-container",children:[o.jsx("img",{loading:"lazy",src:r,alt:i,className:"marketplace-image"}),o.jsx("hr",{className:"line-seprator"}),o.jsx("label",{className:"book-title-text",children:i}),o.jsx("label",{className:"book-description-text",children:n}),o.jsx("div",{className:"marketplace-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(p)},children:o.jsx("label",{className:"marketplace-button-text",children:c})})]},a)})}),""!==l&&""!==d&&!e&&o.jsx("div",{className:"grid-container",children:i.map((e,a)=>{let{marketPlaceName:t="",marketPlaceImage:r="",bookTitle:i="",bookDescription:n="",cta:l={}}=e||{},{title:c="",marketPlaceUrl:p=""}=l||{};return(0,o.jsxs)("div",{className:"grid-item",children:[o.jsx("img",{loading:"lazy",src:r,alt:i,className:"marketplace-image"}),o.jsx("hr",{className:"line-seprator"}),o.jsx("label",{className:"book-title-text",children:i}),o.jsx("label",{className:"book-description-text",children:n}),o.jsx("div",{className:"marketplace-button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(p)},children:o.jsx("label",{className:"marketplace-button-text",children:c})})]},a)})})]})}var x=t(1605);let b={result:{bannerData:{bookImageUrl:"./images/book_img.webp",title:"Shop",subtitle:"Our Market Place",description:"This book is available in paperback in all countries including in India. India Paperback released in India on 1st January.",cta:{text:"Explore the book",url:"someurltonavigatetheuser"}},getUpdatesData:{title:"Get The Best Updates",description:"Subscribe with your mail id to know the current update in book edition at your fingertip with in a minute."},book:[{bookId:1001,bookName:"Karma Sagas - The Sangam"}]}},g={result:{country:[{countryId:200,countryName:"India"},{countryId:201,countryName:"South Africa"},{countryId:202,countryName:"Usa"},{countryId:203,countryName:"UK"},{countryId:204,countryName:"Singapore"},{countryId:205,countryName:"Japan"}]}},u={result:{marketPlace:[{marketPlaceName:"Amazon",marketPlaceImage:"./images/amazon_logo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.amazon.com/dp/B0CL92RQJP?tag=publishdriv01-20&linkCode=osi&th=1&psc=1"}},{marketPlaceName:"Apple Books (iTunes)",marketPlaceImage:"./images/apple_book_logo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://itunes.apple.com/book/id6469687801"}},{marketPlaceName:"Barnes & Noble",marketPlaceImage:"./images/Barnes-Noble-Logo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.barnesandnoble.com/w/book/1144239128;jsessionid=557C4E9F38A6535BBBA5B547CC59DB25.prodny_store01-va08?ean=9781739566906"}},{marketPlaceName:"Kobo",marketPlaceImage:"./images/rakuten-kobo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.kobo.com/ww/en/search?query=9781739566906"}},{marketPlaceName:"Scribd",marketPlaceImage:"./images/everand_logo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.scribd.com/book/678368570/The%20Sangam"}},{marketPlaceName:"Storytel",marketPlaceImage:"./images/storytel.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.storytel.com/in/en/books/the-sangam-2643415?appRedirect=true"}},{marketPlaceName:"24symbols.com",marketPlaceImage:"./images/twentyfour-symbol.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.24symbols.com/book/english/kshamta-purohit/the-sangam?id=4573753"}},{marketPlaceName:"overdrive.com",marketPlaceImage:"./images/company-od-logo.webp",bookTitle:"The Sangam",bookDescription:"Welcome to a world where the power of the mind is everything – a world of extraordinary yogis, scientists, and enhanced humans – a world ravaged by climate change. Welcome to the world of Karam Sagas – The Sangam.",cta:{title:"View Book",marketPlaceUrl:"https://www.overdrive.com/media/10280272"}}]}};function ShopLandingPage(e){let{viewSeriesClick:a=noop}=e.actions||{},{bannerData:t={},getUpdatesData:r={},book:i=[]}=b.result,{country:n=[]}=g.result,{marketPlace:l=[]}=u.result,c=(0,x.k)();return(0,o.jsxs)(s,{children:[o.jsx(ShopBannerPage,{bannerData:t}),o.jsx(StayUpdate,{getUpdatesData:r}),o.jsx(ShowMarketPlace,{viewSeriesClick:a,isMobile:c,book:i,country:n,marketPlace:l})]})}let h=n.ZP.div`

    display: flex;
    flex-direction: column;

`,page=()=>{let e=(0,r.useCallback)(e=>{window.open(e,"_blank")},[]),a=(0,r.useMemo)(()=>({viewSeriesClick:e}),[e]);return(0,o.jsxs)(o.Fragment,{children:[o.jsx(h,{children:o.jsx(ShopLandingPage,{actions:a})}),o.jsx(i.Z,{})]})}},106:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var o=t(7536);let r=(0,o.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/shop/page.tsx`),{__esModule:i,$$typeof:n}=r,s=r.default,l=s}};var a=require("../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[879,104,66,168],()=>__webpack_exec__(5631));module.exports=t})();