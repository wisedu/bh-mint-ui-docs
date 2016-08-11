webpackJsonp([20],{49:function(n,t){var e,s;n.exports=e||{},n.exports.__esModule&&(n.exports=n.exports["default"]),s&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=s)},111:function(n,t,e){n.exports=e(49),n.exports.template='<h1>Indicator</h1>\n<blockquote>\n<p>加载提示框，支持自定义文本和加载图标。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Indicator } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>例子</h2>\n<p>当需要显示加载提示框时，调用 <code>open</code> 方法</p>\n<pre><code class="language-javascript">Indicator.open();\n</code></pre>\n<p>在加载图标下方显示文本</p>\n<pre><code class="language-javascript">Indicator.open(<span class="hljs-string">\'加载中...\'</span>);\n</code></pre>\n<p>也可以在调用时传入一个对象</p>\n<pre><code class="language-javascript">Indicator.open({\n  text: <span class="hljs-string">\'加载中...\'</span>,\n  spinnerType: <span class="hljs-string">\'fading-circle\'</span>\n});\n</code></pre>\n<p>调用 <code>close</code> 方法将其关闭</p>\n<pre><code class="language-javascript">Indicator.close();\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>文本内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>spinnerType</td>\n<td>加载图标的类型</td>\n<td>String</td>\n<td>\'snake\'<br>\'fading-circle\'<br>\'double-bounce\'<br>\'triple-bounce\'</td>\n<td>\'snake\'</td>\n</tr>\n</tbody>\n</table></div>'}});