import{o as a,c as s,b as t}from"./app.ebb18901.js";var p="/setaria-business-framework/images/tip2.png";const r='{"title":"Router \u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"Router \u8DEF\u7531","slug":"router-\u8DEF\u7531"},{"level":3,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":3,"title":"\u8DEF\u7531\u5B9A\u4E49","slug":"\u8DEF\u7531\u5B9A\u4E49"},{"level":3,"title":"Meta \u8DEF\u7531\u5C5E\u6027","slug":"meta-\u8DEF\u7531\u5C5E\u6027"}],"relativePath":"zh-CN/component/router.md","lastUpdated":1740039282000}',o={},u=Object.assign(o,{__name:"router",setup(e){return(c,n)=>(a(),s("div",null,n[0]||(n[0]=[t(`<h2 id="router-\u8DEF\u7531" tabindex="-1">Router \u8DEF\u7531 <a class="header-anchor vp-link" href="#router-\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u7EE7\u627F<code>vue-router</code> API</p><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor vp-link" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">gotoDemo1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo1/demo1-1&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">gotoDemo2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo1/demo1-2&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">gotoDemo3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo1/demo1-3&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u8DEF\u7531\u5B9A\u4E49" tabindex="-1">\u8DEF\u7531\u5B9A\u4E49 <a class="header-anchor vp-link" href="#\u8DEF\u7531\u5B9A\u4E49" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt=""></p><ol><li><p>\u5B9A\u4E49\u8DEF\u7531\u540D\u79F0\u65F6\uFF0C\u5E94\u548C\u5F53\u524D\u7269\u7406\u8DEF\u5F84\u540D\u4FDD\u6301\u4E00\u81F4\uFF0C\u8FD9\u6837\u540E\u7EED\u76F4\u63A5\u53EF\u901A\u8FC7 url \u627E\u5230\u5BF9\u5E94\u7684\u7269\u7406\u6587\u4EF6</p></li><li><p>\u5B9A\u4E49\u8DEF\u7531\u65F6\uFF0C\u9700\u5173\u6CE8<code>webpackChunkName</code>\u5C5E\u6027\uFF0C\u6B64\u5C5E\u6027\u4E00\u822C\u548C<code>name</code>\u5C5E\u6027\u4E00\u81F4\u5373\u53EF\uFF0C\u6BD4\u5982\uFF1A</p></li></ol><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BfTabBarLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;setaria-business-framework&#39;</span>
<span class="token comment">// import { BfBaseLayout } from &#39;setaria-business-framework&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> BfTabBarLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A1&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;demo1-1&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A2&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;demo1-2&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A3&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;demo1-3&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-3.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><ol start="3"><li>\u5982\u8981\u4F7F\u7528<code>keep-alive</code>\u529F\u80FD\uFF0C\u8BF7\u5C06\u9875\u9762\u7EC4\u4EF6\u4E2D<code>script</code>\u6DFB\u52A0<code>name</code>\u5C5E\u6027\uFF0C\u793A\u4F8B\u5982\u4E0B</li></ol><div class="language-javascript"><pre><code><span class="token comment">/**  \u8DEF\u7531\u5B9A\u4E49\u90E8\u5206*/</span>
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

</code></pre></div><h3 id="meta-\u8DEF\u7531\u5C5E\u6027" tabindex="-1">Meta \u8DEF\u7531\u5C5E\u6027 <a class="header-anchor vp-link" href="#meta-\u8DEF\u7531\u5C5E\u6027" aria-hidden="true">#</a></h3><div class="vp-table"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hideInTab</td><td><code>tab-bar-layout</code>\u7EC4\u4EF6\u53EF\u7528 \u662F\u5426\u5728 tabbar \u4E2D\u9690\u85CF\u5F53\u524D\u9875\u9762</td><td>Boolean</td><td>false</td></tr><tr><td>ignoreCache</td><td><code>tab-bar-layout</code>\u7EC4\u4EF6\u53EF\u7528 \u662F\u5426\u5728\u65E0\u89C6 keep-alive \u7684\u7EC4\u4EF6\u7F13\u5B58\u673A\u5236</td><td>Boolean</td><td>false</td></tr><tr><td>ignoreRule</td><td>\u662F\u5426\u65E0\u89C6\u6743\u9650\u6A21\u578B\uFF0C\u5373\u8D8A\u8FC7 RBAC \u6A21\u578B\u524D\u7AEF\u65E0\u6743\u9650\u65F6\u4E5F\u53EF\u8BBF\u95EE\u5F53\u524D\u9875\u9762</td><td>Boolean</td><td>false</td></tr></tbody></table></div>`,12)])))}});export{r as __pageData,u as default};
