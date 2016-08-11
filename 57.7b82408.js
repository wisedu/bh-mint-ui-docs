webpackJsonp([57],{12:function(s,n){var t,a;s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),a&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=a)},74:function(s,n,t){s.exports=t(12),s.exports.template='<h1>Picker</h1>\n<blockquote>\n<p>选择器，支持多 slot 联动。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Picker.name, Picker);\n</code></pre>\n<h2>例子</h2>\n<p>传入 <code>slots</code>，当被选中的值发生变化时触发 <code>change</code> 事件。<code>change</code> 事件有两个参数，分别为当前 <code>picker</code> 的 vue 实例和各 slot 被选中的值组成的数组</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-picker</span> <span class="hljs-attr">:slots</span>=<span class="hljs-string">"slots"</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">"onValuesChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-picker</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  methods: {\n    onValuesChange(picker, values) {\n      <span class="hljs-keyword">if</span> (values[<span class="hljs-number">0</span>] &gt; values[<span class="hljs-number">1</span>]) {\n        picker.setSlotValue(<span class="hljs-number">1</span>, values[<span class="hljs-number">0</span>]);\n      }\n    }\n  },\n  data() {\n    <span class="hljs-keyword">return</span> {\n      slots: [\n        {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot1\'</span>,\n          textAlign: <span class="hljs-string">\'right\'</span>\n        }, {\n          divider: <span class="hljs-literal">true</span>,\n          content: <span class="hljs-string">\'-\'</span>,\n          className: <span class="hljs-string">\'slot2\'</span>\n        }, {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot3\'</span>,\n          textAlign: <span class="hljs-string">\'left\'</span>\n        }\n      ]\n    };\n  }\n};\n</code></pre>\n<h2><code>change</code> 事件</h2>\n<p>在 <code>change</code> 事件中，可以使用注册到 <code>picker</code> 实例上的一些方法：</p>\n<ul>\n<li>getSlotValue(index)：获取给定 slot 目前被选中的值</li>\n<li>setSlotValue(index, value)：设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中</li>\n<li>getSlotValues(index)：获取给定 slot 的备选值数组</li>\n<li>setSlotValues(index, values)：设定给定 slot 的备选值数组</li>\n<li>getValues()：获取所有 slot 目前被选中的值（分隔符 slot 除外）</li>\n<li>setValues(values)：设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中</li>\n</ul>\n<h2><code>slots</code></h2>\n<p>绑定到 <code>slots</code> 属性的数组由对象组成，每个对象都对应一个 slot，它们有如下键名</p>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>key</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>divider</td>\n<td>对应 slot 是否为分隔符</td>\n</tr>\n<tr>\n<td>content</td>\n<td>分隔符 slot 的显示文本</td>\n</tr>\n<tr>\n<td>values</td>\n<td>对应 slot 的备选值数组</td>\n</tr>\n<tr>\n<td>defaultIndex</td>\n<td>对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0</td>\n</tr>\n<tr>\n<td>textAlign</td>\n<td>对应 slot 的对齐方式</td>\n</tr>\n<tr>\n<td>flex</td>\n<td>对应 slot CSS 的 flex 值</td>\n</tr>\n<tr>\n<td>className</td>\n<td>对应 slot 的类名</td>\n</tr>\n</tbody>\n</table></div><h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>slots</td>\n<td>slot 对象数组</td>\n<td>Array</td>\n<td></td>\n<td>[]</td>\n</tr>\n<tr>\n<td>showToolbar</td>\n<td>是否在组件顶部显示一个 toolbar，内容自定义</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>visibleItemCount</td>\n<td>slot 中可见备选值的个数</td>\n<td>Number</td>\n<td></td>\n<td>5</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>当 showToolbar 为 true 时，toolbar 中的内容</td>\n</tr>\n</tbody>\n</table></div>'}});