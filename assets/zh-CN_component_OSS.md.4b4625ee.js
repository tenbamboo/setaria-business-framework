import{o as n,c as s,b as a}from"./app.b4cd3ec1.js";const t=a(`<h2 id="oss-\u6587\u4EF6\u670D\u52A1" tabindex="-1">OSS \u6587\u4EF6\u670D\u52A1 <a class="header-anchor vp-link" href="#oss-\u6587\u4EF6\u670D\u52A1" aria-hidden="true">#</a></h2><h3 id="getpreviewurl" tabindex="-1">getPreviewUrl <a class="header-anchor vp-link" href="#getpreviewurl" aria-hidden="true">#</a></h3><p>\u83B7\u53D6OSS\u670D\u52A1\u6587\u4EF6\u7684\u9884\u89C8\u5730\u5740</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Oss  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fssc-web-framework&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E3A \u6587\u4EF6ID</span>
Oss<span class="token punctuation">.</span><span class="token function">getPreviewUrl</span><span class="token punctuation">(</span><span class="token string">&#39;123123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="getuploadurl" tabindex="-1">getUploadUrl <a class="header-anchor vp-link" href="#getuploadurl" aria-hidden="true">#</a></h3><p>\u83B7\u53D6OSS\u670D\u52A1\u4E0A\u4F20\u6587\u4EF6\u7684\u5730\u5740</p><div class="language-javascript"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Oss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fssc-web-framework&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E3A bizType</span>
Oss<span class="token punctuation">.</span><span class="token function">getUploadUrl</span><span class="token punctuation">(</span><span class="token string">&#39;DEMO_BIZ_TYPE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><h3 id="downloadfile" tabindex="-1">downloadFile <a class="header-anchor vp-link" href="#downloadfile" aria-hidden="true">#</a></h3><p>\u83B7\u53D6OSS\u670D\u52A1\u4E0B\u8F7D\u6587\u4EF6\u7684\u5730\u5740(\u5E76\u4E0B\u8F7D)</p><div class="language-javascript"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Oss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fssc-web-framework&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E3A \u6587\u4EF6ID</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> Oss<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token number">123123</span><span class="token punctuation">)</span>

<span class="token comment">// \u53C2\u6570\u4E3A \u6587\u4EF6ID</span>
<span class="token comment">// \u53C2\u65702\u4E3A \u662F\u5426\u9ED8\u8BA4\u6267\u884C\u4E0B\u8F7D\u64CD\u4F5C\u9ED8\u8BA4\u4E3A\u662F</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> Oss<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token number">123123</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>


</code></pre></div><h3 id="batchdownloadfile" tabindex="-1">batchDownloadFile <a class="header-anchor vp-link" href="#batchdownloadfile" aria-hidden="true">#</a></h3><p>\u83B7\u53D6OSS\u670D\u52A1\u4E0B\u8F7D\u6587\u4EF6\u7684\u5730\u5740(\u5E76\u4E0B\u8F7D)</p><div class="language-javascript"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Oss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fssc-web-framework&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u53C2\u6570\u4E3A \u6587\u4EF6ID</span>
 Oss<span class="token punctuation">.</span><span class="token function">batchDownloadFile</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">123123</span><span class="token punctuation">,</span><span class="token number">123123</span><span class="token punctuation">,</span><span class="token number">123123</span><span class="token punctuation">]</span><span class="token punctuation">)</span>



</code></pre></div>`,13),p=[t],u='{"title":"OSS \u6587\u4EF6\u670D\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"OSS \u6587\u4EF6\u670D\u52A1","slug":"oss-\u6587\u4EF6\u670D\u52A1"},{"level":3,"title":"getPreviewUrl","slug":"getpreviewurl"},{"level":3,"title":"getUploadUrl","slug":"getuploadurl"},{"level":3,"title":"downloadFile","slug":"downloadfile"},{"level":3,"title":"batchDownloadFile","slug":"batchdownloadfile"}],"relativePath":"zh-CN/component/OSS.md","lastUpdated":1703520431000}',e={},r=Object.assign(e,{__name:"OSS",setup(o){return(c,l)=>(n(),s("div",null,p))}});export{u as __pageData,r as default};
