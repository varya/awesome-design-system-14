(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{UOgP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("q1tI");var o=n("7ljp"),a=n("ElOL");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},l={_frontmatter:i},c=a.a;function u(e){var t=e.components,n=r(e,["components"]);return Object(o.b)(c,s({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it."),Object(o.b)("h2",null,"Awesome Button"),Object(o.b)("h3",null,"Primary Button"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live nocode",live:!0,nocode:!0}),'<AwesomeButton type="primary">Primary</AwesomeButton>\n')),Object(o.b)("h3",null,"Button sizes"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'\nThere is a <AwesomeButton\n  size="small"\n  type="primary"\n>\n  Small\n</AwesomeButton>, <AwesomeButton\n  size="medium"\n  type="primary"\n>\n  Medium\n</AwesomeButton>, and <AwesomeButton\n  size="large"\n  type="primary"\n>\n  Large\n</AwesomeButton>!\n')),Object(o.b)("h3",null,"Button with Icon"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<AwesomeButton size="icon" type="primary">\n  <i className="fa fa-codepen" />\n</AwesomeButton>\n')),Object(o.b)("h2",null,"Progress Button"),Object(o.b)("h3",null,"Secondary Progress Button"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<AwesomeButtonProgress type="secondary">Secondary</AwesomeButtonProgress>\n')),Object(o.b)("h2",null,"Social Button"),Object(o.b)("p",null,"Social buttons use brand colors of social networks and display their button. You can provide\nare URL to there the social button navigates."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<AwesomeButtonSocial\n  type="facebook"\n  url="http://bridgetool.io/"\n>\n  Facebook\n</AwesomeButtonSocial>\n\n<AwesomeButtonSocial\n  type="twitter"\n  url="http://bridgetool.io/"\n>\n  Twitter\n</AwesomeButtonSocial>\n\n<AwesomeButtonSocial\n  type="instagram"\n  url="http://bridgetool.io/"\n>\n  Instagram\n</AwesomeButtonSocial>\n')),Object(o.b)("h2",null,"Actions"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"action")," property to provide a callback on the button click. This is how\nthe button works in a simple counter application."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript",metastring:"live noinline",live:!0,noinline:!0}),"function DemoApp() {\n  const [count, setCount] = React.useState(0)\n  return (\n    <div>\n      <AwesomeButton action={() => setCount(n => n - 1)}>-</AwesomeButton>\n      {count}\n      <AwesomeButton action={() => setCount(n => n + 1)}>+</AwesomeButton>\n    </div>\n  )\n}\nrender(<DemoApp />)\n")),Object(o.b)("h2",null,"How this page works"),Object(o.b)("p",null,"This page documents ",Object(o.b)("inlineCode",{parentName:"p"},"<AwesomeButton>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<AwesomeButtonProgress>"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"<AwesomeButtonSocial>")," components from ",Object(o.b)("a",s({parentName:"p"},{href:"https://caferati.me/demo/react-awesome-button"}),"React Awesome Button library"),"."),Object(o.b)("p",null,"We expend the Gatsby theme of this website adding special files to ",Object(o.b)("inlineCode",{parentName:"p"},"./src/@bridgetool/gatsby-theme-dev"),"."),Object(o.b)("p",null,"To make the components available in the examples, we link the library in ",Object(o.b)("inlineCode",{parentName:"p"},"live-code-scope.js")," and list all\nits components."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-js"}),'import * as awesomeButtons from "react-awesome-button"\nimport "react-awesome-button/dist/styles.css"\n\nexport default {\n  // ... other libraries and/or components\n  ...awesomeButtons,\n}\n')),Object(o.b)("p",null,"Besides, it can be used in markdown. To make it happen, we put this component to the global scope listing it in\n",Object(o.b)("inlineCode",{parentName:"p"},"components/wrap-root-element-custom.js")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-js"}),'import * as awesomeButtons from "react-awesome-button"\nimport "react-awesome-button/dist/styles.css"\n\nexport default {\n  // ... other libraries and/or components\n  ...awesomeButtons,\n}\n')),Object(o.b)("p",null,"The icon button uses FontAwesome, so we linked it from CDN. Look at the ",Object(o.b)("a",s({parentName:"p"},{href:"/awesome-design-system-14/__admin/getting-started/customizing#link-css-files"}),"Customizing")," page to learn how."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-components-buttons-md-f80247fdd3a06190dcb8.js.map