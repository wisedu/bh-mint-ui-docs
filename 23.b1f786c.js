webpackJsonp([23],{46:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},108:function(s,a,n){s.exports=n(46),s.exports.template='<h1>Field</h1>\n<blockquote>\n<p>表单编辑器。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Field } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Field.name, Field);\n</code></pre>\n<h2>例子</h2>\n<p>基础用法</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"用户名"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入用户名"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"邮箱"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入邮箱"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"密码"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入密码"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"手机号"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入手机号"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"tel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"网站"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入网址"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"url"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"数字"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入数字"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"生日"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入生日"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"自我介绍"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"自我介绍"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>设置校验状态</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"邮箱"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"邮箱"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"error"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"邮箱"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>自定义内容（例如添加验证码）</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"验证码"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"45px"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100px"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>输入框类型</td>\n<td>String</td>\n<td>text, number, email, url, tel, date, datetime, password, textarea</td>\n<td>text</td>\n</tr>\n<tr>\n<td>label</td>\n<td>标签</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>绑定表单输入值</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rows</td>\n<td>类型为 textarea 时可指定高度（显示行数）</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>readonly</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disabled</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>state</td>\n<td>校验状态</td>\n<td>String</td>\n<td>error, success, warning</td>\n<td></td>\n</tr>\n<tr>\n<td>attr</td>\n<td>设置原生属性，例如 <code>:attr=&quot;{ maxlength: 10 }&quot;</code></td>\n<td>Object</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示的 HTML 内容</td>\n</tr>\n</tbody>\n</table></div>'}});