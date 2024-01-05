<script lang="ts">
	import '@fontsource-variable/jetbrains-mono'
	import '@fontsource/fira-sans'

	import '$lib/styles/main.sass'
	import './styles.scss'
	import './hljs.scss'

	import { hljs } from '$lib/directives'
	import { onMount } from 'svelte'

	let css_selector = ''
	let html_code = ''
	let preview_element: HTMLElement

	$: {
		if (preview_element) {
			for (const element of preview_element.querySelectorAll('.selected')) {
				element.classList.remove('selected')
			}

			try {
				const elements = preview_element.querySelectorAll(css_selector)
				for (const element of elements) {
					element.classList.toggle('selected', true)
				}
			} catch {}
		}
	}

	onMount(async () => {
		const url = (await import('./problems/test.txt')).default
		html_code = await (await fetch(url)).text()
	})
</script>

<div class="titlebar">
	<div class="span">The CSS Selector Game</div>
	<a href="/" data-sveltekit-preload-data="off">Back to the Home Page</a>
</div>

<div class="game-layout">
	<div class="pane pane-editor">
		<div class="tab"> Your CSS Selector </div>
		<div class="content">
			<div class="code-editor">
				<pre><code use:hljs={{ code: css_selector, lang: 'css' }}></code></pre>
				<input
					type="text"
					bind:value={css_selector}
					autocomplete="off"
					spellcheck="false"
					placeholder="Write your CSS selector here..."
				/>
			</div>
		</div>
	</div>

	<div class="pane pane-preview">
		<div class="tab"> Web Browser </div>
		<div bind:this={preview_element} class="content web-browser">
			{@html html_code}
		</div>
	</div>

	<div class="pane pane-html">
		<div class="tab"> HTML Code </div>
		<div class="content overflow-x">
			<pre><code use:hljs={{ code: html_code, lang: 'html' }}></code></pre>
		</div>
	</div>
</div>
