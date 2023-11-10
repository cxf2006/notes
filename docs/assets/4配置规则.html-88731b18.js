import{_ as e,r as p,o,c as l,a as n,d as a,e as c,b as s}from"./app-42f4feee.js";const u={},i=s(`<h1 id="配置规则" tabindex="-1"><a class="header-anchor" href="#配置规则" aria-hidden="true">#</a> 配置规则</h1><p>摘要：学会如何直接在规则集文件xml中配置规则。</p><h2 id="提示信息和优先级修改" tabindex="-1"><a class="header-anchor" href="#提示信息和优先级修改" aria-hidden="true">#</a> 提示信息和优先级修改</h2><p>​ 可以通过修改rule节点的message属性对提示信息进行修改，输出报告中将会使用新配置的message。</p><p>​ 可以通过嵌套priority节点来修改问题等级。设置问题等级后检测问题时可以指定检测某个或者某个级别以上的问题。例如CLI的--minimum-priority选项可以指定检测问题的最低等级。</p><p>​ 问题等级一共分为5级。</p><p>​ 1：High 2:Medium_High 3:Medium 4:Medium_Low 5:Low</p><p>🌰配置某个规则的等级为5，检测时设置--minimum-priority=Medium_Low，那么该规则将不执行。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>category/java/errorprone.xml/EmptyCatchBlock<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Empty catch blocks should be avoided<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>priority</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>priority</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rule-properties配置" tabindex="-1"><a class="header-anchor" href="#rule-properties配置" aria-hidden="true">#</a> Rule properties配置</h2><p>​ 可以通过property配置来覆盖规则的默认值。例如有个规则的reportLevel默认是200，可以通过以下设置将其改为150.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>category/java/design.xml/NPathComplexity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reportLevel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>150<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ value值也可以直接配置在property节点</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reportLevel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ property需要再properties中定义。</p>`,15),r={href:"https://docs.pmd-code.org/latest/pmd_rules_java_design.html#npathcomplexity",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>​ 如果property值有多个可以用“|”或者“,”分割。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>legalCollectionTypes<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.util.ArrayList|java.util.Vector|java.util.HashMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 这些属性被称为多值属性。</p>`,3);function k(m,g){const t=p("ExternalLinkIcon");return o(),l("div",null,[i,n("p",null,[a("​ 🎗️所有的property的定义都需要是规则中有的参数，如果随意定义一个规则中没有的参数，将报错。例如已定义参数"),n("a",r,[a("NPathComplexity"),c(t)]),a("。")]),d])}const h=e(u,[["render",k],["__file","4配置规则.html.vue"]]);export{h as default};
