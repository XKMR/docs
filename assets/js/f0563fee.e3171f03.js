"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{5186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),o=["components"],r={sidebar_position:1},l="Transactions",c={unversionedId:"concepts/transactions",id:"concepts/transactions",isDocsHomePage:!1,title:"Transactions",description:"We think of a transaction as an encapsulation of events that compose a single unit of service for a web application.",source:"@site/docs/concepts/transactions.md",sourceDirName:"concepts",slug:"/concepts/transactions",permalink:"/docs/concepts/transactions",editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/concepts/transactions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Limits",permalink:"/docs/overview/limits"},next:{title:"Main entry point does not exist",permalink:"/docs/troubleshooting/main-entry-point-does-not-exist"}},p=[{value:"Transaction components",id:"transaction-components",children:[]},{value:"Using transactions for analysis and debugging",id:"using-transactions-for-analysis-and-debugging",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Timeline",id:"timeline",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transactions"},"Transactions"),(0,s.kt)("p",null,"We think of a ",(0,s.kt)("em",{parentName:"p"},"transaction")," as an encapsulation of events that compose a single unit of service for a web application. "),(0,s.kt)("p",null,"These events consist of an entire end-to-end lifecycle of a single request handled by an app. The cyclic runtime instruments applications with tooling that captures, measures and aggregates network requests, responses, application logs, errors and exceptions to provide full visibility for each call. "),(0,s.kt)("h2",{id:"transaction-components"},"Transaction components"),(0,s.kt)("p",null,"Each transaction is composed of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The request sent by the caller:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"url"),(0,s.kt)("li",{parentName:"ul"},"method"),(0,s.kt)("li",{parentName:"ul"},"query string"),(0,s.kt)("li",{parentName:"ul"},"headers"),(0,s.kt)("li",{parentName:"ul"},"payload"),(0,s.kt)("li",{parentName:"ul"},"source ip"),(0,s.kt)("li",{parentName:"ul"},"user agent"))),(0,s.kt)("li",{parentName:"ul"},"App initialization output"),(0,s.kt)("li",{parentName:"ul"},"App logging output to console or from any loggers:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"log payload"),(0,s.kt)("li",{parentName:"ul"},"type of io ",(0,s.kt)("inlineCode",{parentName:"li"},"stdout"),",",(0,s.kt)("inlineCode",{parentName:"li"},"stderr")))),(0,s.kt)("li",{parentName:"ul"},"Exceptions and runtime errors"),(0,s.kt)("li",{parentName:"ul"},"The response from your application:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"http status code"),(0,s.kt)("li",{parentName:"ul"},"headers"),(0,s.kt)("li",{parentName:"ul"},"payload body")))),(0,s.kt)("h2",{id:"using-transactions-for-analysis-and-debugging"},"Using transactions for analysis and debugging"),(0,s.kt)("p",null,"In a addition to the cyclic realtime log stream, transactions are a great way to understand what is happening in your application.\nTransactions are available as a tab on an application view, each request to an app is presented as a request-response pair."),(0,s.kt)("h3",{id:"request"},"Request"),(0,s.kt)("p",null,"Given a sample request made via ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ curl 'https://my-app.cyclic.app/?hello=world'  \nok\n")),(0,s.kt)("p",null,"The request payload can be viewed as:\n",(0,s.kt)("img",{alt:"Transaction Request",src:n(5320).Z,title:"Transaction Request"})),(0,s.kt)("h3",{id:"response"},"Response"),(0,s.kt)("p",null,"Similarly, the details of the response are viewable as:\n",(0,s.kt)("img",{alt:"Transaction Response",src:n(284).Z,title:"Transaction Response"})),(0,s.kt)("h3",{id:"timeline"},"Timeline"),(0,s.kt)("p",null,"On the back end, we had a single api handler at the root ",(0,s.kt)("inlineCode",{parentName:"p"},"/")," route implemented as:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  app.get('/',async (req, res) => {\n    console.log(req.headers['user-agent'])\n    console.log(Date.now())\n    console.log(req.query)\n    console.error('this is an error')\n    return res.send('ok')\n  })\n")),(0,s.kt)("p",null,"Cyclic presents the timeline of the logs, errors and exceptions in context of the request and response in an easy to read, syntax highlighted timeline as:\n",(0,s.kt)("img",{alt:"Transaction Timeline",src:n(7556).Z,title:"Transaction Timeline"})),(0,s.kt)("h2",{id:"limitations"},"Limitations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cyclic currently allows viewing transactions from the last 15 minutes"),(0,s.kt)("li",{parentName:"ul"},"Keyword and date filters are not yet available")))}d.isMDXComponent=!0},7556:function(e,t,n){t.Z=n.p+"assets/images/history-994bf7f57086200984a363bef193bc13.png"},5320:function(e,t,n){t.Z=n.p+"assets/images/request-20309e4430a1697286dfec706cd63986.png"},284:function(e,t,n){t.Z=n.p+"assets/images/response-07035c450d02a6814b995992db0db137.png"}}]);