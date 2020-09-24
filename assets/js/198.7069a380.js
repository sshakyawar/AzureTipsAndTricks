(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{473:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("🔥 Make sure you "),s("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),s("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Key Vault"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://azure.microsoft.com/resources/videos/azure-key-vault-developer-quick-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with Azure Key Vault"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"using-secrets-in-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-secrets-in-scripts","aria-hidden":"true"}},[e._v("#")]),e._v(" Using secrets in scripts")]),e._v(" "),s("p",[e._v("When you write deployment scripting you often need secrets / passwords. Using these secrets is often done by using variables and storing the plain text password or secure object (which is still security through obscurity). In some cases people parameterize the values and have to input the secrets / passwords upon runtime. If you're working with a large number of secrets the latter can be quite time consuming.")]),e._v(" "),s("h4",{attrs:{id:"_1-leveraging-the-azure-key-vault"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-leveraging-the-azure-key-vault","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Leveraging the Azure Key Vault")]),e._v(" "),s("p",[e._v("When using Microsoft Azure, it's a best practice to store your secrets in the Azure Key Vault. This can also be done when scripting your deployments. If you're deploying ARM Templates, you can query the key vault directly during the deployment ("),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli"),s("OutboundLink")],1),e._v(") and this is often the most secure way.")]),e._v(" "),s("p",[e._v("However, sometimes you're just not deploying using ARM templates or you're using a combination of tools. Maybe you're not even deploying to Azure and you just need a place to store your secrets. Key Vault is there for you 😃")]),e._v(" "),s("h4",{attrs:{id:"_2-code-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-code-samples","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Code samples")]),e._v(" "),s("p",[e._v("Note that the code requires you to be logged in to Azure using either Azure PowerShell or Azure CLI (depending on your preference).")]),e._v(" "),s("h5",{attrs:{id:"powershell-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-version","aria-hidden":"true"}},[e._v("#")]),e._v(" PowerShell version")]),e._v(" "),s("p",[e._v('The following code will retrieve all the secrets from your Azure KeyVault and store them in the hash table "'),s("em",[e._v("$keys")]),e._v('".')]),e._v(" "),s("p",[e._v('Upon successful execution you can request the secrets from the table by simple parsing "'),s("em",[e._v("$keys.NameOfYourKeyVaultSecret")]),e._v('"')]),e._v(" "),s("p",[e._v('For example "'),s("em",[e._v("$keys.storageAccountkey")]),e._v('" would return the secret value of the "storageAccountKey" as stored in the Azure KeyVault.')]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'KeyVaultName'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secrets")]),e._v(" = Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AzKeyVaultSecret "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("VaultName "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keys")]),e._v(" =@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("foreach")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secret")]),e._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secrets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),e._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$key")]),e._v(" = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Get"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AzKeyVaultSecret "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("VaultName "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SecretValueText\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),e._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$key")]),e._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("h5",{attrs:{id:"azure-cli-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-version","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure CLI version")]),e._v(" "),s("p",[e._v("The following code will retrieve all the secrets from your Azure KeyVault and store them in the associative array, secrets. Associative arrays were introduced with Bash version 4.")]),e._v(" "),s("p",[e._v("Upon successful execution you can request the secrets from the table by simple parsing "),s("code",[e._v("${secrets[NameOfYourKeyVaultSecret]}")]),e._v(".")]),e._v(" "),s("p",[e._v("For example "),s("code",[e._v("${secrets[storageAccountKey]}")]),e._v(' would return the secret value of the "storageAccountKey" as stored in the Azure KeyVault.')]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("keyvaultName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'KeyVaultName'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("declare")]),e._v(" -A secrets\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az keyvault secret list --vault-name $keyvaultName --query "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[].name"')]),e._v(" --output tsv"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  secrets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$name")]),e._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az keyvault secret show --name $name --vault-name $keyvaultName --query value --output tsv"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);