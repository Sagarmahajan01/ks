"use strict";(self.webpackChunkkid_script=self.webpackChunkkid_script||[]).push([[909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7759:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},s="Patterns and Loops",i={unversionedId:"tutorial-basics/Patterns-and-Loops",id:"tutorial-basics/Patterns-and-Loops",isDocsHomePage:!1,title:"Patterns and Loops",description:"\ud83d\udcd6 Imagine you're a music conductor, and your computer friend, the \"Loop Composer,\" can play a series of actions in a pattern. It's like creating a rhythm that repeats and makes amazing things happen!",source:"@site/docs/tutorial-basics/Patterns-and-Loops.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Patterns-and-Loops",permalink:"/docs/tutorial-basics/Patterns-and-Loops",editUrl:"https://github.com/mayurpatil77/KidScript/tree/main/docs/tutorial-basics/Patterns-and-Loops.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Making Choices with Conditionals",permalink:"/docs/tutorial-basics/Making-Choices-with-Conditionals"},next:{title:"Introduction-to-Websites",permalink:"/docs/tutorial-extras/Introduction-to-Websites"}},p=[{value:"Understanding Patterns",id:"understanding-patterns",children:[]}],l={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"patterns-and-loops"},"Patterns and Loops"),(0,a.kt)("p",null,"\ud83d\udcd6 Imagine you're a music conductor, and your computer friend, the \"Loop Composer,\" can play a series of actions in a pattern. It's like creating a rhythm that repeats and makes amazing things happen!"),(0,a.kt)("h3",{id:"understanding-patterns"},"Understanding Patterns"),(0,a.kt)("p",null,"Patterns are like the beat in a song that repeats. Just like a melody repeats in music, patterns let the Loop Composer do actions over and over again in a specific order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"drawStar();\nmoveForward();\n")),(0,a.kt)("p",null,"In this example, the Loop Composer draws a star and then moves forward. It repeats this pattern, creating a line of stars!"),(0,a.kt)("h6",{id:"looping-like-a-pro"},"Looping Like a Pro"),(0,a.kt)("p",null,"Loops are like telling the Loop Composer to play a pattern multiple times. Imagine painting a row of houses\u2014it's the same action repeated!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Loop Example\nfor (houseNumber = 1; houseNumber <= 5; houseNumber++) {\n  paintHouse(houseNumber);\n}\n")),(0,a.kt)("p",null,"In this loop, the Loop Composer paints houses from 1 to 5. It keeps going until it paints all the houses!"),(0,a.kt)("h6",{id:"different-types-of-loops"},"Different Types of Loops"),(0,a.kt)("p",null,"Just like different dance moves, there are different types of loops. Here are a couple:"),(0,a.kt)("h6",{id:"for-loop"},"For Loop"),(0,a.kt)("p",null,"For a set number of times, like counting to 10:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"for (count = 1; count <= 10; count++) {\n  doSomething();\n}\n")),(0,a.kt)("h6",{id:"while-loop"},"While Loop"),(0,a.kt)("p",null,"As long as a condition is true, keep going:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"while (isSunny) {\n  goOutside();\n}\n")),(0,a.kt)("h6",{id:"unleash-creativity-with-patterns"},"Unleash Creativity with Patterns"),(0,a.kt)("p",null,"Patterns let you create cool designs and art! Imagine drawing rows of hearts or filling the screen with stars. The Loop Composer can do it all!"),(0,a.kt)("h6",{id:"why-patterns-and-loops-matter"},"Why Patterns and Loops Matter"),(0,a.kt)("p",null,"Patterns and loops help you do things faster and make artful creations. Like a dance routine, loops repeat actions, and patterns make them look awesome!"),(0,a.kt)("h6",{id:"creating-art-with-code"},"Creating Art with Code"),(0,a.kt)("p",null,"Now, let's create a digital canvas with the Loop Composer, making a colorful pattern of stars!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Art Example\nstartCanvas();\nfor (starNumber = 1; starNumber <= 10; starNumber++) {\n  drawStar(starNumber);\n}\n")),(0,a.kt)("p",null,"In this art adventure, the Loop Composer starts the canvas and draws 10 stars in a row. Each loop creates a stunning pattern that fills the digital space with sparkles."),(0,a.kt)("p",null,"\ud83d\ude80 With patterns and loops, you're not only learning to code\u2014you're also becoming a creative conductor, guiding the Loop Composer to craft beautiful rhythms in the virtual world!"))}u.isMDXComponent=!0}}]);