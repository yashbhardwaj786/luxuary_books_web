(()=>{var e={};e.id=618,e.ids=[618],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},5286:(e,i,n)=>{"use strict";n.r(i),n.d(i,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>p});var t=n(3137),a=n(4647),s=n(4183),r=n.n(s),o=n(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(i,l);let x=t.AppPageRouteModule,p=["",{children:["contactus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,7151)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/contactus/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,1310)),"/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/contactus/page.tsx"],c="/contactus/page",m={require:n,loadChunk:()=>Promise.resolve()},u=new x({definition:{kind:a.x.APP_PAGE,page:"/contactus/page",pathname:"/contactus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},7972:(e,i,n)=>{Promise.resolve().then(n.bind(n,2881))},2881:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>page});var t=n(80),a=n(9885);n(61);var s=n(9817);let r=s.ZP.div`
display: flex;
flex-direction: column;
background-color: var(--brand-contactus-bg-color);
`,o=s.ZP.div`
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
`,AboutAuthor_ImageCircle=function({ismobile:e=!1}){return t.jsx(t.Fragment,{children:e?t.jsx("svg",{width:"193",height:"192",viewBox:"0 0 193 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"96.8293",cy:"96.0976",r:"95.9023",fill:"#FBEA55"})}):t.jsx("svg",{width:"348",height:"348",viewBox:"0 0 348 348",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"174",cy:"174",r:"174",fill:"#FBEA55"})})})};var l=n(1605);function AuthorImage({imageUrl:e="",title:i="",description:n=""}){let a=(0,l.k)();return(0,t.jsxs)(o,{children:[(0,t.jsxs)("div",{className:"bg-circle-container",children:[t.jsx("img",{src:"/images/author_img.png",className:"bg-author-image"}),t.jsx(AboutAuthor_ImageCircle,{ismobile:a})]}),t.jsx("label",{className:"title-text",children:i}),t.jsx("label",{className:"description-text",children:n})]})}let x=s.ZP.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    padding: 30px;

    .title-text {
        margin: 0px 0px 15px 0px;
        font-size: 12px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
        text-align: center;
    }

    .details-inquiries{
        display: flex;
        flex-direction: row;
        margin: 0px 30px 7px 30px;
    }

    .details-inquiries-text {
        font-size: 8px;
        margin-right: 16px;
        font-family: 'primary font bold', sans-serif;
        color: var(--brand-navbar-background-color);
    }
    .details-inquiries-value {
        font-size: 8px;
        font-family: 'Gayathri font', sans-serif;
        color: var(--brand-navbar-background-color);
    }

    @media (min-width: 768px) {

        padding: 50px;

        .title-text {
            margin: 0px 0px 30px 0px;
            font-size: 25px;
        }
        .details-inquiries{
            margin: 0px 70px 15px 70px;
        }
        .details-inquiries-text {
            font-size: 16px;
            margin-right: 24px;
        }
        .details-inquiries-value {
            font-size: 16px;
        }
    }
`;function ProfessionalInquiries({professionalInquiries:e={}}){let{title:i="",address:n="",email:a="",phone:s=""}=e;return(0,t.jsxs)(x,{children:[(0,t.jsxs)("label",{className:"title-text",children:[" ",i," "]}),(0,t.jsxs)("div",{className:"details-inquiries",children:[t.jsx("label",{className:"details-inquiries-text",children:"Visit Us :"}),t.jsx("label",{className:"details-inquiries-value",children:n})]}),(0,t.jsxs)("div",{className:"details-inquiries",children:[t.jsx("label",{className:"details-inquiries-text",children:"Drop us :"}),t.jsx("label",{className:"details-inquiries-value",children:a})]}),(0,t.jsxs)("div",{className:"details-inquiries",children:[t.jsx("label",{className:"details-inquiries-text",children:"Call us :"}),t.jsx("label",{className:"details-inquiries-value",children:s})]})]})}let p=s.ZP.div`

    display: flex;
    flex-direction: column;
    margin: 20px 0px 30px 0px;
    align-items: center;

    .name-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 10px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 11.45px;
        padding: 8px 24px;
        align-items: center;
        width: 300px;
    }

    .name-input-text {
      font-size: 8px;
      flex: 1;
      margin-left: 5px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      height: fit-content;
      border: none;
      outline: none;
      background-color: transparent

    }

    .phone-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 10px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 300px;
        padding: 8px 24px;
        align-items: center;
    }

    .message-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 31px 0px 31px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 8px;
        width: 300px;
        min-height: 80px;
        padding: 9px 23px;
    }

    .message-input-area {
      font-size: 8px;
      width: 100%;
      height: 70px;
      margin-left: 4px;
      font-family: 'Gayathri font' sans-serif;
      color: var(--book-subtitle-color);
      border: none;
      outline: none;
      background-color: transparent;
      resize: none;

    }

    .button-container {
      display: flex;
      background: var(--brand-navbar-background-color);
      border-radius: 10.2px;
      padding: 7px 20px;
      margin-top: 20px;
      cursor: pointer;
    }

    .button-text {
      color: var(--brand-yellow-color);
      font-size: 6.54px;
      width: 100%;
      cursor: pointer;
      font-family: 'primary font bold', sans-serif;
    }

    @media (min-width: 768px) {
      margin: 50px 0px 50px 0px;

      .name-email-container {
        display: flex;
        flex-direction: row;
      }

      .name-container {
          flex: 1;
          border-radius: 28px;
          margin: 0px 10px 0px 90px;
          width: 440px;
          padding: 20px 60px 20px 60px;
      }

      .name-input-text {
        font-size: 16px;
        margin-left: 10px;
      }

      .email-container {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px 90px 0px 10px;
        border: 0.4px solid var(--brand-navbar-background-color);
        border-radius: 28px;
        width: 440px;
        padding: 20px 60px 20px 60px;
        align-items: center;
      }

      .phone-container {
        margin: 20px 90px 0px 90px;
        width: 900px;
        padding: 20px 60px 20px 60px;
      }

      .message-container {
        margin: 20px 90px 0px 90px;
        width: 900px;
        min-height: 194px;
        padding: 20px 60px;
        border-radius: 28px;
      }

      .message-input-area {
        font-size: 16px;
        height: 190px;
        margin-left: 10px;
      }

      .button-container {
        border-radius: 24.5px;
        padding: 18px 49px;
        margin-top: 30px;
      }

      .button-text {
        font-size: 16px;
        line-height: 19.25px;
      }

    }


`,d=s.ZP.svg`
  margin-top: 6px;
`,sendmessage_UserIcon=function({ismobile:e=!1}){return t.jsx(t.Fragment,{children:e?(0,t.jsxs)("svg",{width:"6",height:"7",viewBox:"0 0 6 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M3.39677 3.60873C2.56374 3.60873 1.88574 2.93074 1.88574 2.0977C1.88574 1.26466 2.56374 0.58667 3.39677 0.58667C4.22981 0.58667 4.9078 1.26466 4.9078 2.0977C4.9078 2.93074 4.22981 3.60873 3.39677 3.60873ZM3.39677 0.980852C2.78185 0.980852 2.27992 1.48278 2.27992 2.0977C2.27992 2.71262 2.78185 3.21455 3.39677 3.21455C4.0117 3.21455 4.51362 2.71262 4.51362 2.0977C4.51362 1.48278 4.0117 0.980852 3.39677 0.980852Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M5.65415 6.23675C5.54641 6.23675 5.45706 6.1474 5.45706 6.03966C5.45706 5.13304 4.53208 4.39723 3.39683 4.39723C2.26158 4.39723 1.33656 5.13304 1.33656 6.03966C1.33656 6.1474 1.24722 6.23675 1.13947 6.23675C1.03173 6.23675 0.942383 6.1474 0.942383 6.03966C0.942383 4.91755 2.04346 4.00305 3.39683 4.00305C4.75019 4.00305 5.85125 4.91755 5.85125 6.03966C5.85125 6.1474 5.7619 6.23675 5.65415 6.23675Z",fill:"#2D2D2D"})]}):(0,t.jsxs)("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6.00258 7.39091C3.96526 7.39091 2.30713 5.73278 2.30713 3.69546C2.30713 1.65813 3.96526 0 6.00258 0C8.03991 0 9.69804 1.65813 9.69804 3.69546C9.69804 5.73278 8.03991 7.39091 6.00258 7.39091ZM6.00258 0.964032C4.49869 0.964032 3.27116 2.19157 3.27116 3.69546C3.27116 5.19935 4.49869 6.42688 6.00258 6.42688C7.50647 6.42688 8.73401 5.19935 8.73401 3.69546C8.73401 2.19157 7.50647 0.964032 6.00258 0.964032Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M11.5234 13.8178C11.2599 13.8178 11.0413 13.5993 11.0413 13.3358C11.0413 11.1185 8.77914 9.31895 6.00273 9.31895C3.22629 9.31895 0.964032 11.1185 0.964032 13.3358C0.964032 13.5993 0.745518 13.8178 0.482016 13.8178C0.218514 13.8178 0 13.5993 0 13.3358C0 10.5915 2.69286 8.35492 6.00273 8.35492C9.31257 8.35492 12.0054 10.5915 12.0054 13.3358C12.0054 13.5993 11.7869 13.8178 11.5234 13.8178Z",fill:"#2D2D2D"})]})})},sendmessage_EmailIcon=function({ismobile:e=!1}){return t.jsx(t.Fragment,{children:e?(0,t.jsxs)("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M7.4481 6.31124H0.81337C0.597713 6.31099 0.390961 6.2252 0.238476 6.07271C0.0859906 5.92021 0.000226281 5.71345 0 5.49779V1.40024C0.000226281 1.18458 0.0859906 0.977822 0.238476 0.825323C0.390961 0.672823 0.597713 0.587039 0.81337 0.586792H7.4481C7.66376 0.587039 7.87051 0.672823 8.023 0.825323C8.17548 0.977822 8.26125 1.18458 8.26147 1.40024V5.49779C8.26125 5.71345 8.17548 5.92021 8.023 6.07271C7.87051 6.2252 7.66376 6.31099 7.4481 6.31124ZM0.81337 0.897683C0.680135 0.897827 0.5524 0.950824 0.458196 1.04504C0.363992 1.13926 0.311015 1.267 0.310891 1.40024V5.49779C0.311015 5.63102 0.363992 5.75877 0.458196 5.85299C0.5524 5.9472 0.680135 6.0002 0.81337 6.00034H7.4481C7.58134 6.0002 7.70907 5.9472 7.80328 5.85299C7.89748 5.75877 7.95046 5.63102 7.95058 5.49779V1.40024C7.95046 1.267 7.89748 1.13926 7.80328 1.04504C7.70907 0.950824 7.58134 0.897827 7.4481 0.897683H0.81337Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M4.13064 4.36389C4.09275 4.36392 4.05615 4.3501 4.02774 4.32503L0.281494 1.01808L0.487227 0.784912L4.13064 4.00139L7.77421 0.785301L7.97994 1.01847L4.2337 4.32542C4.20521 4.35042 4.16854 4.3641 4.13064 4.36389Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M0.197021 5.82324L2.71371 2.95574L2.9475 3.16093L0.430812 6.02843L0.197021 5.82324Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M5.32202 3.15784L5.55581 2.95265L8.07255 5.8202L7.83876 6.02539L5.32202 3.15784Z",fill:"#2D2D2D"})]}):(0,t.jsxs)("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19.1129 14H2.88668C2.35926 13.9994 1.85362 13.7896 1.48069 13.4166C1.10776 13.0437 0.898014 12.538 0.897461 12.0106V1.98941C0.898014 1.46199 1.10776 0.956325 1.48069 0.583363C1.85362 0.210402 2.35926 0.000603801 2.88668 0H19.1129C19.6404 0.000603801 20.146 0.210402 20.5189 0.583363C20.8919 0.956325 21.1016 1.46199 21.1022 1.98941V12.0106C21.1016 12.538 20.8919 13.0437 20.5189 13.4166C20.146 13.7896 19.6404 13.9994 19.1129 14ZM2.88668 0.760332C2.56083 0.760685 2.24844 0.890296 2.01805 1.12072C1.78766 1.35115 1.6581 1.66356 1.65779 1.98941V12.0106C1.6581 12.3364 1.78766 12.6489 2.01805 12.8793C2.24844 13.1097 2.56083 13.2393 2.88668 13.2397H19.1129C19.4388 13.2393 19.7512 13.1097 19.9816 12.8793C20.212 12.6489 20.3415 12.3364 20.3418 12.0106V1.98941C20.3415 1.66356 20.212 1.35115 19.9816 1.12072C19.7512 0.890296 19.4388 0.760685 19.1129 0.760332H2.88668Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M10.9996 9.23726C10.9069 9.23731 10.8174 9.20351 10.7479 9.14222L1.58594 1.05456L2.08909 0.484314L10.9996 8.35071L19.9105 0.485265L20.4137 1.05551L11.2517 9.14317C11.182 9.2043 11.0923 9.23777 10.9996 9.23726Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M1.37939 12.8062L7.53433 5.79325L8.1061 6.29507L1.95116 13.308L1.37939 12.8062Z",fill:"#2D2D2D"}),t.jsx("path",{d:"M13.9131 6.28766L14.4849 5.78584L20.6399 12.7989L20.0682 13.3007L13.9131 6.28766Z",fill:"#2D2D2D"})]})})},sendmessage_PhoneIcon=function({ismobile:e=!1}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.5949 10.5615L11.4586 8.65334C11.0165 8.25853 10.3592 8.24002 9.89571 8.60938C9.66572 8.79263 9.37577 9.02415 9.02648 9.30399C8.76264 9.51533 8.40832 9.53397 8.12378 9.3514C7.33732 8.8468 6.70038 8.34688 6.17658 7.82305C5.65273 7.2992 5.15281 6.66226 4.64826 5.87585C4.46569 5.59132 4.48431 5.237 4.6957 4.97313C4.97551 4.62384 5.20703 4.33386 5.39029 4.1039C5.75959 3.64037 5.74113 2.98308 5.34635 2.54104L3.43814 0.404654C3.20791 0.14683 2.90352 0.00696696 2.55792 0.000185728C2.21259 -0.0072791 1.90265 0.121182 1.66241 0.369654L0.606618 1.46187C-0.195291 2.29142 -0.20292 3.63537 0.584524 5.34831C1.25784 6.81292 2.47225 8.4632 4.00413 9.9951C5.53603 11.5271 7.18636 12.7416 8.65105 13.415C9.49963 13.8051 10.2576 14.0001 10.9074 14.0001C11.5694 14.0001 12.1191 13.7977 12.5377 13.393L13.6299 12.3372C13.8785 12.097 14.0062 11.7873 13.9994 11.4417C13.9926 11.0961 13.8528 10.7918 13.5949 10.5615ZM13.3259 12.0226L12.2337 13.0784C11.3633 13.9198 9.90438 13.5096 8.83382 13.0175C7.41501 12.3652 5.80966 11.182 4.31349 9.68573C2.81736 8.1896 1.63425 6.58427 0.982047 5.16555C0.489915 4.09507 0.0798962 2.63628 0.92118 1.76596L1.97697 0.67377C2.1327 0.512634 2.32514 0.434021 2.54928 0.437603C2.7733 0.442005 2.96255 0.528986 3.11182 0.69611L5.02003 2.8325C5.27233 3.11499 5.28414 3.53504 5.04811 3.83128C4.86507 4.06103 4.63377 4.35068 4.35426 4.69961C4.02351 5.11244 3.99436 5.66689 4.28002 6.11213C4.80171 6.92525 5.32089 7.58609 5.86722 8.13245C6.41349 8.67869 7.07433 9.19787 7.88753 9.71964C8.33277 10.0052 8.88722 9.97618 9.30003 9.6454C9.64896 9.36587 9.93861 9.13457 10.1684 8.95153C10.4646 8.7155 10.8847 8.72728 11.1672 8.97964L13.3035 10.8878C13.4706 11.0371 13.5576 11.2263 13.562 11.4504C13.5664 11.6744 13.487 11.8669 13.3259 12.0226ZM2.02597 5.05869C2.08074 5.16637 2.03787 5.29805 1.93019 5.35282C1.89842 5.36901 1.86454 5.37667 1.83118 5.37667C1.75147 5.37667 1.67464 5.33294 1.63603 5.25704C1.26661 4.5309 0.710797 3.19286 1.1387 2.38997C1.18562 2.30192 1.2452 2.2203 1.31575 2.14732C1.39972 2.06048 1.53819 2.0581 1.62506 2.14213C1.71193 2.22607 1.71426 2.3646 1.63028 2.45144C1.58744 2.49574 1.55293 2.54296 1.52479 2.59576C1.1679 3.26541 1.81816 4.6502 2.02597 5.05869Z",fill:"black"})})})},sendmessage_MessageIcon=function({ismobile:e=!1}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.2481 0C1.45645 0 0.0102396 1.453 0.00732412 3.24765L4.48407e-06 7.73691C-0.00281756 9.45237 1.32675 10.84 3.00739 10.9618V13.7666C3.00737 13.8128 3.02106 13.8579 3.04672 13.8963C3.07237 13.9347 3.10885 13.9646 3.15152 13.9823C3.19419 13.9999 3.24114 14.0045 3.28642 13.9955C3.33171 13.9864 3.37329 13.9642 3.40591 13.9315L6.34483 10.9853H10.7592C12.5509 10.9853 14 9.53218 14 7.73718V3.24809C14 1.45371 12.5582 0 10.7665 0H3.2481ZM3.2481 0.46652H10.7665C12.3071 0.46652 13.5332 1.70214 13.5332 3.24809V7.73718C13.5332 9.28234 12.2998 10.5187 10.7592 10.5187H6.24816C6.21742 10.5187 6.18699 10.5248 6.15862 10.5366C6.13024 10.5484 6.10448 10.5657 6.0828 10.5874L3.47395 13.2026V10.7522C3.4739 10.6904 3.44932 10.6311 3.4056 10.5874C3.36188 10.5436 3.3026 10.5191 3.24078 10.519C1.7002 10.519 0.464041 9.28269 0.466571 7.73797L0.47389 3.24862C0.47636 1.70293 1.70752 0.46652 3.2481 0.46652ZM4.66674 4.79307C4.28291 4.79307 3.96678 5.10923 3.96678 5.49303C3.96679 5.87683 4.28292 6.19299 4.66674 6.19299C5.05056 6.19299 5.36669 5.87683 5.3667 5.49303C5.3667 5.10923 5.05057 4.79307 4.66674 4.79307ZM7 4.79307C6.61617 4.79307 6.30004 5.10923 6.30005 5.49303C6.30005 5.87683 6.61618 6.19299 7 6.19299C7.38382 6.19299 7.69995 5.87683 7.69996 5.49303C7.69996 5.10923 7.38383 4.79307 7 4.79307ZM9.33348 4.79307C8.94965 4.79307 8.6333 5.10923 8.63331 5.49303C8.63331 5.87683 8.94966 6.19299 9.33348 6.19299C9.7173 6.19299 10.0334 5.87683 10.0334 5.49303C10.0334 5.10923 9.71731 4.79307 9.33348 4.79307ZM4.66674 5.25986C4.79838 5.25986 4.90013 5.36145 4.90013 5.49303C4.90013 5.62461 4.79838 5.72638 4.66674 5.72638C4.5351 5.72638 4.43335 5.62461 4.43335 5.49303C4.43335 5.36145 4.5351 5.25986 4.66674 5.25986ZM7 5.25986C7.13164 5.25986 7.23318 5.36145 7.23318 5.49303C7.23318 5.62461 7.13164 5.72638 7 5.72638C6.86836 5.72638 6.76661 5.62461 6.76661 5.49303C6.76661 5.36145 6.86836 5.25986 7 5.25986ZM9.33348 5.25986C9.46512 5.25986 9.56666 5.36145 9.56666 5.49303C9.56665 5.62461 9.46512 5.72638 9.33348 5.72638C9.20184 5.72638 9.10009 5.62461 9.10009 5.49303C9.10009 5.36145 9.20184 5.25986 9.33348 5.25986Z",fill:"#2D2D2D"})})})};function SendMessge(){let[e,i]=(0,a.useState)(""),[n,s]=(0,a.useState)(""),[r,o]=(0,a.useState)(""),[x,c]=(0,a.useState)(""),m=(0,l.k)(),handleChangeName=e=>{i(e.target.value)},handleChangeEmail=e=>{s(e.target.value)};return(0,t.jsxs)(p,{children:[m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"name-container",children:[t.jsx(sendmessage_UserIcon,{ismobile:m}),t.jsx("input",{className:"name-input-text",type:"text",value:e,placeholder:"Name",onChange:handleChangeName})]}),(0,t.jsxs)("div",{className:"name-container",children:[t.jsx(sendmessage_EmailIcon,{ismobile:m}),t.jsx("input",{className:"name-input-text",type:"text",value:n,placeholder:"Email",onChange:handleChangeEmail})]})]}):(0,t.jsxs)("div",{className:"name-email-container",children:[(0,t.jsxs)("div",{className:"name-container",children:[t.jsx(sendmessage_UserIcon,{ismobile:m}),t.jsx("input",{className:"name-input-text",type:"text",value:e,placeholder:"Name",onChange:handleChangeName})]}),(0,t.jsxs)("div",{className:"email-container",children:[t.jsx(sendmessage_EmailIcon,{ismobile:m}),t.jsx("input",{className:"name-input-text",type:"text",value:n,placeholder:"Email",onChange:handleChangeEmail})]})]}),(0,t.jsxs)("div",{className:"phone-container",children:[t.jsx(sendmessage_PhoneIcon,{ismobile:m}),t.jsx("input",{className:"name-input-text",type:"text",value:r,placeholder:"Phone",onChange:e=>{o(e.target.value)}})]}),(0,t.jsxs)("div",{className:"message-container",children:[t.jsx(({width:e,height:i})=>t.jsx(d,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"14",height:"14",children:t.jsx(sendmessage_MessageIcon,{ismobile:m})}),{}),t.jsx("textarea",{className:"message-input-area",type:"text",value:x,placeholder:"Message",onChange:e=>{c(e.target.value)}})]}),t.jsx("div",{className:"button-container",children:t.jsx("label",{className:"button-text",children:"Send a message"})})]})}let c=s.ZP.div`
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

    .faq-list-conainer {
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
`,m=s.ZP.div`
    display: flex;
    flex-direction: column;
    margin: 0px 30px 12px 30px;
    
    .question-text {
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
    .answer-container {
      display: flex;
      flex-direction: column;
    }
    .content {
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

    .question-text {
      font-size: 20px;
    }
  
    .header {
      padding: 10px;
    }

    .arrow {
      transition: transform 0.3s ease;
    }
  
    .content {
      font-size: 16px;
      padding: 10px;
    }
    .seprator {
      margin-top: 10px;
      line-height: 24px;
    }

  }
  
`,faqitem_DownArrow=function({isMobile:e=!1}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.00003 8C7.81403 8 7.62785 7.93483 7.48585 7.80467L0.213136 1.13804C-0.0710453 0.877537 -0.0710453 0.455706 0.213136 0.195374C0.497317 -0.064958 0.957498 -0.0651247 1.2415 0.195374L8.00003 6.39068L14.7586 0.195374C15.0428 -0.0651247 15.5029 -0.0651247 15.7869 0.195374C16.0709 0.455873 16.0711 0.877703 15.7869 1.13804L8.51422 7.80467C8.37222 7.93483 8.18603 8 8.00003 8Z",fill:"white"})})})},faqitem_UpArrow=function({isMobile:e=!1}){return t.jsx(t.Fragment,{children:t.jsx("svg",{width:"16",height:"8",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.00003 8C7.81403 8 7.62785 7.93483 7.48585 7.80467L0.213136 1.13804C-0.0710453 0.877537 -0.0710453 0.455706 0.213136 0.195374C0.497317 -0.064958 0.957498 -0.0651247 1.2415 0.195374L8.00003 6.39068L14.7586 0.195374C15.0428 -0.0651247 15.5029 -0.0651247 15.7869 0.195374C16.0709 0.455873 16.0711 0.877703 15.7869 1.13804L8.51422 7.80467C8.37222 7.93483 8.18603 8 8.00003 8Z",fill:"white"})})})};function FaqItem({faq:e={}}){let{question:i="",answer:n=""}=e||{},[s,r]=(0,a.useState)(!1);return(0,t.jsxs)(m,{children:[(0,t.jsxs)("div",{className:"header",onClick:()=>{r(!s)},children:[t.jsx("label",{className:"question-text",children:i}),t.jsx("span",{className:"arrow",children:s?t.jsx(faqitem_UpArrow,{}):t.jsx(faqitem_DownArrow,{})})]}),s&&t.jsx("div",{className:"answer-container",children:t.jsx("label",{className:"content",children:n})}),t.jsx("hr",{className:"seprator"})]})}var u=n(7114);function FAQs({faqs:e=[]}){let i=(0,u.useRouter)();return(0,a.useEffect)(()=>{if(i.asPath!==i.route){let e=i.asPath.substring(i.asPath.indexOf("#")+1),n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})}},[i.asPath]),(0,t.jsxs)(c,{id:"faqsection",children:[t.jsx("label",{className:"title-text",children:"FAQS"}),t.jsx("div",{className:"faq-list-conainer",children:e.map((e,i)=>e?t.jsx(FaqItem,{faq:e},i):null)})]})}let h={result:{title:"Get in Touch",imageUrl:"autherImageUrl",description:"We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers. You can connect with us with these details.",faqs:[{question:"How Can I Get a Signed Book?",answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec ipsum non ante tincidunt suscipit vel non libero."},{question:"1914 translation by H. Rackham?",answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec ipsum non ante tincidunt suscipit vel non libero."},{question:"The standard Lorem Ipsum passage, used since the 1500s?",answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec ipsum non ante tincidunt suscipit vel non libero."},{question:"written by Cicero in 45 BC?",answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec ipsum non ante tincidunt suscipit vel non libero."},{question:"How Can I Get a Signed Book?",answer:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec ipsum non ante tincidunt suscipit vel non libero."}],professionalInquiries:{title:"For Professional Inquiries",address:"No: 09a, Downtown, San Diego, USA.",email:"support@pages.com",phone:"1-800-123-9999"}}};function ContactUsLandingPage(){let{title:e="",imageUrl:i="",description:n="",faqs:a=[],professionalInquiries:s={}}=h.result;return(0,t.jsxs)(r,{children:[t.jsx(AuthorImage,{imageUrl:i,title:e,description:n}),t.jsx(SendMessge,{}),t.jsx(FAQs,{faqs:a}),t.jsx(ProfessionalInquiries,{professionalInquiries:s})]})}var g=n(8707);let page=()=>(0,t.jsxs)(t.Fragment,{children:[t.jsx(ContactUsLandingPage,{}),t.jsx(g.default,{})]})},7151:(e,i,n)=>{"use strict";n.r(i),n.d(i,{$$typeof:()=>r,__esModule:()=>s,default:()=>l});var t=n(7536);let a=(0,t.createProxy)(String.raw`/Users/yashbhardwaj/Documents/luxuary_books_web/src/app/contactus/page.tsx`),{__esModule:s,$$typeof:r}=a,o=a.default,l=o},61:()=>{}};var i=require("../../webpack-runtime.js");i.C(e);var __webpack_exec__=e=>i(i.s=e),n=i.X(0,[795,104,529,232],()=>__webpack_exec__(5286));module.exports=n})();