"use strict";(self.webpackChunkkid_script=self.webpackChunkkid_script||[]).push([[303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4157:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},r="Making Choices with Conditionals",s={unversionedId:"tutorial-basics/Making-Choices-with-Conditionals",id:"tutorial-basics/Making-Choices-with-Conditionals",isDocsHomePage:!1,title:"Making Choices with Conditionals",description:'\ud83d\udcd6 Imagine your computer friend, the "Choice Wizard," can make decisions based on special conditions you set. It\'s like having a helper who follows different paths depending on the situation!',source:"@site/docs/tutorial-basics/Making-Choices-with-Conditionals.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Making-Choices-with-Conditionals",permalink:"/docs/tutorial-basics/Making-Choices-with-Conditionals",editUrl:"https://github.com/mayurpatil77/KidScript/tree/main/docs/tutorial-basics/Making-Choices-with-Conditionals.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sequences and Instructions",permalink:"/docs/tutorial-basics/Sequences-and-Instructions"},next:{title:"Patterns and Loops",permalink:"/docs/tutorial-basics/Patterns-and-Loops"}},l=[{value:"Understanding &quot;If&quot; and &quot;Else&quot;",id:"understanding-if-and-else",children:[{value:"What Are Conditionals?",id:"what-are-conditionals",children:[]},{value:"Why Conditionals Matter",id:"why-conditionals-matter",children:[]}]}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"making-choices-with-conditionals"},"Making Choices with Conditionals"),(0,a.kt)("p",null,'\ud83d\udcd6 Imagine your computer friend, the "Choice Wizard," can make decisions based on special conditions you set. It\'s like having a helper who follows different paths depending on the situation!'),(0,a.kt)("h2",{id:"understanding-if-and-else"},'Understanding "If" and "Else"'),(0,a.kt)("p",null,'\ud83d\udd0d Think of "if" as asking a question, like, "Is it raining?" If the answer is yes, the Choice Wizard does what\'s inside the curly braces {}. '),(0,a.kt)("p",null,'If the answer is no, it goes to the "else" part and does what\'s inside those curly braces {}.'),(0,a.kt)("p",null,"For example, if it's raining, the Choice Wizard grabs an umbrella. If it's not raining, it wears sunglasses."),(0,a.kt)("h3",{id:"what-are-conditionals"},"What Are Conditionals?"),(0,a.kt)("p",null,'Conditionals are like "if-then" rules for the Choice Wizard. You tell the Choice Wizard what to do if something is true or false. It\'s like giving directions based on different scenarios.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"if (isRaining) {\n  grabUmbrella();\n} else {\n  wearSunglasses();\n}\n")),(0,a.kt)("p",null,"In this example, if it's raining, the Choice Wizard grabs an umbrella. If not, it wears sunglasses. The Choice Wizard chooses a path based on the situation!"),(0,a.kt)("h6",{id:"making-decisions-with-code"},"Making Decisions with Code"),(0,a.kt)("p",null,"Imagine being a detective with a magnifying glass! You investigate and make choices:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// Detective Example\nif (findClues) {\n  followFootprints();\n} else {\n  askWitnesses();\n}\n")),(0,a.kt)("p",null,"Here, if you find clues, you follow footprints. If not, you ask witnesses. Just like that, the Choice Wizard makes decisions in code!"),(0,a.kt)("h3",{id:"why-conditionals-matter"},"Why Conditionals Matter"),(0,a.kt)("p",null,'Conditionals help computers act smarter. Like a "Choose Your Own Adventure" book, they let the Choice Wizard take different routes. Computers can adapt and act based on the information they have.'),(0,a.kt)("h6",{id:"creating-pathways-in-code"},"Creating Pathways in Code"),(0,a.kt)("p",null,"Now, let's create a digital journey with the Choice Wizard through a magic forest using conditionals!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Journey Example\nstartAdventure();\nif (findKey) {\n  openDoor();\n} else {\n  climbTree();\n}\n")),(0,a.kt)("p",null,"In this journey, the Choice Wizard starts the adventure. If it finds a key, it opens a door. If not, it climbs a tree. Each choice shapes the adventure, and the Choice Wizard navigates through the digital forest in different ways."),(0,a.kt)("p",null,"\ud83d\ude80 With conditionals, you're not just coding\u2014you're empowering the Choice Wizard to make smart decisions and explore unique paths in the virtual world!"))}u.isMDXComponent=!0}}]);