webpackJsonp([46],{23:function(t,n){var e,s;t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},85:function(t,n,e){t.exports=e(23),t.exports.template='<h1>Message box</h1>\n<blockquote>\n<p>A popup message box with multiple interacting forms.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { MessageBox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>Example</h2>\n<p>Open a message box with its <code>title</code> and <code>message</code></p>\n<pre><code class="language-javascript">MessageBox(<span class="hljs-string">\'Notice\'</span>, <span class="hljs-string">\'You clicked the button\'</span>);\n</code></pre>\n<p>Or pass an object as its configuration</p>\n<pre><code class="language-javascript">MessageBox({\n  title: <span class="hljs-string">\'Notice\'</span>,\n  message: <span class="hljs-string">\'Are you sure?\'</span>,\n  showCancelButton: <span class="hljs-literal">true</span>\n});\n</code></pre>\n<p>Besides, <code>MessageBox</code> has three methods: <code>alert</code>, <code>confirm</code> and <code>prompt</code>. They all return a Promise</p>\n<pre><code class="language-javascript">MessageBox.alert(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.alert(<span class="hljs-string">\'Success!\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(<span class="hljs-string">\'Are you sure?\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(<span class="hljs-string">\'Please tell me your name\'</span>).then(({ value, action }) =&gt; {\n  ...\n});\n</code></pre>\n<p>If the user clicks the cancel button in prompt, the returned Promise will be rejected</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>title of the message box</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>message</td>\n<td>message of the message box</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showConfirmButton</td>\n<td>if a confirm button is displayed</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>showCancelButton</td>\n<td>if a cancel button is displayed</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonText</td>\n<td>text of the confirm button</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmButtonHighlight</td>\n<td>if the text of the confirm button is highlighted</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonClass</td>\n<td>class name of the confirm button</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonText</td>\n<td>text of the cancel button</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonHighlight</td>\n<td>if the text of the cancel button is highlighted</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>cancelButtonClass</td>\n<td>class name of the cancel button</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showInput</td>\n<td>if an input is displayed</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>inputValue</td>\n<td>value of the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>inputPlaceholder</td>\n<td>place holder for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>'}});