import{d as o,j as e,r as c,o as a,y as l,c as u,b as r}from"./app.ebb18901.js";o({__name:"basic",setup(s){return e({required:[],properties:{compId:{type:"string",description:"",title:"\u516C\u53F8id"},dictId:{type:"string",description:"",title:"\u5B57\u5178id"},dictName:{type:"string",description:"",title:"\u5B57\u5178\u540D\u79F0"},dispValue:{type:"string",description:"",title:"\u5C55\u793A\u503C"},fldValue:{type:"string",description:"",title:"\u5B57\u5178\u503C"},id:{type:"string",description:"",title:"\u4E3B\u952Eid"},orderId:{type:"string",description:"",title:"\u6392\u5E8F"},parentId:{type:"string",description:"",title:"\u7236\u7EA7id"},status:{type:"string",description:"",title:"\u72B6\u6001"}}}),(t,n)=>{const p=c("bf-base-layout");return a(),l(p)}}});const d='{"title":"Layout","description":"","frontmatter":{"title":"Layout","lang":"zh-CN"},"headers":[{"level":2,"title":"MainLayout","slug":"mainlayout"},{"level":2,"title":"BaseLayout","slug":"baselayout"},{"level":2,"title":"TabBarLayout","slug":"tabbarlayout"}],"relativePath":"zh-CN/component/base-layout.md","lastUpdated":1740039282000}',i={},g=Object.assign(i,{__name:"base-layout",setup(s){return(t,n)=>(a(),u("div",null,n[0]||(n[0]=[r(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor vp-link" href="#layout" aria-hidden="true">#</a></h1><ul><li>\u6B64\u7AE0\u8282\u4ECB\u7ECD\u4E3B\u8981\u7684\u9875\u9762\u5E03\u5C40\u7EC4\u4EF6\uFF0C\u7531\u4E8E\u6709\u8DEF\u7531\u6E32\u67D3\uFF0C\u6682\u4E0D\u4EE5 Demo \u5F62\u5F0F\u5C55\u793A\u3002</li></ul><h2 id="mainlayout" tabindex="-1">MainLayout <a class="header-anchor vp-link" href="#mainlayout" aria-hidden="true">#</a></h2><ul><li>\u4E3B\u5E03\u5C40\uFF0C\u5305\u542B<code>\u521D\u59CB\u5316\u56FD\u9645\u5316</code>\u3001<code>\u521D\u59CB\u5316\u7528\u6237\u4FE1\u606F</code>\u7B49\u7CFB\u7EDF\u4F9D\u8D56\u7684\u5185\u5BB9</li><li>\u4E00\u822C\u7528\u4E8E<code>App.vue</code>\u4E2D\u8C03\u7528</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BfMainLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;setaria-business-framework&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bf-main-layout</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u4E5F\u53EF\u5728\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u52A0\u5165\u5168\u5C40\u7EC4\u4EF6 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BfMainLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;setaria-business-framework&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bf-main-layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>global-setting</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bf-main-layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="baselayout" tabindex="-1">BaseLayout <a class="header-anchor vp-link" href="#baselayout" aria-hidden="true">#</a></h2><ul><li>BaseLayout \u5305\u542B\u4E86<code>Header</code>\u548C<code>Menu</code>\u7EC4\u4EF6</li><li>\u4E00\u822C\u7528\u4E8E Router \u5B9A\u4E49\u4E2D\u7684 component \u4F7F\u7528</li></ul><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BfBaseLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;setaria-business-framework&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BfBaseLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span>
            <span class="token comment">/* webpackChunkName: &quot;dashboard&quot; */</span> <span class="token string">&#39;@/views/dashboard/index.vue&#39;</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="tabbarlayout" tabindex="-1">TabBarLayout <a class="header-anchor vp-link" href="#tabbarlayout" aria-hidden="true">#</a></h2><ul><li>TabBarLayout \u5305\u542B\u4E86<code>Header</code>\u3001<code>Menu</code>\u3001<code>TabBar</code>\u7EC4\u4EF6\uFF0C\u9700\u8981\u5173\u6CE8\u7684\u662F\uFF0C<code>TabBar</code>\u7EC4\u4EF6\u81EA\u5E26<code>keep-alive</code>\u529F\u80FD</li><li>\u4E00\u822C\u7528\u4E8E Router \u5B9A\u4E49\u4E2D\u7684 component \u4F7F\u7528</li><li>\u5728\u4F7F\u7528\u6B64\u529F\u80FD\u65F6\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E1A\u52A1\u4EE3\u7801\u9700\u8981\u5728 <code>script</code> \u4E0A\u6302<code>name</code>\u5C5E\u6027\u6765\u5B9A\u4E49\u7EC4\u4EF6\u540D\u79F0</li></ul><div class="language-javascript"><pre><code>
<span class="token comment">/**  \u8DEF\u7531\u5B9A\u4E49\u90E8\u5206*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BfTabBarLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;setaria-business-framework&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BfTabBarLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u91CC\u7684\u5185\u5BB9\u9700\u8981\u548CdefineOptions.name\u7684\u5185\u5BB9\u4E00\u81F4</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span>
            <span class="token comment">/* webpackChunkName: &quot;dashboard&quot; */</span> <span class="token string">&#39;@/views/dashboard/index.vue&#39;</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">/**  \u4E1A\u52A1\u4EE3\u7801\u90E8\u5206 */</span>
<span class="token comment">/**  \u8FD9\u91CC\u7684\u540D\u79F0\u9700\u8981\u548C\u8DEF\u7531\u7684name\u4E00\u81F4 */</span>
<span class="token operator">&lt;</span>script setup name<span class="token operator">=</span><span class="token string">&quot;dashboard&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


</code></pre></div>`,11)])))}});export{d as __pageData,g as default};
