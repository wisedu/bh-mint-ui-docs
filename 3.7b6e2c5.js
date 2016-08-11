webpackJsonp([3],{66:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},128:function(s,a,n){s.exports=n(66),s.exports.template='<h1>Tabbar</h1>\n<blockquote>\n<p>底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Tabbar, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Tabbar.name, Tabbar);\nVue.component(TabItem.name, TabItem);\n</code></pre>\n<h2>例子</h2>\n<p>搭配 <a v-link="{path:\'/\' + $route.language + \'/tab-container\'}">tab-container</a> 组件使用</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-tabbar</span> <span class="hljs-attr">:selected.sync</span>=<span class="hljs-string">"selected"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"外卖"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span>&gt;</span>\n    外卖\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"订单"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span>&gt;</span>\n    订单\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"发现"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span>&gt;</span>\n    发现\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-tab-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"我的"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span>&gt;</span>\n    我的\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-tab-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-tabbar</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>tabbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>固定在页面底部</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>selected</td>\n<td>返回当前选中的 tab-item 的 id</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>选中后的返回值</td>\n<td>*</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>tabbar</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>内容</td>\n</tr>\n</tbody>\n</table></div><h3>tab-item</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>显示文字</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>icon 图标</td>\n</tr>\n</tbody>\n</table></div>'}});