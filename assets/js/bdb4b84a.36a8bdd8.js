"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[422],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},s="Using MongoDB",a={unversionedId:"how-to/using-mongo-db",id:"how-to/using-mongo-db",title:"Using MongoDB",description:"Atlas Configuration",source:"@site/docs/how-to/using-mongo-db.md",sourceDirName:"how-to",slug:"/how-to/using-mongo-db",permalink:"/how-to/using-mongo-db",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/how-to/using-mongo-db.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add a custom domain",permalink:"/how-to/add-custom-domain-for-an-app"},next:{title:"Main entry point does not exist",permalink:"/troubleshooting/main-entry-point-does-not-exist"}},l={},c=[{value:"Atlas Configuration",id:"atlas-configuration",level:2},{value:"Connections in a Serverless Runtime",id:"connections-in-a-serverless-runtime",level:2},{value:"Connection Example MongoClient",id:"connection-example-mongoclient",level:2},{value:"Connection Example Mongoose",id:"connection-example-mongoose",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-mongodb"},"Using MongoDB"),(0,r.kt)("h2",{id:"atlas-configuration"},"Atlas Configuration"),(0,r.kt)("p",null,"Cyclic apps do not have static IP's for white listing with Atlas and Cyclic does not offer private networking on free tier."),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," will enable access to your service cluster from all IP's and make it possible for services to authenticate via connection string."),(0,r.kt)("h2",{id:"connections-in-a-serverless-runtime"},"Connections in a Serverless Runtime"),(0,r.kt)("p",null,"MongoDB is not an on-demand database and its connection mechanism is persistent, it can also take a moment to establish the connection for the first time. For best performance, avoid making a connection inside a route handler."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serverless environments are restarted frequently, often right when a request is made. "),(0,r.kt)("li",{parentName:"ul"},"A route handler may already be trying to serve the request before the ",(0,r.kt)("inlineCode",{parentName:"li"},"MongoClient.connect")," method finishes connecting."),(0,r.kt)("li",{parentName:"ul"},"This may result in a failure to respond from the server. ")),(0,r.kt)("p",null,"This behavior is possible in traditional long-running environments but occurs much less often  because the connection event happens only when the server is restarted. "),(0,r.kt)("admonition",{title:"Listen for requests after mongo has connected",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MongoDB connections should be established before a server's ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," method is called. To make sure this happens every time, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," method in the connect callback. ")),(0,r.kt)("h2",{id:"connection-example-mongoclient"},"Connection Example MongoClient"),(0,r.kt)("admonition",{title:"MongoClient connection in a serverless runtime",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is very important to make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoClient.connect")," is finished before allowing your app to serve requests. ")),(0,r.kt)("p",null,"This example does not start listening to ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," until the DB connection is established. Requests will be held in the Cyclic runtime to make sure none are ever missed, even if the connection takes a moment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst { MongoClient } = require(\'mongodb\');\nconst express = require(\'express\');\nconst app = express();\nconst PORT = process.env.PORT || 3000\n\nconst uri = process.env.MONGO_CONNECTION_STRING;\nconst client = new MongoClient(uri);\n\napp.get("/items/:my_item", async (req, res) => {\n    let my_item = req.params.my_item;\n    let item = await client.db("my_db")\n                .collection("my_collection")\n                .findOne({my_item: my_item})\n\n    return res.json(item)\n})\n\nclient.connect(err => {\n    if(err){ console.error(err); return false;}\n    // connection to mongo is successful, listen for requests\n    app.listen(PORT, () => {\n        console.log("listening for requests");\n    })\n});\n\n')),(0,r.kt)("h2",{id:"connection-example-mongoose"},"Connection Example Mongoose"),(0,r.kt)("admonition",{title:"Mongoose connection in a serverless runtime",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is very important to make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoose.connect")," is finished before allowing your app to serve requests. ")),(0,r.kt)("p",null,"This example does not start listening to ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," until the DB connection is established. Requests will be held in the Cyclic runtime to make sure none are ever missed, even if the connection takes a moment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express')\nconst mongoose = require('mongoose')\n\nconst app = express()\nconst PORT = process.env.PORT || 3000\n\nconst connectDB = async () => {\n  try {\n    const conn = await mongoose.connect(process.env.MONGO_URI);\n    console.log(`MongoDB Connected: ${conn.connection.host}`);\n  } catch (error) {\n    console.log(error);\n    process.exit(1);\n  }\n}\n\n//Routes go here\napp.all('*', (req,res) => {\n    res.json({\"every thing\":\"is awesome\"})\n})\n\n//Connect to the database before listening\nconnectDB().then(() => {\n    app.listen(PORT, () => {\n        console.log(\"listening for requests\");\n    })\n})\n")))}m.isMDXComponent=!0}}]);