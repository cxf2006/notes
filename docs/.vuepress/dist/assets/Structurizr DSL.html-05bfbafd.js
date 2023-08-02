import{_ as r,o as t,c as e,b as i}from"./app-846c6d50.js";const c={},a=i('<h1 id="编写工具" tabindex="-1"><a class="header-anchor" href="#编写工具" aria-hidden="true">#</a> 编写工具</h1><p>​ 编写Structurizr DSL代码时使用的编辑工具为vs code，需要安装C4 DSL Extension插件。</p><p>​ 该插件具有语法高亮显示，基本语义检查。介绍上还可以实时显示Structurizr DSL描述的图形，图形解析是外部共用服务解析的，需要将定义语言上传，一般不启用(试用时也没配出来)。</p><h1 id="语言解析" tabindex="-1"><a class="header-anchor" href="#语言解析" aria-hidden="true">#</a> 语言解析</h1><p>​ 编写完Structurizr DSL后需要专门服务解析出图形。已知可以解析Structurizr DSL的工具或服务有：</p><p>​ c4viz:https://github.com/pmorch/c4viz</p><p>​ StructurizrSiteGeneratr:https://github.com/avisi-cloud/structurizr-site-generatr</p><p>​ Kroki:https://kroki.io/</p><p>​ Git for Confluence | Markdown, PlantUML, Graphviz, Mermaid:https://marketplace.atlassian.com/apps/1211675/git-for-confluence-markdown-plantuml-graphviz-mermaid?tab=overview&amp;hosting=cloud</p><p>​ Structurizr on-premises:https://structurizr.com/help/on-premises</p><p>​ Structurizr cloud service:https://structurizr.com/help/cloud-service</p><p>​ <strong>Structurizr Lite</strong>:https://structurizr.com/help/lite</p><p>​ 后续使用structurizr Lite进行Structurizr DSL的解析。</p><h1 id="关于structurizr-dsl编写和调试" tabindex="-1"><a class="header-anchor" href="#关于structurizr-dsl编写和调试" aria-hidden="true">#</a> 关于Structurizr DSL编写和调试</h1><p>​ Structurizr Lite是一个java写的web应用，需要设置数据存储目录，也叫工作空间。在编写时vs code直接打开Structurizr Lite的工作空间目录，编写修改该目录下的xxx.dsl文件。编写结束后，直接保存，到Structurizr Lite刷新显示界面即可看到最新图标效果。</p><h1 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h1>',16),u=[a];function s(o,p){return t(),e("div",null,u)}const n=r(c,[["render",s],["__file","Structurizr DSL.html.vue"]]);export{n as default};
