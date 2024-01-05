<script lang="ts">
	import '@fontsource-variable/jetbrains-mono'
	import '@fontsource/fira-sans'

	import '$lib/styles/main.sass'
	import './styles.scss'
	import './hljs.scss'

	import { hljs } from '$lib/directives'

	var css_code = `div * #base > :first-child .alph`
	var html_code = `<h1 class="hi">Hello world</h1>`
</script>

<div class="titlebar">
	<div class="span">The CSS Selector Game</div>
	<a href="/" data-sveltekit-preload-data="off">Back to the Home Page</a>
</div>

<div class="game-layout">
	<div class="pane pane-editor">
		<div class="tab"> Your CSS Selector </div>
		<div class="content">
			<code use:hljs={{ code: css_code, lang: 'css' }}></code>
		</div>
	</div>

	<div class="pane pane-preview">
		<div class="tab"> Web Browser </div>
		<div class="content"> </div>
	</div>

	<div class="pane pane-html">
		<div class="tab"> HTML Code </div>
		<div class="content overflow-x">
			<pre><code use:hljs={{ code: html_code, lang: 'html' }}></code></pre>
		</div>
	</div>
</div>
