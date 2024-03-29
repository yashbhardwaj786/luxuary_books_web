(()=>{var e={};e.id=327,e.ids=[327],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},1553:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>c});var a=i(3137),n=i(4647),r=i(4183),s=i.n(r),o=i(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(t,l);let d=a.AppPageRouteModule,c=["",{children:["aboutus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,8852)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx"],u="/aboutus/page",x={require:i,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:n.x.APP_PAGE,page:"/aboutus/page",pathname:"/aboutus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6586:(e,t,i)=>{Promise.resolve().then(i.bind(i,4049))},4049:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>page});var a=i(80),n=i(9885),r=i.n(n);i(61);var s=i(9817);let o=s.ZP.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
background-color: var(--brand-contactus-bg-color);
`,l=s.ZP.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    padding-bottom: 6px;

    
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
        
        .bg-circle-container{
            display: flex;
            margin: 50px 0px 26px;
        }
        .bg-author-image{
            z-index: 99;
            position: absolute;
            height: auto; 
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
`,AboutAuthor_ImageCircle=function({ismobile:e=!1}){return a.jsx(a.Fragment,{children:e?a.jsx("svg",{width:"193",height:"192",viewBox:"0 0 193 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"96.8293",cy:"96.0976",r:"95.9023",fill:"#FBEA55"})}):a.jsx("svg",{width:"348",height:"348",viewBox:"0 0 348 348",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"174",cy:"174",r:"174",fill:"#FBEA55"})})})};var d=i(1605);function AuthorImage({imageUrl:e="",title:t="",description:i=""}){let n=(0,d.k)();return(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"bg-circle-container",children:[a.jsx("img",{src:"/images/author_img.png",className:"bg-author-image"}),a.jsx(AboutAuthor_ImageCircle,{ismobile:n})]}),a.jsx("label",{className:"title-text",children:t}),i.split("\n").map((e,t)=>a.jsx(r().Fragment,{children:a.jsx("label",{className:"description-text",children:e})},t))]})}let c=s.ZP.div`
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

`,usefulllinks_Arrow=function({ismobile:e=!1}){return a.jsx(a.Fragment,{children:e?a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M7.39768 6.5884C7.39769 6.5873 7.39768 6.5862 7.39768 6.5851L7.39992 3.17754C7.39984 3.15056 7.39685 3.12366 7.391 3.09731L7.36871 3.02154L7.34643 2.97697L7.32191 2.95245C7.29125 2.90798 7.25273 2.86946 7.20825 2.83879L7.18597 2.81651L7.15923 2.78976L7.10128 2.77193C7.0687 2.76229 7.03496 2.75703 7.00099 2.75632L3.5756 2.76302C3.34759 2.76211 3.16199 2.94622 3.16108 3.17424C3.16107 3.17534 3.16108 3.17644 3.16108 3.17754C3.16638 3.40301 3.3479 3.58453 3.57338 3.58984L5.60811 3.59207C5.69513 3.59292 5.76499 3.66417 5.76413 3.7512C5.76373 3.79169 5.74777 3.83047 5.71953 3.8595L2.40112 7.17791C2.23986 7.33915 2.23984 7.60056 2.40108 7.76182C2.56231 7.92307 2.82372 7.92308 2.98498 7.76186L2.98502 7.76182L6.30344 4.44341C6.36583 4.38274 6.46561 4.38413 6.52627 4.44653C6.55449 4.47556 6.57047 4.51434 6.57087 4.55483L6.56865 6.58511C6.57281 6.81229 6.75599 6.99546 6.98317 6.99963C7.21119 7.00054 7.39678 6.81643 7.39768 6.5884Z",fill:"#222124"})}):a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M17.0421 13.9592C17.0422 13.9566 17.0421 13.9539 17.0421 13.9512L17.0476 5.64932C17.0474 5.58358 17.0401 5.51804 17.0259 5.45386L16.9716 5.26926L16.9173 5.16066L16.8575 5.10092C16.7828 4.99258 16.689 4.89874 16.5806 4.82401L16.5263 4.76972L16.4612 4.70457L16.32 4.66112C16.2406 4.63763 16.1584 4.62483 16.0757 4.6231L7.73036 4.63941C7.17484 4.6372 6.72267 5.08575 6.72045 5.64128C6.72043 5.64395 6.72045 5.64662 6.72045 5.64932C6.73336 6.19864 7.1756 6.64088 7.72494 6.65381L12.6822 6.65923C12.8942 6.66132 13.0644 6.8349 13.0623 7.04693C13.0613 7.14558 13.0224 7.24006 12.9536 7.31079L4.86894 15.3955C4.47608 15.7883 4.47603 16.4252 4.86884 16.8181C5.26166 17.2109 5.89853 17.211 6.29142 16.8182L14.3762 8.73336C14.5282 8.58557 14.7713 8.58895 14.9191 8.74097C14.9879 8.8117 15.0268 8.90618 15.0278 9.00483L15.0224 13.9512C15.0325 14.5047 15.4788 14.951 16.0323 14.9611C16.5878 14.9633 17.04 14.5148 17.0421 13.9592Z",fill:"#222124"})})})};var u=i(7114);function UsefulLinkItem({isMobile:e=!1,usefulLink:t={}}){let i=(0,u.useRouter)(),{title:r="",link:s=""}=t||{},o=(0,n.useCallback)(e=>{i.push(e)},[]);return(0,a.jsxs)(p,{children:[a.jsx("div",{className:"top-stroke"}),(0,a.jsxs)("div",{className:"item-container",onClick:()=>o(s),children:[a.jsx("label",{className:"content",children:r}),a.jsx(usefulllinks_Arrow,{isMobile:e})]}),a.jsx("div",{className:"bottom-stroke"})]})}function UseFulLinkPage({isMobile:e=!1,usefulLinks:t=[]}){return a.jsx(c,{children:a.jsx("div",{children:t.map((t,i)=>t?a.jsx(UsefulLinkItem,{isMobile:e,usefulLink:t},i):null)})})}let x=s.ZP.div`
    display: flex;
    flex-direction: column;
    background-color: var(--brand-navbar-background-color);
    padding: 23px 31px;

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
`;var m=i(2342),h=i.n(m);function OtherInfo({otherInfo:e={},learnMoreClick:t=h()}){let{description:i="",cta:r={}}=e||{},{text:s="",link:o=""}=r||{},l=(0,n.useCallback)(e=>{t(e)},[]);return(0,a.jsxs)(x,{children:[a.jsx("label",{className:"description",children:i}),a.jsx("div",{className:"button-container",onClick:e=>{e.preventDefault(),e.stopPropagation(),l(o)},children:a.jsx("label",{className:"button-text",children:s})})]})}let g=s.ZP.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(179, 179, 179, 1);
    padding: 20px;
    justify-content: center;
    align-items: center; /* Center vertically */
    width: auto;

    .title-text {
        color: var(--brand-navbar-background-color);
        font-size: 8px;
        font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
        padding: 50px;
        
        .title-text {
            font-size: 25px;
        }
    }
`,f=s.ZP.div`
    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    display: flex !important;
    flex-direction: column ;
    justify-content: center;
    align-items: center;


    .inner-cover-area{

        width: auto;
        max-width: 238px;
        align-items: center;
        justify-content: center;
        margin: 10px 20px 20px 20px;
        display: flex;
        border-radius: 3.98px;
        flex-direction: column;
        background-image:  url('/images/Rectangle.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .review-title {
      color: var(--black-color);
      font-size: 8px;
      font-family: 'Gayathri font', sans-serif;
      z-index: 1;
      margin-top: 5px;

    }

    .quote-image {
        margin-top: -70px;
        margin-right: -11px;
    }

    .text-container {
        display: flex;
        flex-direction: row;
        margin: 10px 13px;
    }

    .user-info-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        align-self: flex-start;
        margin-left: 25px;

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
      font-size: 6px;
      font-family: 'primary font light2', sans-serif;
      margin-top: 2px;
    }


    

    @media (min-width: 768px) {
        padding: 50px; 
        
        .inner-cover-area{
            max-width: 727px;
            background-image:  url('/images/Rectangle.svg');
            margin: 13px 20px 0px 20px;
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
            margin-left: 50px;

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
            font-size: 12px;
            
        }
        
    }
`;var b=i(860);let Star=({filled:e,isMobile:t})=>a.jsx(a.Fragment,{children:t?a.jsx("img",{src:e?"./images/FilledStarMobile.svg":"./images/EmptyStarMobile.svg",alt:e?"Filled Star":"Empty Star",style:{display:"inline-block"}}):a.jsx("img",{src:e?"./images/FilledStar.svg":"./images/EmptyStar.svg",alt:e?"Filled Star":"Empty Star",style:{display:"inline-block"}})}),StarRating=({rating:e,isMobile:t})=>{let i=Math.floor(e),n=e-i>=.5,r=[];for(let e=0;e<i;e++)r.push(a.jsx(Star,{filled:!0,isMobile:t},e));n&&r.push(a.jsx(Star,{filled:!1,isMobile:t},i));let s=5-i-(n?1:0);for(let e=0;e<s;e++)r.push(a.jsx(Star,{filled:!1,isMobile:t},i+(n?1:0)+e));return a.jsx("div",{children:r})},testimonials_StarRating=({isMobile:e=!1,rating:t=0})=>a.jsx("div",{children:a.jsx(StarRating,{rating:t,isMobile:e})});var y=i(3011);function TestimonialsPage({testimonials:e={},isMobile:t=!1}){let{title:i="",reviews:n=[]}=e||{};return(0,a.jsxs)(g,{children:[a.jsx("div",{className:"blur-background"}),a.jsx("label",{className:"title-text ",children:i}),t?a.jsx(y.Z,{scrollWidth:1,scrollDuration:100,children:n.map((e,i)=>{if(!e)return null;let{name:n="",lastUpdated:r="",description:s="",rating:o=0}=e;return a.jsx(f,{children:(0,a.jsxs)("div",{className:"inner-cover-area",children:[a.jsx(testimonials_StarRating,{isMobile:t,rating:o}),(0,a.jsxs)("div",{className:"text-container",children:[a.jsx("img",{src:"./images/shape_quotes_mobile.svg",className:"quote-image"}),a.jsx("label",{className:"review-title",children:s})]}),(0,a.jsxs)("div",{className:"user-info-container",children:[a.jsx("label",{className:"user-name",children:n}),a.jsx("label",{className:"user-occupation",children:r})]})]})},i)})}):a.jsx(b.ZP,{slidesToShow:1,slidesToScroll:1,hideBlur:!0,children:n.map((e,i)=>{if(!e)return null;let{name:n="",lastUpdated:r="",description:s="",rating:o=0}=e;return a.jsx(f,{children:(0,a.jsxs)("div",{className:"inner-cover-area",children:[a.jsx(testimonials_StarRating,{isMobile:t,rating:o}),(0,a.jsxs)("div",{className:"text-container",children:[a.jsx("img",{src:"./images/shape_quotes.svg",className:"quote-image"}),a.jsx("label",{className:"review-title",children:s})]}),(0,a.jsxs)("div",{className:"user-info-container",children:[a.jsx("label",{className:"user-name",children:n}),a.jsx("label",{className:"user-occupation",children:r})]})]})},i)})})]})}let w={errorCode:200,success:!0,message:"",result:{title:"About Author",imageUrl:"/images/author_img.png",description:"Kshamta is an author, poetess, dentist, teacher, mum, cook and a Tolkien fan. Karma Sagas - The Sangam is her first book and she intends to write at least a few more. Her interest in consciousness, sustainability and climate change has led her to explore science, spirituality and philosophy. It was all getting a bit too serious so she thought why not bring it all together into an entertaining story? When she is not busy figuring out treatment plans or lost in a fantasy land, she loves talking to her son about all things science. Born not too far from the Thar desert in North India, she now calls North Yorkshire her home. She blames the serene and picturesque surroundings to make her want to write – a desire that had been peacefully sleeping since she was fourteen. But before that, she would make up stories and songs and even recite her poetry unabashedly at every opportunity.",usefulLinks:[{title:"Contact Information",link:"/contactus"},{title:"Frequently Asked Questions",link:"/contactus#faqsection"},{title:"Glossary of terms",link:`/bookdetails?bookName=${encodeURIComponent("Karma Sagas The Sangam: 1")}#grossaryoftermssection`}],otherInfo:{description:`Born in Jaipur, the pink city of India, I am the second oldest of four siblings. We were a
			bunch of happy, noisy kids. The one person who has inspired me the most is my father. In
			the society I grew up in, girls had to be homemakers and demure. But my father has always
			wanted his daughters to be high achievers. He would say – ‘Don’t you worry about anything,
			do what you have to, I will always support you.’ Growing up I would listen to my father’s adventure stories with great interest and believed
them to be true. I used to make up my own songs and bedtime stories for my young cousins.
Interest in books started with Robin Cook novels and now it spans from Harry Potter to
Sapiens. I was naturally drawn to science too. I moved to Bengaluru in South India to study
dentistry. I had the best time of my life and got through dentistry books as well as lots of
novels. Determined to be an independent woman, I moved to the UK to move on in my
career. The first two years proved challenging, staying away from family in a foreign land on
my own was the hardest thing I had ever done.`,cta:{text:"Learn More",link:"/shop"}},testimonials:{title:"testmonial",reviews:[{name:"Anonymous",lastUpdated:"Last updated on 25 Jan 2024",description:`Kshamta manages to bring both a dystopian future novel and mix it with spirituality and it really has you questioning throughout the novel. I absolutely loved how this book was set around a set of siblings navigating their quest in a dystopian future.
					This has to be one of my favourite reads of the year and I can't wait to see what happens next !!"`,rating:"5"},{name:"Anonymous",lastUpdated:"Last updated on 15 Feb 2024",description:"Purohit's writing is immersive and vivid, painting a rich and detailed world that feels both futuristic and rooted in tradition. The dynamic between the two siblings and their different perspectives on science and spirituality adds depth to the story, as they navigate through unforeseen challenges and unexpected malevolence threatening the world.",rating:"5"},{name:"Kathryn M.",lastUpdated:"Last updated on 01 Jan 2024",description:"This was a great concept for a dystopian future novel it worked well overall with what was going on. It worked as a opening chapter in this series. Kshamta Purohit creates a great concept and I enjoyed how good the characters worked with this universe. I can't wait to read more in this series.",rating:"5"},{name:"Anonymous",lastUpdated:"Last updated on 15 March 2024",description:"Wow! What a fantastic read and amazing debut. This YA dystopian story follows siblings Krupa and Joash in a thrilling journey across the Himalayas. The Sangam explores environmental issues, spirituality and ancient wisdom in this timely blending of traditional sageness and futuristic elements. Kshamta Purohit paints a totally believable, vivid and immersive world, and her writing is nothing short of amazing.",rating:"5"}]}}};function AboutUsLandingPage(e){let{learnMoreClick:t=h()}=e.actions||{},{title:i="",imageUrl:n="",description:r="",usefulLinks:s=[],otherInfo:l={},testimonials:c={}}=w.result,p=(0,d.k)();return(0,a.jsxs)(o,{children:[a.jsx(AuthorImage,{imageUrl:n,title:i,description:r}),a.jsx(UseFulLinkPage,{isMobile:p,usefulLinks:s}),a.jsx(OtherInfo,{otherInfo:l,learnMoreClick:t}),a.jsx(TestimonialsPage,{testimonials:c,isMobile:p})]})}var v=i(2142);let page=()=>{let e=(0,u.useRouter)(),t=(0,n.useCallback)(t=>{e.push(t)},[]),i=(0,n.useMemo)(()=>({learnMoreClick:t}),[t]);return(0,a.jsxs)(a.Fragment,{children:[a.jsx(AboutUsLandingPage,{actions:i}),a.jsx(v.Z,{})]})}},8852:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>s,__esModule:()=>r,default:()=>l});var a=i(7536);let n=(0,a.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/aboutus/page.tsx`),{__esModule:r,$$typeof:s}=n,o=n.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[879,104,405,30,168,763],()=>__webpack_exec__(1553));module.exports=i})();