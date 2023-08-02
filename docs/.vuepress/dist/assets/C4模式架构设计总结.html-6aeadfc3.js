import{_ as a,r as s,o as i,c,a as r,d as p,b as t}from"./app-846c6d50.js";const d="/assets/image-20230215140619545-8110c544.png",n="/assets/image-20230220095148594-aec4b823.png",u="/assets/image-20230220095219839-ba30f23a.png",h="/assets/image-20230220095243117-3697c263.png",o="/assets/image-20230215170113412-5ce6e2a4.png",l="/assets/image-20230202145110798-37ffe967.png",m="/assets/image-20230202132207520-a3ae5db0.png",z="/assets/image-20230203170736437-11821f86.png",g="/assets/image-20230215173616288-3ce8077f.png",b="/assets/image-20230202173627795-28ff104b.png",f={},v=t('<h1 id="c4概念介绍" tabindex="-1"><a class="header-anchor" href="#c4概念介绍" aria-hidden="true">#</a> C4概念介绍</h1><p>官网：https://c4model.com/</p><p>C4模型提出者介绍连接https://www.infoq.cn/article/C4-architecture-model/</p><p>敏捷模式下架构图使用减少，手绘或者通用图表工具设计架构图容易出现含糊不清的情况。</p><p>C4模型是用来画软件架构图的。</p><p>C4模型有四张主图、和三张扩展图。</p><p>C4的四张主图面向不同类型的受众，图之间的关系是由大到小，由粗到细，由全局到局部的关系。</p><p><img src="'+d+'" alt="image-20230215140619545"></p><h2 id="上下文图-context" tabindex="-1"><a class="header-anchor" href="#上下文图-context" aria-hidden="true">#</a> 上下文图(<strong>Context</strong>)</h2><p>​ 描述正在构建的软件系统与用户以及与其他软件系统的关系。</p><p><img src="'+n+'" alt="image-20230220095148594"></p><h2 id="容器图-container" tabindex="-1"><a class="header-anchor" href="#容器图-container" aria-hidden="true">#</a> 容器图(<strong>Container</strong>)</h2><p>​ 容器图，将软件系统放大，显示组成该软件系统的容器（应用程序、数据存储、微服务等）</p><p><img src="'+u+'" alt="image-20230220095219839"></p><h2 id="组件图-component" tabindex="-1"><a class="header-anchor" href="#组件图-component" aria-hidden="true">#</a> 组件图(<strong>Component</strong>)</h2><p>组件可以映射到代码库中的真实抽象（例如一组代码）</p><p><img src="'+h+'" alt="image-20230220095243117"></p><h2 id="代码图-code" tabindex="-1"><a class="header-anchor" href="#代码图-code" aria-hidden="true">#</a> 代码图(<strong>Code</strong>)</h2><p>它表明该组件由很多类组成，实现细节直接反映了代码。不建议创建在这种详细程度的图表，有时候以直接从大多数IDE 中获取它们。</p><p><img src="'+o+'" alt="image-20230215170113412"></p><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> 符号</h2><p>C4 模型没有预定义任何特定的符号，你在这些示例图中看到的是一个个简单的符号，适用于白板、纸张、便签、索引卡片和各种图表工具。你也可以使用 UML 作为符号，并适当使用包、组件和原型。无论你使用哪种符号，我都会建议让每个元素都包含名称、元素类型（即“人”、“软件系统”，“容器”或“组件”）、技术选型（如果有的话），以及一些描述性文字。在图表中包含如此多的文本可能看起来很不寻常，但这些附加文本有助于消除软件架构图中通常会出现的不明确的表示。</p><p>即使符号对你来说是显而易见的，仍然要确保为这 些符号提供图例。图例中应该包括颜色、形状、首字母缩略词、线条样式、边框、尺寸等。理想情况下，符号应该在每个细节层次上保持一致。下面是前面显示的容器图的图例。</p>',23),S={href:"https://s3.amazonaws.com/infoq.content.live.0/articles/C4-architecture-model/zh/resources/508-1530372963198.jpg",target:"_blank",rel:"noopener noreferrer"},_=r("img",{src:"https://static001.infoq.cn/resource/image/de/cc/dea25c68d4875a860b81efd1833245cc.jpg",alt:"img"},null,-1),x=t('<p>最后，不要忘记了标题，它应该出现在每个图表上，以明确地描述每个图表的类型和范围（例如，“网上银行系统的系统上下文图表”）。</p><h1 id="c4设计工具structurizr" tabindex="-1"><a class="header-anchor" href="#c4设计工具structurizr" aria-hidden="true">#</a> C4设计工具Structurizr</h1><p>官网：https://structurizr.com/</p><h2 id="structurizr-dsl" tabindex="-1"><a class="header-anchor" href="#structurizr-dsl" aria-hidden="true">#</a> Structurizr DSL</h2><h3 id="编写工具" tabindex="-1"><a class="header-anchor" href="#编写工具" aria-hidden="true">#</a> 编写工具</h3><p>​ 编写Structurizr DSL代码时使用的编辑工具为vs code，需要安装C4 DSL Extension插件。</p><p><img src="'+l+`" alt="image-20230202145110798"></p><p>​ 该插件具有语法高亮显示，基本语义检查。介绍上还可以实时显示Structurizr DSL描述的图形，图形解析是外部共用服务解析的，需要将定义语言上传，一般不启用。该插件经常卡死，一般使用该插件Structurizr DSL语法高亮的功能。</p><h3 id="语言解析" tabindex="-1"><a class="header-anchor" href="#语言解析" aria-hidden="true">#</a> 语言解析</h3><p>​ 编写完Structurizr DSL后需要专门服务解析出图形。已知可以解析Structurizr DSL的工具或服务有：</p><p>​ c4viz:https://github.com/pmorch/c4viz</p><p>​ StructurizrSiteGeneratr:https://github.com/avisi-cloud/structurizr-site-generatr</p><p>​ Kroki:https://kroki.io/</p><p>​ Git for Confluence | Markdown, PlantUML, Graphviz, Mermaid:https://marketplace.atlassian.com/apps/1211675/git-for-confluence-markdown-plantuml-graphviz-mermaid?tab=overview&amp;hosting=cloud</p><p>​ Structurizr on-premises:https://structurizr.com/help/on-premises</p><p>​ Structurizr cloud service:https://structurizr.com/help/cloud-service</p><p>​ <strong>Structurizr Lite</strong>:https://structurizr.com/help/lite</p><p>​ 后续使用structurizr Lite进行Structurizr DSL的解析。</p><h3 id="关于structurizr-dsl编写和调试" tabindex="-1"><a class="header-anchor" href="#关于structurizr-dsl编写和调试" aria-hidden="true">#</a> 关于Structurizr DSL编写和调试</h3><p>​ Structurizr Lite是一个java写的web应用，需要设置数据存储目录，也叫工作空间。在编写时vs code直接打开Structurizr Lite的工作空间目录，编写修改该目录下的xxx.dsl文件。编写结束后，直接保存，到Structurizr Lite刷新显示界面即可看到最新图标效果。</p><h2 id="structurizr-lite" tabindex="-1"><a class="header-anchor" href="#structurizr-lite" aria-hidden="true">#</a> Structurizr Lite</h2><p>安装参考连接：https://structurizr.com/share/76352/documentation#installation</p><h3 id="spring-boot启动包安装" tabindex="-1"><a class="header-anchor" href="#spring-boot启动包安装" aria-hidden="true">#</a> Spring Boot启动包安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> structurizr-lite.war <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PATH为structurizr的数据目录，该目录自定义。</p><p>docker方式安装，参考上面的连接。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><h4 id="工作空间" tabindex="-1"><a class="header-anchor" href="#工作空间" aria-hidden="true">#</a> 工作空间</h4><p>structurizr启动会到数据目录(工作空间)下查找并加载workspace.dsl和workspace.json文件(没有会自动创建)。</p><h4 id="structurizr-workspace-path" tabindex="-1"><a class="header-anchor" href="#structurizr-workspace-path" aria-hidden="true">#</a> STRUCTURIZR_WORKSPACE_PATH</h4><p>​ 工作空间可以使用环境变量配置统一的目录前缀。</p><h4 id="配置structurizr-properties" tabindex="-1"><a class="header-anchor" href="#配置structurizr-properties" aria-hidden="true">#</a> 配置structurizr.properties</h4><p>​ 该文件需要手动在工作空间目录下创建。参数解析如下：</p><table><thead><tr><th>参数名</th><th>解析</th></tr></thead><tbody><tr><td>structurizr.autoSaveInterval</td><td>自动保存设置，值单位为毫秒</td></tr><tr><td>structurizr.autoRefreshInterval</td><td>自动刷新设置，值单位为毫秒</td></tr><tr><td>structurizr.remote.workspaceId</td><td>远程工作空间(cloud service或On-premises上的工作空间)ID，</td></tr><tr><td>structurizr.remote.apiKey</td><td>远程工作空间apiKey</td></tr><tr><td>structurizr.remote.apiSecret</td><td>远程工作空间apiSecret</td></tr><tr><td>structurizr.remote.apiUrl</td><td>同步到On-premises服务对的地址，同步到cloud service不用设置</td></tr><tr><td>structurizr.remote.passphrase</td><td>客户端密钥，用户加密工作空间数据。<strong>付费功能</strong></td></tr><tr><td>structurizr.editable</td><td>是否只读，false为只读。</td></tr></tbody></table><h4 id="关于自动同步" tabindex="-1"><a class="header-anchor" href="#关于自动同步" aria-hidden="true">#</a> 关于自动同步</h4><p>​ 如果配置了自动同步参数，structurizr-lite启动时会从远程更新workspace.json数据。完成编辑关闭structurizr-lite时会自动同步到远程工作空间。编辑时发现变动也会自动同步。</p><h4 id="工作空间锁定" tabindex="-1"><a class="header-anchor" href="#工作空间锁定" aria-hidden="true">#</a> 工作空间锁定</h4><p>​ structurizr-lite结合远程工作空间锁定使用，在启动structurizr-lite之前打开远程工作空间的锁定，并且保持远程界面不关闭。structurizr-lite需要从环境变量STRUCTURIZR_USERNAME中获取远程Structurizr 服务的用户登录名称。设置好之后就可以正常使用。</p><h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h4><h5 id="系统启动后图片加载失败-或者界面变形。" tabindex="-1"><a class="header-anchor" href="#系统启动后图片加载失败-或者界面变形。" aria-hidden="true">#</a> 系统启动后图片加载失败，或者界面变形。</h5><p>​ 在数据目录(workspace.dsl所在目录)创建(如果没有)structurizr.properties文件，并且添加参数structurizr.url=XXX，XXX为系统访问的根路径。</p><p>​ 重启structurizr-lite。</p><h5 id="无法启动dot程序" tabindex="-1"><a class="header-anchor" href="#无法启动dot程序" aria-hidden="true">#</a> 无法启动dot程序</h5><p>​ 需要安装Graphviz。</p><p>​ 下载：https://graphviz.org/download/</p><p><img src="`+m+'" alt="image-20230202132207520"></p><p>​ 安装时选择将graphviz添加到环境变量。</p><h5 id="图表手动调整后-再次打开调整效果丢失。" tabindex="-1"><a class="header-anchor" href="#图表手动调整后-再次打开调整效果丢失。" aria-hidden="true">#</a> 图表手动调整后，再次打开调整效果丢失。</h5><p>​ 可能使被远程的自动布局效果给覆盖了。</p><h5 id="决策文档功能报404" tabindex="-1"><a class="header-anchor" href="#决策文档功能报404" aria-hidden="true">#</a> 决策文档功能报404</h5><p>http://192.168.1.101:8081/workspace/decisions/</p><p><img src="'+z+'" alt="image-20230203170736437"></p><p>暂未找到原因。正常界面：</p><p><img src="https://static.structurizr.com/img/help/decision-summary-screenshot.png" alt="Structurizr architecture decision records screenshot"></p><h2 id="structurizr-其他工具" tabindex="-1"><a class="header-anchor" href="#structurizr-其他工具" aria-hidden="true">#</a> Structurizr 其他工具</h2><p>​ 使用Structurizr设计C4模式软甲架构图时，使用Structurizr Lite 配置VsCode的Structurizr DSL插件即可。下面几个工具也Structurizr提供，这里简单的介绍下各工具的功能。</p><h3 id="structurizr-on-premises" tabindex="-1"><a class="header-anchor" href="#structurizr-on-premises" aria-hidden="true">#</a> Structurizr On-premises</h3><p>参考:https://structurizr.com/share/18571/documentation</p><p>Structurizr Cloud service的本地版本，支持多用户使用，共享编辑同一个dsl文件。</p><p>on-premises程序为一个war包，直接放到tomcat运行即可。</p><p>启动 D:\\PF\\apache-tomcat-9.0.71\\bin\\startup.bat</p><p>访问 http://192.168.1.101:8080/</p><p><img src="'+g+'" alt="image-20230215173616288"></p><h3 id="structurizr-cloud-service" tabindex="-1"><a class="header-anchor" href="#structurizr-cloud-service" aria-hidden="true">#</a> Structurizr Cloud service</h3><p>使用参考：https://structurizr.com/help/cloud-service/getting-started</p><p>Structurizr Cloud Service 和Structurizr On-promises功能类似，前者可以在快速体验功能时使用，只需注册一个帐号即可使用。Cloud Service 限制了只能一个workspace，超出要收费。实际使用时一般部署一个On-prosemises服务就可。</p><p>登录 https://structurizr.com/signin</p><h3 id="structurizr-cli" tabindex="-1"><a class="header-anchor" href="#structurizr-cli" aria-hidden="true">#</a> Structurizr CLI</h3><p>参考连接:https://github.com/structurizr/cli</p><h4 id="本地安装" tabindex="-1"><a class="header-anchor" href="#本地安装" aria-hidden="true">#</a> 本地安装</h4><p>​ 参考连接：https://github.com/structurizr/cli/blob/master/docs/local-installation.md</p><p>​ 下载安装包：https://github.com/structurizr/cli/releases</p><p><img src="'+b+`" alt="image-20230202173627795"></p><p>​ 下载后，解压到自定义目录，配置该目录到环境变量即可(可选)。</p><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4><p>​ 参考连接：https://github.com/structurizr/cli/blob/master/docs/getting-started.md</p><p>​ cli主要有两方面功能，一是将本地workspace内容同步到Structurizr Cloud Service或者Structurizr On-promises。二是将Structurizr DSL格式转换成其他格式，如：plantuml/c4plantuml/mermaid/dot等。</p><p>​ 主要命令：</p><p>​ workspace 同步</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>structurizr push <span class="token parameter variable">-id</span> WORKSPACE_ID <span class="token parameter variable">-key</span> KEY <span class="token parameter variable">-secret</span> SECRET <span class="token parameter variable">-workspace</span> workspace.dsl	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 格式转换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>structurizr <span class="token builtin class-name">export</span> <span class="token parameter variable">-workspace</span> workspace.dsl <span class="token parameter variable">-format</span> plantuml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ export命令参考：https://github.com/structurizr/cli/blob/master/docs/export.md</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p>好的：</p><p>​ 结构清晰、负载足够多的信息，可以快速了解系统。</p><p>​ 可以对比不同版本的差异，记录决策信息。</p><p>​ 可以定位到不同系统或者容器的说明文档。</p><p>​ 同一图例不会出现每个地方不一致的情况。</p><p>差的：</p><p>​ 设计工具暂时还不太好用。</p><p>​ VsCode插件经常卡死，只能语法高亮，实时的图片生成和语义检测，基本无法使用。</p><p>​ 对于复杂的图片自动排列功能无法得到想要的效果，而且存在组件名为中文是报错问题。</p>`,93);function k(C,w){const e=s("ExternalLinkIcon");return i(),c("div",null,[v,r("p",null,[r("a",S,[_,p(e)])]),x])}const D=a(f,[["render",k],["__file","C4模式架构设计总结.html.vue"]]);export{D as default};
