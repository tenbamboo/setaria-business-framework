import{o as n,c as s,b as a}from"./app.8dfaa0eb.js";var p="/setaria-business-framework/images/tip2.png";const t=a(`<h2 id="router-\u8DEF\u7531" tabindex="-1">Router \u8DEF\u7531 <a class="header-anchor vp-link" href="#router-\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u7EE7\u627F<code>vue-router</code> API</p><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor vp-link" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
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
</code></pre></div><h3 id="\u8DEF\u7531\u5B9A\u4E49" tabindex="-1">\u8DEF\u7531\u5B9A\u4E49 <a class="header-anchor vp-link" href="#\u8DEF\u7531\u5B9A\u4E49" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt=""></p><ol start="2"><li><p>\u5B9A\u4E49\u8DEF\u7531\u540D\u79F0\u65F6\uFF0C\u5E94\u548C\u5F53\u524D\u7269\u7406\u8DEF\u5F84\u540D\u4FDD\u6301\u4E00\u81F4\uFF0C\u8FD9\u6837\u540E\u7EED\u76F4\u63A5\u53EF\u901A\u8FC7 url \u627E\u5230\u5BF9\u5E94\u7684\u7269\u7406\u6587\u4EF6</p></li><li><p>\u5B9A\u4E49\u8DEF\u7531\u65F6\uFF0C\u9700\u5173\u6CE8<code>webpackChunkName</code>\u5C5E\u6027\uFF0C\u6B64\u5C5E\u6027\u4E00\u822C\u548C<code>name</code>\u5C5E\u6027\u4E00\u81F4\u5373\u53EF\uFF0C\u6BD4\u5982\uFF1A</p></li></ol><div class="language-javascript"><pre><code><span class="token keyword">const</span> BaseTemplate <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/BaseTemplate.vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> BaseTemplate<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
          <span class="token comment">/* webpackChunkName: &quot;demo1-1&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-1.vue&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
          <span class="token comment">/* webpackChunkName: &quot;demo1-2&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-2.vue&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;demo1-3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo1-3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
          <span class="token comment">/* webpackChunkName: &quot;demo1-3&quot; */</span> <span class="token string">&#39;@/views/demo1/demo1-3.vue&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div>`,8),o=[t],k='{"title":"Router \u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"Router \u8DEF\u7531","slug":"router-\u8DEF\u7531"},{"level":3,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":3,"title":"\u8DEF\u7531\u5B9A\u4E49","slug":"\u8DEF\u7531\u5B9A\u4E49"}],"relativePath":"zh-CN/component/router.md","lastUpdated":1703520431000}',e={},i=Object.assign(e,{__name:"router",setup(c){return(l,r)=>(n(),s("div",null,o))}});export{k as __pageData,i as default};
