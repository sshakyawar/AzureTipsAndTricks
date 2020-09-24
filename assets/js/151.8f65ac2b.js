(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{442:function(t,e,r){"use strict";r.r(e);var a=r(43),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("🦄 Checkout my "),r("a",{attrs:{href:"https://twitch.tv/mbcrump?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitch Azure Developer Streaming"),r("OutboundLink")],1),t._v("!")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/migrate/migrate-services-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Migrate"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=_7wV-PrkaBY&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=2?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to assess and migrate web apps to Azure with Azure Migrate"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h4",{attrs:{id:"assess-and-migrate-web-apps-to-azure-with-azure-migrate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assess-and-migrate-web-apps-to-azure-with-azure-migrate","aria-hidden":"true"}},[t._v("#")]),t._v(" Assess and migrate web apps to Azure with Azure Migrate")]),t._v(" "),r("p",[t._v("You might have one or more applications that run in a server in your own datacenter, or on your own computer. And you might want to move those applications to Azure in the easiest way possible.")]),t._v(" "),r("p",[t._v("You can move your existing applications to Azure with "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/migrate/migrate-services-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Migrate"),r("OutboundLink")],1),t._v(". This is a set of services and tools, designed to help you assess and move your applications to Azure.")]),t._v(" "),r("p",[t._v("In this article, we are going to move an existing web application to Azure using Azure Migrate.")]),t._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),r("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),r("ul",[r("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),r("OutboundLink")],1),t._v(" before you begin)")]),t._v(" "),r("li",[t._v("An ASP.NET Forms application targeting .NET Framework 4 or later, that runs on your local machine")])]),t._v(" "),r("h4",{attrs:{id:"getting-ready-to-assess-and-migrate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-ready-to-assess-and-migrate","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting ready to assess and migrate")]),t._v(" "),r("p",[t._v("I have an older ASP.NET Forms application that was built with ASP.NET 4. It is running fine on my local computer in "),r("a",{attrs:{href:"https://www.iis.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iiS (Internet Information Services)"),r("OutboundLink")],1),t._v(" and I want to move it to Azure.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32original.png")}}),t._v(" "),r("p",[t._v("(ASP.NET Forms website running on my local machine)")]),t._v(" "),r("p",[t._v("To start the assessment and migration process, we'll begin in the Azure portal.")]),t._v(" "),r("ol",[r("li",[t._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure portal"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Click the "),r("strong",[t._v("Create a resource")]),t._v(" button (the plus-sign in the top left corner)")]),t._v(" "),r("li",[t._v("Search for "),r("strong",[t._v("Azure Migrate")]),t._v(" and click on the result to start creating one\na. This brings you to the overview page of Azure Migrate")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32migratehome.png")}}),t._v(" "),r("p",[t._v("(Azure Migrate in the Azure portal)")]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("On the Azure Migrate overview page, click on the "),r("strong",[t._v("Assess and migrate web apps")]),t._v(" button. This takes you to the "),r("strong",[t._v("Migrate to Azure App Service")]),t._v(" page")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32migratedownload.png")}}),t._v(" "),r("p",[t._v("(Migrate to Azure App Services page)")]),t._v(" "),r("p",[t._v("On this page, you can choose to assess and migrate your web app by entering a public URL to the app, or by downloading and installing the "),r("a",{attrs:{href:"https://appmigration.microsoft.com/readiness?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration Assistant tool"),r("OutboundLink")],1),t._v(" on your computer.\nI'm going to choose to "),r("strong",[t._v("download and install the Migration Assistant tool")]),t._v(", because my application isn't accessible through the internet. The Migration Assistant can assess and migrate websites that are running on iiS version 7.0 or higher. At the moment, the tool is only available for Windows.")]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("Click "),r("strong",[t._v("Download")]),t._v(" to download the "),r("strong",[t._v("Migration Assistant tool")])]),t._v(" "),r("li",[t._v("Once the download is complete, install and run the tool")])]),t._v(" "),r("h4",{attrs:{id:"assess-and-migrate-the-app-to-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assess-and-migrate-the-app-to-azure","aria-hidden":"true"}},[t._v("#")]),t._v(" Assess and migrate the app to Azure")]),t._v(" "),r("p",[t._v("We now have the Migration Assistant tool on our local computer and we can start to assess and migrate the application.\nThe Migration Assistant will migrate our application to an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service Web App"),r("OutboundLink")],1),t._v(", which is a webserver-as-a-service that runs in Azure.")]),t._v(" "),r("ol",[r("li",[t._v("Open the "),r("strong",[t._v("Migration Assistant")]),t._v(" application")]),t._v(" "),r("li",[t._v("The tool will show you the websites that are running in iiS. Select the "),r("strong",[t._v("ASP.NET Forms website")]),t._v(" and click "),r("strong",[t._v("Next")]),t._v(".\na. The tool will now assess the application to see if it can run in Azure and if anything needs to be changed. This will result in an "),r("strong",[t._v("Assessment Report")]),t._v(" like in the image below:")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32migrationtool.png")}}),t._v(" "),r("p",[t._v("(Assessment Report in the Migration Assistant)")]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("In this case, the Assessment Report shows no errors that prevent the application from being migrated to Azure. There is one warning about application settings that might not be migrated over. However, I don't need to migrate any settings over, so I'll ignore that warning and click "),r("strong",[t._v("Migrate")])]),t._v(" "),r("li",[t._v("Next, I need to log into Azure. I can do that by going to this "),r("a",{attrs:{href:"https://microsoft.com/devicelogin?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("login page"),r("OutboundLink")],1),t._v(" and entering the "),r("strong",[t._v("code")]),t._v(" that is shown in the Migration Assistant. I also need to authenticate with my Azure account")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32authenticate.png")}}),t._v(" "),r("p",[t._v("(Device Code in the Migration Assistant)")]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("Once logged in, we need to enter the details of the App Service that we are migrating the application to\na. Create or select a "),r("strong",[t._v("Resource Group")]),t._v("\nb. Fill in a "),r("strong",[t._v("Name")]),t._v(" for the App Service\nc. Pick a "),r("strong",[t._v("Region")]),t._v("\nd. Leave the "),r("strong",[t._v("Database")]),t._v(" option to "),r("strong",[t._v("Skip database setup")]),t._v(" as our application doesn't use a database\ne. Click "),r("strong",[t._v("Migrate")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32azureoptions.png")}}),t._v(" "),r("p",[t._v("(Azure Options in the Migration Assistant)")]),t._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[t._v("The migration will start. Once it is done, you'll see the "),r("strong",[t._v("Migration Results")]),t._v(", like in the image below:")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32migrationresults.png")}}),t._v(" "),r("p",[t._v("(Migration Results in the Migration Assistant)")]),t._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[t._v("In the Migration Results, click the "),r("strong",[t._v("Go to your website")]),t._v(" button. This opens a browser and loads our application:")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/32result.png")}}),t._v(" "),r("p",[t._v("(Migration Results in the Migration Assistant)")]),t._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/migrate/migrate-services-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Migrate"),r("OutboundLink")],1),t._v(" offers a suite of tools to migrate your application to Azure. And for an internal web application, the "),r("a",{attrs:{href:"https://appmigration.microsoft.com/readiness?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration Assistant tool"),r("OutboundLink")],1),t._v(" can help you migrate to an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service Web App"),r("OutboundLink")],1),t._v(" in minutes. Go and check it out!")])])},[],!1,null,null,null);e.default=i.exports}}]);