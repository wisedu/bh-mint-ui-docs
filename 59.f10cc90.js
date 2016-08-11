webpackJsonp([59],{10:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},72:function(s,a,n){s.exports=n(10),s.exports.template='<h1>Badge</h1>\n<blockquote>\n<p>Highlight new items/unread notifications.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Badge.name, Badge);\n</code></pre>\n<h2>Usage</h2>\n<p>Configure size</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"normal"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<p>And type</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<p>Even color</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#888"</span>&gt;</span>custom color<span class="hljs-tag">&lt;/<span class="hljs-name">mt-badge</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type of the badge</td>\n<td>String</td>\n<td>primary, error, success, warning</td>\n<td>primary</td>\n</tr>\n<tr>\n<td>color</td>\n<td>CSS color value</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>size of the badge</td>\n<td>String</td>\n<td>normal, large, small</td>\n<td>normal</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>test content</td>\n</tr>\n</tbody>\n</table></div>'}});