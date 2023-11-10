import{_ as t,r as u,o as l,c as p,a as n,d as a,e as o,b as s}from"./app-42f4feee.js";const c={},i=s(`<h1 id="cpd报告格式" tabindex="-1"><a class="header-anchor" href="#cpd报告格式" aria-hidden="true">#</a> CPD报告格式</h1><p>Summary：CPD内置的报告格式。</p><p>​ CPD收集重复代码并在报告中展示。报告中会显示重复代码在文件中的位置，但是不是所有格式的报告都会显示重复代码出现的所有位置。</p><p>​ The following examples always describe the same duplications:</p><ol><li>a code block of 239 tokens spanning 33 lines in RuleReferenceTest. This is a duplication within the same file.</li><li>a code block of 110 tokens spanning 16 lines in JaxenXPathRuleQueryTest. This is a duplication that appears 3 times within the same file.</li></ol><h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2><p>​ CPD的默认报告格式。</p><p>​ 显示重复代码段在文件中的位置，显示重复的代码内容。使用=======分割多段重复代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Found a 33 line (239 tokens) duplication in the following files: 
Starting at line 32 of /home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java
Starting at line 68 of /home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java

    public void testOverride() {
        final StringProperty PROPERTY1_DESCRIPTOR = new StringProperty(&quot;property1&quot;, &quot;Test property&quot;, null, 0f);
        MockRule rule = new MockRule();
        rule.definePropertyDescriptor(PROPERTY1_DESCRIPTOR);
        rule.setLanguage(LanguageRegistry.getLanguage(Dummy2LanguageModule.NAME));
        rule.setName(&quot;name1&quot;);
        rule.setProperty(PROPERTY1_DESCRIPTOR, &quot;value1&quot;);
        rule.setMessage(&quot;message1&quot;);
        rule.setDescription(&quot;description1&quot;);
        rule.addExample(&quot;example1&quot;);
        rule.setExternalInfoUrl(&quot;externalInfoUrl1&quot;);
        rule.setPriority(RulePriority.HIGH);

        final StringProperty PROPERTY2_DESCRIPTOR = new StringProperty(&quot;property2&quot;, &quot;Test property&quot;, null, 0f);
        RuleReference ruleReference = new RuleReference();
        ruleReference.setRule(rule);
        ruleReference.definePropertyDescriptor(PROPERTY2_DESCRIPTOR);
        ruleReference.setLanguage(LanguageRegistry.getLanguage(DummyLanguageModule.NAME));
        ruleReference
                .setMinimumLanguageVersion(LanguageRegistry.getLanguage(DummyLanguageModule.NAME).getVersion(&quot;1.3&quot;));
        ruleReference
                .setMaximumLanguageVersion(LanguageRegistry.getLanguage(DummyLanguageModule.NAME).getVersion(&quot;1.7&quot;));
        ruleReference.setDeprecated(true);
        ruleReference.setName(&quot;name2&quot;);
        ruleReference.setProperty(PROPERTY1_DESCRIPTOR, &quot;value2&quot;);
        ruleReference.setProperty(PROPERTY2_DESCRIPTOR, &quot;value3&quot;);
        ruleReference.setMessage(&quot;message2&quot;);
        ruleReference.setDescription(&quot;description2&quot;);
        ruleReference.addExample(&quot;example2&quot;);
        ruleReference.setExternalInfoUrl(&quot;externalInfoUrl2&quot;);
        ruleReference.setPriority(RulePriority.MEDIUM_HIGH);

        validateOverriddenValues(PROPERTY1_DESCRIPTOR, PROPERTY2_DESCRIPTOR, ruleReference);
=====================================================================
Found a 16 line (110 tokens) duplication in the following files: 
Starting at line 66 of /home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java
Starting at line 88 of /home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java
Starting at line 110 of /home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java

        JaxenXPathRuleQuery query = createQuery(xpath);
        List&lt;String&gt; ruleChainVisits = query.getRuleChainVisits();
        Assert.assertEquals(2, ruleChainVisits.size());
        Assert.assertTrue(ruleChainVisits.contains(&quot;dummyNode&quot;));
        // Note: Having AST_ROOT in the rule chain visits is probably a mistake. But it doesn&#39;t hurt, it shouldn&#39;t
        // match a real node name.
        Assert.assertTrue(ruleChainVisits.contains(JaxenXPathRuleQuery.AST_ROOT));

        DummyNodeWithListAndEnum dummy = new DummyNodeWithListAndEnum(1);
        RuleContext data = new RuleContext();
        data.setLanguageVersion(LanguageRegistry.findLanguageByTerseName(&quot;dummy&quot;).getDefaultVersion());

        query.evaluate(dummy, data);
        // note: the actual xpath queries are only available after evaluating
        Assert.assertEquals(2, query.nodeNameToXPaths.size());
        Assert.assertEquals(&quot;self::node()[(attribute::Test1 = \\&quot;false\\&quot;)][(attribute::Test2 = \\&quot;true\\&quot;)]&quot;, query.nodeNameToXPaths.get(&quot;dummyNode&quot;).get(0).toString());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> xml</h2>`,10),r={href:"https://docs.pmd-code.org/latest/pmd_userdocs_cpd_report_formats.html#xslt",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pmd-cpd</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java<span class="token punctuation">&quot;</span></span> <span class="token attr-name">totalNumberOfTokens</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>523<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java<span class="token punctuation">&quot;</span></span> <span class="token attr-name">totalNumberOfTokens</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>duplication</span> <span class="token attr-name">lines</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>33<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tokens</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>239<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>29<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endcolumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>64<span class="token punctuation">&quot;</span></span> <span class="token attr-name">line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>32<span class="token punctuation">&quot;</span></span> <span class="token attr-name">begintoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2356<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endtoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2594<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>37<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endcolumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>68<span class="token punctuation">&quot;</span></span> <span class="token attr-name">begintoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5700<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endtoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5938<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>codefragment</span><span class="token punctuation">&gt;</span></span><span class="token cdata">&lt;![CDATA[    public void testOverride() {
        final StringProperty PROPERTY1_DESCRIPTOR = new StringProperty(&quot;property1&quot;, &quot;Test property&quot;, null, 0f);
        MockRule rule = new MockRule();
        rule.definePropertyDescriptor(PROPERTY1_DESCRIPTOR);
        rule.setLanguage(LanguageRegistry.getLanguage(Dummy2LanguageModule.NAME));
        rule.setName(&quot;name1&quot;);
        rule.setProperty(PROPERTY1_DESCRIPTOR, &quot;value1&quot;);
        rule.setMessage(&quot;message1&quot;);
        rule.setDescription(&quot;description1&quot;);
        rule.addExample(&quot;example1&quot;);
        rule.setExternalInfoUrl(&quot;externalInfoUrl1&quot;);
        rule.setPriority(RulePriority.HIGH);

        final StringProperty PROPERTY2_DESCRIPTOR = new StringProperty(&quot;property2&quot;, &quot;Test property&quot;, null, 0f);
        RuleReference ruleReference = new RuleReference();
        ruleReference.setRule(rule);
        ruleReference.definePropertyDescriptor(PROPERTY2_DESCRIPTOR);
        ruleReference.setLanguage(LanguageRegistry.getLanguage(DummyLanguageModule.NAME));
        ruleReference
                .setMinimumLanguageVersion(LanguageRegistry.getLanguage(DummyLanguageModule.NAME).getVersion(&quot;1.3&quot;));
        ruleReference
                .setMaximumLanguageVersion(LanguageRegistry.getLanguage(DummyLanguageModule.NAME).getVersion(&quot;1.7&quot;));
        ruleReference.setDeprecated(true);
        ruleReference.setName(&quot;name2&quot;);
        ruleReference.setProperty(PROPERTY1_DESCRIPTOR, &quot;value2&quot;);
        ruleReference.setProperty(PROPERTY2_DESCRIPTOR, &quot;value3&quot;);
        ruleReference.setMessage(&quot;message2&quot;);
        ruleReference.setDescription(&quot;description2&quot;);
        ruleReference.addExample(&quot;example2&quot;);
        ruleReference.setExternalInfoUrl(&quot;externalInfoUrl2&quot;);
        ruleReference.setPriority(RulePriority.MEDIUM_HIGH);

        validateOverriddenValues(PROPERTY1_DESCRIPTOR, PROPERTY2_DESCRIPTOR, ruleReference);]]&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>codefragment</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>duplication</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>duplication</span> <span class="token attr-name">lines</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tokens</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>110<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endcolumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>28<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>81<span class="token punctuation">&quot;</span></span> <span class="token attr-name">line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>66<span class="token punctuation">&quot;</span></span> <span class="token attr-name">begintoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endtoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3109<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endcolumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>28<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>103<span class="token punctuation">&quot;</span></span> <span class="token attr-name">line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>88<span class="token punctuation">&quot;</span></span> <span class="token attr-name">begintoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endtoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3309<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endcolumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>28<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>125<span class="token punctuation">&quot;</span></span> <span class="token attr-name">line</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>110<span class="token punctuation">&quot;</span></span> <span class="token attr-name">begintoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">endtoken</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3509<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>codefragment</span><span class="token punctuation">&gt;</span></span><span class="token cdata">&lt;![CDATA[        JaxenXPathRuleQuery query = createQuery(xpath);
        List&lt;String&gt; ruleChainVisits = query.getRuleChainVisits();
        Assert.assertEquals(2, ruleChainVisits.size());
        Assert.assertTrue(ruleChainVisits.contains(&quot;dummyNode&quot;));
        // Note: Having AST_ROOT in the rule chain visits is probably a mistake. But it doesn&#39;t hurt, it shouldn&#39;t
        // match a real node name.
        Assert.assertTrue(ruleChainVisits.contains(JaxenXPathRuleQuery.AST_ROOT));

        DummyNodeWithListAndEnum dummy = new DummyNodeWithListAndEnum(1);
        RuleContext data = new RuleContext();
        data.setLanguageVersion(LanguageRegistry.findLanguageByTerseName(&quot;dummy&quot;).getDefaultVersion());

        query.evaluate(dummy, data);
        // note: the actual xpath queries are only available after evaluating
        Assert.assertEquals(2, query.nodeNameToXPaths.size());
        Assert.assertEquals(&quot;self::node()[(attribute::Test1 = \\&quot;false\\&quot;)][(attribute::Test2 = \\&quot;true\\&quot;)]&quot;, query.nodeNameToXPaths.get(&quot;dummyNode&quot;).get(0).toString());]]&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>codefragment</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>duplication</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pmd-cpd</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> csv</h2><p>​ 报告中将重复信息（函数、标记数、出现次数）以逗号分隔。一行一个重复信息。</p><div class="language-csv line-numbers-mode" data-ext="csv"><pre class="language-csv"><code><span class="token value">lines</span><span class="token punctuation">,</span><span class="token value">tokens</span><span class="token punctuation">,</span><span class="token value">occurrences</span>
<span class="token value">33</span><span class="token punctuation">,</span><span class="token value">239</span><span class="token punctuation">,</span><span class="token value">2</span><span class="token punctuation">,</span><span class="token value">32</span><span class="token punctuation">,</span><span class="token value">/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java</span><span class="token punctuation">,</span><span class="token value">68</span><span class="token punctuation">,</span><span class="token value">/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java</span>
<span class="token value">16</span><span class="token punctuation">,</span><span class="token value">110</span><span class="token punctuation">,</span><span class="token value">3</span><span class="token punctuation">,</span><span class="token value">66</span><span class="token punctuation">,</span><span class="token value">/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java</span><span class="token punctuation">,</span><span class="token value">88</span><span class="token punctuation">,</span><span class="token value">/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java</span><span class="token punctuation">,</span><span class="token value">110</span><span class="token punctuation">,</span><span class="token value">/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="csv-with-linecount-per-file" tabindex="-1"><a class="header-anchor" href="#csv-with-linecount-per-file" aria-hidden="true">#</a> csv_with_linecount_per_file</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tokens,occurrences
239,2,32,33,/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java,68,33,/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenc
eTest.java
110,3,66,16,/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java,88,16,/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java,110,16,/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vs" tabindex="-1"><a class="header-anchor" href="#vs" aria-hidden="true">#</a> vs</h2><p>这将以Visual Studio的格式输出重复。CPD可以作为一个外部工具添加，输出显示在控制台中。然后，您可以单击文件名以跳转到重复数据所在的源。</p><p>每次重复都会在单独的一行中报告，这就是为什么在本例中，我们有5行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java(32): Between lines 32 and 65
/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/RuleReferenceTest.java(68): Between lines 68 and 101
/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java(66): Between lines 66 and 82
/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java(88): Between lines 88 and 104
/home/pmd/source/pmd-core/src/test/java/net/sourceforge/pmd/lang/rule/xpath/JaxenXPathRuleQueryTest.java(110): Between lines 110 and 126
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xslt" tabindex="-1"><a class="header-anchor" href="#xslt" aria-hidden="true">#</a> xslt</h2><p>​ 基于xml格式的报告进一步转化。可以使用默认样式表转化，也可以使用自定义样式表转化。</p><p>​ 可以使用Ant的XSLT任务，也可以使用任何其他（CLI）XSLT处理器，例如xalan（请参阅https://xalan.apache.org/)。</p><h3 id="cpdhtml-xslt" tabindex="-1"><a class="header-anchor" href="#cpdhtml-xslt" aria-hidden="true">#</a> cpdhtml.xslt</h3><p>​ 样式表来源:</p><p>https://raw.githubusercontent.com/pmd/pmd/master/pmd-core/etc/xslt/cpdhtml.xslt.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xalan -in cpd-report-sample.xml -xsl cpdhtml.xslt -out cpd-report-sample-cpdhtml.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 默认只考虑大于30行的重复，可以通过参数设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xalan -in cpd-report-sample.xml -xsl cpdhtml.xslt -out cpd-report-sample-cpdhtml.html -param lines 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cpdhtml-v2-xslt" tabindex="-1"><a class="header-anchor" href="#cpdhtml-v2-xslt" aria-hidden="true">#</a> cpdhtml-v2.xslt</h3><p>样式表来源:https://raw.githubusercontent.com/pmd/pmd/master/pmd-core/etc/xslt/cpdhtml-v2.xslt.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xalan -in pmd-core-cpd-report.xml -xsl etc/xslt/cpdhtml-v2.xslt -out pmd-core-cpd-report-v2.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种报告形式需要依赖javascript、Bootstrap、jQuery、DataTables。</p>`,23);function m(v,k){const e=u("ExternalLinkIcon");return l(),p("div",null,[i,n("p",null,[a("​ 使用xml格式输出结构化的重复代码报告。XSLT可以对xml格式的报告进一步转化。 "),n("a",r,[a("如何转化"),o(e)])]),d])}const q=t(c,[["render",m],["__file","2CPD报告格式.html.vue"]]);export{q as default};
