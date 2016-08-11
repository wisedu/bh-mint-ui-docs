webpackJsonp([29],{40:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},102:function(s,a,n){s.exports=n(40),s.exports.template='<h1>Badge</h1>\n<blockquote>\n<p>徽章，可指定颜色和尺寸。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Badge.name, Badge);\n</code></pre>\n<h2>例子</h2>\n<p>指定尺寸</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<p>指定类型</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<p>指定颜色</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#888"</span>&gt;</span>自定义颜色<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>显示类型</td>\n<td>String</td>\n<td>primary, error, success, warning</td>\n<td>primary</td>\n</tr>\n<tr>\n<td>color</td>\n<td>自定义颜色值</td>\n<td>String</td>\n<td></td>\n<td>type 的颜色</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>String</td>\n<td>normal, large, small</td>\n<td>normal</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示内容</td>\n</tr>\n</tbody>\n</table></div>'}});