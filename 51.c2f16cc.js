webpackJsonp([51],{18:function(s,n){var t,a;s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),a&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=a)},80:function(s,n,t){s.exports=t(18),s.exports.template='<h1>Index List</h1>\n<blockquote>\n<p>An indexed list, can be navigated by index.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { IndexList, IndexSection } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(IndexList.name, IndexList);\nVue.component(IndexSection.name, IndexSection);\n</code></pre>\n<h2>Example</h2>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"A"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Aaron"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Alden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Austin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"B"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Baldwin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Braden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  ...\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"Z"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zack"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zane"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<p>Each <code>mt-index-section</code> corresponds with one of the index in the index navigator. The <code>index</code> attribute of <code>mt-index-section</code> is the display text of its corresponding index. Any custom content can be nested inside <code>mt-index-section</code>.</p>\n<p>When your finger moves on the index navigator, an index indicator will be displayed at the center of the list. If the indicator is not desired, simply set <code>show-indicator</code> to <code>false</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span> <span class="hljs-attr">:show-indicator</span>=<span class="hljs-string">"false"</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>height of the component. Automatically extends to the bottom of the viewport if not specified</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showIndicator</td>\n<td>if an index indicator is created</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>index value(required)</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>one or more <code>mt-index-section</code> components</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>the content of a single <code>mt-index-section</code></td>\n</tr>\n</tbody>\n</table></div>'}});