import{_ as l,r as d,o,c as i,a as n,d as a,e as t,b as e}from"./app-42f4feee.js";const r={},c=n("h1",{id:"cpd使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cpd使用","aria-hidden":"true"},"#"),a(" CPD使用")],-1),p=n("p",null,"Summary：学习CPD的使用，一款附带在PMD中发布的拷贝-粘贴检查工具。",-1),u=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),a(" 概述")],-1),m={href:"https://docs.pmd-code.org/latest/pmd_userdocs_tools_maven.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.pmd-code.org/latest/pmd_devdocs_major_adding_new_cpd_language.html",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"为什么要关心重复代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#为什么要关心重复代码","aria-hidden":"true"},"#"),a(" 为什么要关心重复代码")],-1),g=n("p",null,"​ 虽然CPD的安装使用是本节的介绍重点，但在这之前我们需要考虑一个问题，就是我们代码中为什么会出现重复代码。",-1),_=n("p",null,"​ 重复的代码往往都是执行相同的功能，我们需要对这些代码进行重构。但是找出这些重复代码又是个简单、枯燥没什么高价值的工作，而且还不一定能找到所有的重复代码。CPD在在某种程度上可以帮助解决该问题。",-1),k=n("h2",{id:"重构重复代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重构重复代码","aria-hidden":"true"},"#"),a(" 重构重复代码")],-1),b=n("p",null,"​ 重复代码重构策略：",-1),f=n("li",null,[a("如果是单个类或者单个方法内的代码重复: "),n("ul",null,[n("li",null,"如果重复的逻辑不是太长，则提取局部变量"),n("li",null,"将重复代码提取到新的方法中")])],-1),x=n("li",null,"讲这些代码抽取到class hierarchy上一层的单独方法中。",-1),C={href:"https://sourcemaking.com/design_patterns/template_method",target:"_blank",rel:"noopener noreferrer"},D=n("li",null,[a("如果重复发生在不同类中，且这些类不在class hierarchy的同一个层级: "),n("ul",null,[n("li",null,"在类层级结构上，为这些类加一个共同的上级。")])],-1),P={href:"https://refactoring.guru/smells/duplicate-code",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"cli使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cli使用","aria-hidden":"true"},"#"),a(" CLI使用")],-1),w=n("h3",{id:"cli选项解析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cli选项解析","aria-hidden":"true"},"#"),a(" CLI选项解析")],-1),y=n("thead",null,[n("tr",null,[n("th",null,"选项"),n("th",null,"描述"),n("th",null,"应用于"),n("th",null,"默认")])],-1),q=n("tr",null,[n("td",null,"--minimum-tokens <count>"),n("td",null,"必选参数，判断代码重复的最小token数"),n("td"),n("td")],-1),S=n("tr",null,[n("td",null,[a("--dir <path>"),n("br"),a("-d <path>")]),n("td",null,"源文件路径，或者包含了源文件的目录Zip包和jar包都支持。如果直接定义目录只在当前目录下找源文件。--dir,--file-list,--uri三个参数至少定义一个"),n("td"),n("td")],-1),L=n("tr",null,[n("td",null,"--file-list <filepath>"),n("td",null,"文件列表配置文件的，一行配置一个源文件。--dir,--file-list,--uri三个参数至少定义一个。"),n("td"),n("td")],-1),A=n("td",null,[a("--language <lang>"),n("br"),a("-l <lang>")],-1),M={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd.html#supported-languages",target:"_blank",rel:"noopener noreferrer"},T=n("td",null,null,-1),F=n("td",null,"java",-1),J=n("td",null,[a("--debug"),n("br"),a("--verbose"),n("br"),a("-D"),n("br"),a("-v")],-1),O={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd.html#logging",target:"_blank",rel:"noopener noreferrer"},$=n("td",null,null,-1),E=n("td",null,null,-1),V=n("tr",null,[n("td",null,[a("--encoding <charset>"),n("br"),a("-e <charset>")]),n("td",null,"PMD按那种编码方式去读取源文件。支持的字符集参考java.nio.charset.Charset。"),n("td"),n("td",null,"UTF-8")],-1),B=n("tr",null,[n("td",null,"--skip-duplicate-files"),n("td",null,"在内容比较时忽略文件名相同，文件大小相同的源文件。"),n("td"),n("td",null,"false")],-1),I=n("tr",null,[n("td",null,"--exclude <path>"),n("td",null,"不分析的文件目录路径。"),n("td"),n("td")],-1),N=n("tr",null,[n("td",null,"--non-recursive"),n("td",null,"不扫描子目录"),n("td"),n("td",null,"false")],-1),G=n("tr",null,[n("td",null,"--skip-lexical-errors"),n("td",null,"在遇到无效字符时直接跳过而不是终止分析"),n("td"),n("td",null,"false")],-1),R=n("td",null,[a("--format <format>"),n("br"),a("-f <format>")],-1),W={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd.html#available-report-formats",target:"_blank",rel:"noopener noreferrer"},X=n("td",null,null,-1),z=n("td",null,"text",-1),H=n("tr",null,[n("td",null,[a("--relativize-paths-with <path>"),n("br"),a("-z <path>")]),n("td",null,"报告中呈现的目录的相对路径。这样可以缩短报告中的目录/文件地址长度。"),n("td"),n("td")],-1),K=n("tr",null,[n("td",null,"--[no-]fail-on-violation"),n("td",null,"指定CPD是否以非零状态退出。默认发现问题将以状态4退出。如果设置了--no-fail-on-violation将以状态0退出，并且输出检测报告。"),n("td"),n("td")],-1),Q=n("tr",null,[n("td",null,"--ignore-literals"),n("td",null,"比较式忽略数字值和字符串值。"),n("td",null,"Java"),n("td",null,"false")],-1),U=n("tr",null,[n("td",null,"--ignore-identifiers"),n("td",null,"比较时忽略常量和变量的名字。"),n("td",null,"Java"),n("td",null,"false")],-1),Z=n("tr",null,[n("td",null,"--ignore-annotations"),n("td",null,"比较时忽略java的注解，C#的属性。"),n("td",null,"C#, Java"),n("td",null,"false")],-1),Y=n("tr",null,[n("td",null,"--ignore-literal-sequences"),n("td",null,"忽略文字序列"),n("td",null,"C#, C++, Lua"),n("td",null,"false")],-1),nn=n("tr",null,[n("td",null,"--ignore-sequences"),n("td",null,"忽略标识符和文字的序列"),n("td",null,"C++"),n("td",null,"false")],-1),an=n("tr",null,[n("td",null,"--ignore-usings"),n("td",null,"比较文本时忽略C#中的using指令"),n("td",null,"C#"),n("td",null,"false")],-1),sn=n("tr",null,[n("td",null,"--no-skip-blocks"),n("td",null,"不忽略由--skip-blocks-pattern匹配的代码块。"),n("td",null,"C++"),n("td",null,"false")],-1),tn=n("tr",null,[n("td",null,"--skip-blocks-pattern"),n("td",null,"查找要跳过的块的模式。它是一个字符串属性，由两部分组成，用|分隔。第一部分是开始模式，第二部分是结束模式。"),n("td",null,"C++"),n("td",null,"#if 0|#endif")],-1),en=n("tr",null,[n("td",null,[a("--uri <uri>"),n("br"),a("-u <uri>")]),n("td",null,"数据库地址。--dir,--file-list,--uri三个参数至少定义一个。"),n("td"),n("td",null,"PLSQL")],-1),ln=n("tr",null,[n("td",null,[a("--help"),n("br"),a("-h")]),n("td",null,"查看帮助信息"),n("td"),n("td")],-1),dn=e(`<h3 id="cli例子" tabindex="-1"><a class="header-anchor" href="#cli例子" aria-hidden="true">#</a> CLI例子</h3><p>最少参数例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定语言</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/cpp <span class="token parameter variable">--language</span> cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\cpp --language cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置多个源码目录（目录数量不限制）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java <span class="token parameter variable">--dir</span> src/test/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java --dir src\\test\\java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您在不同的体系结构目录中检查具有重复文件的C源代码树，则可以使用--skip duplicate files跳过这些目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/cpp <span class="token parameter variable">--language</span> cpp --skip-duplicate-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\cpp --language cpp --skip-duplicate-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定源文件编码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java <span class="token parameter variable">--encoding</span> utf-16le
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java --encoding utf-16le
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定报告格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java <span class="token parameter variable">--format</span> xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java --format xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPD分析代码量越多占用内存越多，有时需要分配更多的内存给CPD使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ <span class="token builtin class-name">export</span> <span class="token assign-left variable">PMD_JAVA_OPTS</span><span class="token operator">=</span>-Xmx512m
~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; set PMD_JAVA_OPTS=-Xmx512m
C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置不扫描子目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd --minimum-tokens <span class="token number">100</span> <span class="token parameter variable">--dir</span> src/main/java --non-recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd --minimum-tokens 100 --dir src\\main\\java --non-recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="退出状态" tabindex="-1"><a class="header-anchor" href="#退出状态" aria-hidden="true">#</a> 退出状态</h3><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td>0</td><td>正常退出，未检测到重复代码。</td></tr><tr><td>1</td><td>CPD 运行异常。</td></tr><tr><td>2</td><td>CPD指令错误，丢失参数或者参数错误。</td></tr><tr><td>4</td><td>发现至少一个重复后退出。如果设置了--no-fail-on-violation则不退出。</td></tr></tbody></table><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><p>​ CPD日志使用slf4j,slf4j的实现为slf4j-simple。日志信息通过System.err输出。所以报告信息一般都要配置输出到文件，否则就会输出到控制台。</p><p>​ slf4j-simple的配置文件为conf/simplelogger.properties。--debug参数将日志级别设置为debug。</p><h2 id="支持的语言" tabindex="-1"><a class="header-anchor" href="#支持的语言" aria-hidden="true">#</a> 支持的语言</h2>`,31),on=n("li",null,"C#",-1),rn=n("li",null,"C/C++",-1),cn={href:"https://docs.pmd-code.org/latest/pmd_languages_coco.html",target:"_blank",rel:"noopener noreferrer"},pn=n("li",null,"Dart",-1),un=n("li",null,"EcmaScript (JavaScript)",-1),mn=n("li",null,"Fortran",-1),hn={href:"https://docs.pmd-code.org/latest/pmd_languages_gherkin.html",target:"_blank",rel:"noopener noreferrer"},vn=n("li",null,"Go",-1),gn=n("li",null,"Groovy",-1),_n={href:"https://docs.pmd-code.org/latest/pmd_languages_html.html",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://docs.pmd-code.org/latest/pmd_languages_java.html",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://docs.pmd-code.org/latest/pmd_languages_jsp.html",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://docs.pmd-code.org/latest/pmd_languages_julia.html",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://docs.pmd-code.org/latest/pmd_languages_kotlin.html",target:"_blank",rel:"noopener noreferrer"},Cn=n("li",null,"Lua",-1),Dn=n("li",null,"Matlab",-1),Pn=n("li",null,"Modelica",-1),jn=n("li",null,"Objective-C",-1),wn=n("li",null,"Perl",-1),yn=n("li",null,"PHP",-1),qn={href:"https://docs.pmd-code.org/latest/pmd_languages_plsql.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("li",null,"Python",-1),Ln=n("li",null,"Ruby",-1),An={href:"https://docs.pmd-code.org/latest/pmd_languages_apex.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("li",null,"Scala",-1),Tn=n("li",null,"Swift",-1),Fn=n("li",null,"T-SQL",-1),Jn={href:"https://docs.pmd-code.org/latest/pmd_languages_js_ts.html",target:"_blank",rel:"noopener noreferrer"},On={href:"https://docs.pmd-code.org/latest/pmd_languages_visualforce.html",target:"_blank",rel:"noopener noreferrer"},$n=n("li",null,"vm (Apache Velocity)",-1),En=n("li",null,[a("XML "),n("ul",null,[n("li",null,"POM (Apache Maven)"),n("li",null,"XSL"),n("li",null,"WSDL")])],-1),Vn=n("h2",{id:"报告格式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#报告格式","aria-hidden":"true"},"#"),a(" 报告格式")],-1),Bn=n("li",null,[n("p",null,"text : Default format")],-1),In=n("li",null,[n("p",null,"xml (and xslt)")],-1),Nn=n("li",null,[n("p",null,"csv")],-1),Gn=n("li",null,[n("p",null,"csv_with_linecount_per_file")],-1),Rn=n("p",null,"vs",-1),Wn={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd_report_formats.html",target:"_blank",rel:"noopener noreferrer"},Xn=e(`<h2 id="ant任务配置" tabindex="-1"><a class="header-anchor" href="#ant任务配置" aria-hidden="true">#</a> Ant任务配置</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>taskdef</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">classname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.sourceforge.pmd.ant.CPDTask<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cpd</span> <span class="token attr-name">minimumTokenCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">outputFile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/tom/cpd.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileset</span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/tom/tmp/ant<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>**/*.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileset</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cpd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明" aria-hidden="true">#</a> 属性说明</h3><table><thead><tr><th>属性</th><th>描述</th><th>默认值</th><th>应用于</th></tr></thead><tbody><tr><td>minimumtokencount</td><td>必选。最小重复度</td><td></td><td></td></tr><tr><td>encoding</td><td>报告和源文件的字符编码格式。未定义使用系统字符编码。CPD在运行时设置了字符编码时该参数无效。</td><td></td><td></td></tr><tr><td>format</td><td>报告格式</td><td>text</td><td></td></tr><tr><td>ignoreLiterals</td><td>如果设置为true。foo=42;和foo=43将检测为重复代码。</td><td>false</td><td>Java</td></tr><tr><td>ignoreIdentifiers</td><td>类似ignoreLiterals，比较时忽略变量名，方法名。</td><td>false</td><td>Java</td></tr><tr><td>ignoreAnnotations</td><td>类似ignoreLiterals，比较时忽略注解。</td><td>false</td><td>Java</td></tr><tr><td>ignoreUsings</td><td>忽略using指令</td><td>false</td><td>C#</td></tr><tr><td>skipDuplicateFiles</td><td>忽略文件copy。相同文件名，相同大小则认为是文件copy。</td><td>false</td><td></td></tr><tr><td>skipLexicalErrors</td><td>忽略不能识别的字符，而不终止CPD运行。</td><td>false</td><td></td></tr><tr><td>skipBlocks</td><td>启用或禁用像预处理器一样跳过块。</td><td>true</td><td>C++</td></tr><tr><td>skipBlocksPattern</td><td>配置匹配需要忽略的代码块。</td><td>#if 0#endif</td><td>C++</td></tr><tr><td>language</td><td>指定语言类型</td><td>java</td><td></td></tr><tr><td>outputfile</td><td>报告输出地址，未配置则为当前目录。</td><td></td><td></td></tr></tbody></table><p>-v参数显示详细输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ant -v -f mybuildfile.xml cpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行CPD后紧接着运行XSLT脚本(pmd/etc/xslt/cpdhtml.xslt)可以得到html报告。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xslt</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpd.xml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>etc/xslt/cpdhtml.xslt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">out</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cpd.html<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),zn={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd_report_formats.html#xslt",target:"_blank",rel:"noopener noreferrer"},Hn=e(`<h2 id="gui" tabindex="-1"><a class="header-anchor" href="#gui" aria-hidden="true">#</a> GUI</h2><p>启动指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~ $ pmd cpd-gui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>C:\\&gt; pmd.bat cpd-gui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="忽略告警" tabindex="-1"><a class="header-anchor" href="#忽略告警" aria-hidden="true">#</a> 忽略告警</h2><p>多数语言可以在注释中增加关键字<code>CPD-OFF</code> 和<code>CPD-ON</code>来开启忽略指定代码块。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">someParameterizedFactoryMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// some unignored code</span>

    <span class="token comment">// tell cpd to start ignoring code - CPD-OFF</span>

    <span class="token comment">// mission critical code, manually loop unroll</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">goDoSomethingAwesome</span><span class="token punctuation">(</span>x <span class="token operator">+</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// resume CPD analysis - CPD-ON</span>

    <span class="token comment">// further code will *not* be ignored</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java通过注解指定不检测代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//enable suppression</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;CPD-START&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">someParameterizedFactoryMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// any code here will be ignored for the duplication detection</span>
<span class="token punctuation">}</span>
<span class="token comment">//disable suppression</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;CPD-END&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">nextMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除java之外的其他语言不支持在报告中显示被suppress的代码块。</p><h2 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性" aria-hidden="true">#</a> 可靠性</h2><p>CPD经历了3个阶段：</p>`,12),Kn={href:"http://www.onjava.com/pub/a/onjava/2003/03/12/pmd_cpd.html",target:"_blank",rel:"noopener noreferrer"},Qn={href:"http://dogma.net/markn/articles/bwt/bwt.htm",target:"_blank",rel:"noopener noreferrer"},Un={href:"http://www.nist.gov/dads/HTML/karpRabin.html",target:"_blank",rel:"noopener noreferrer"};function Zn(Yn,na){const s=d("ExternalLinkIcon");return o(),i("div",null,[c,p,u,n("p",null,[a("​ CPD可以轻松发现大型代码中的重复代码。CPD可以检测包括Java、jsp、c/c++、c#、Go、Kotlin、Ruby、Swift在内的31种语言。CPD可以通过命令行模式或者Ant任务方式使用，也可以在Maven中通过 "),n("a",m,[a("Maven PMD Plugin"),t(s)]),a("使用cpd-check指令使用。")]),n("p",null,[a("​ CPD还可以自行添加目前未支持的语言， "),n("a",h,[a("添加指南"),t(s)]),a("。")]),v,g,_,k,b,n("ul",null,[f,n("li",null,[a("如果重复代码在多个类中，但这些类在class hierarchy中处于同一个层级: "),n("ul",null,[x,n("li",null,[a("使用"),n("a",C,[a("模版方法"),t(s)]),a(" 的设计模式")])])]),D]),n("p",null,[n("a",P,[a("重构大师"),t(s)]),a("里介绍了更深入的策略，还有用例和解释。")]),j,w,n("table",null,[y,n("tbody",null,[q,S,L,n("tr",null,[A,n("td",null,[a("源文件的语言类型。--help可以查看支持的所有语言。也可以参考"),n("a",M,[a("支持的语言"),t(s)]),a("。")]),T,F]),n("tr",null,[J,n("td",null,[a("Debug模式。输出更多的日志信息。日志参考"),n("a",O,[a("Logging"),t(s)]),a(".")]),$,E]),V,B,I,N,G,n("tr",null,[R,n("td",null,[a("报告格式。 "),n("a",W,[a("所有格式"),t(s)])]),X,z]),H,K,Q,U,Z,Y,nn,an,sn,tn,en,ln])]),dn,n("ul",null,[on,rn,n("li",null,[n("a",cn,[a("Coco"),t(s)])]),pn,un,mn,n("li",null,[n("a",hn,[a("Gherkin"),t(s)]),a(" (Cucumber)")]),vn,gn,n("li",null,[n("a",_n,[a("Html"),t(s)])]),n("li",null,[n("a",kn,[a("Java"),t(s)])]),n("li",null,[n("a",bn,[a("Jsp"),t(s)])]),n("li",null,[n("a",fn,[a("Julia"),t(s)])]),n("li",null,[n("a",xn,[a("Kotlin"),t(s)])]),Cn,Dn,Pn,jn,wn,yn,n("li",null,[n("a",qn,[a("PL/SQL"),t(s)])]),Sn,Ln,n("li",null,[n("a",An,[a("Salesforce.com Apex"),t(s)])]),Mn,Tn,Fn,n("li",null,[n("a",Jn,[a("TypeScript"),t(s)])]),n("li",null,[n("a",On,[a("Visualforce"),t(s)])]),$n,En]),Vn,n("ul",null,[Bn,In,Nn,Gn,n("li",null,[Rn,n("p",null,[a("详细参考"),n("a",Wn,[a("CPD Report Formats"),t(s)]),a("。")])])]),Xn,n("p",null,[n("a",zn,[a("xslt格式报告参考"),t(s)])]),Hn,n("ul",null,[n("li",null,[a("First we wrote it using a variant of Michael Wise’s Greedy String Tiling algorithm (our variant is described "),n("a",Kn,[a("here"),t(s)]),a(").")]),n("li",null,[a("Then it was completely rewritten by Brian Ewins using the "),n("a",Qn,[a("Burrows-Wheeler transform"),t(s)]),a(".")]),n("li",null,[a("Finally, it was rewritten by Steve Hawkins to use the "),n("a",Un,[a("Karp-Rabin"),t(s)]),a(" string matching algorithm.")])])])}const sa=l(r,[["render",Zn],["__file","1CPD使用.html.vue"]]);export{sa as default};
