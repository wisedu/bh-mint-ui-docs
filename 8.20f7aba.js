webpackJsonp([8],{61:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},123:function(s,a,n){s.exports=n(61),s.exports.template='<h1>Search</h1>\n<blockquote>\n<p>搜索框，可显示搜索结果列表。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Search } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Search.name, Search);\n</code></pre>\n<h2>例子</h2>\n<p>基础用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-search</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-search</span>&gt;</span>\n</code></pre>\n<p>设置显示文字</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-search</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>\n  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">"取消"</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"搜索"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-search</span>&gt;</span>\n</code></pre>\n<p>带搜索结果</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-search</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span> <span class="hljs-attr">:result.sync</span>=<span class="hljs-string">"result"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-search</span>&gt;</span>\n</code></pre>\n<p>自定义搜索结果</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-search</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"value"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span>\n    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in result"</span>\n    <span class="hljs-attr">:title</span>=<span class="hljs-string">"item.title"</span>\n    <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-search</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>搜索结果绑定值</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>取消按钮文字</td>\n<td>String</td>\n<td></td>\n<td>取消</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>搜索框占位内容</td>\n<td>String</td>\n<td></td>\n<td>搜索</td>\n</tr>\n<tr>\n<td>result</td>\n<td>搜索结果列表</td>\n<td>Array</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>自定义搜索结果列表</td>\n</tr>\n</tbody>\n</table></div>'}});