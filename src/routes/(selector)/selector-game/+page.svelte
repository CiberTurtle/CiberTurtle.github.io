<script lang="ts">
	import '@fontsource-variable/jetbrains-mono'
	import '@fontsource/fira-sans'

	import '$lib/styles/main.sass'
	import './styles.scss'
	import './hljs.scss'

	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { hljs } from '$lib/directives'
	import { level_list } from './levels'

	let css_selector = ''
	let html_code = ''
	let preview_element: HTMLElement
	let level_index = Number($page.url.searchParams.get('level')) || 0
	let show_hints = false

	$: {
		level_index = Math.max(Math.min(level_index, level_list.length - 1), 0)
		html_code = level_list[level_index].html
		$page.url.searchParams.set('level', level_index.toString())

		clear_selector()

		if (browser) {
			goto($page.url, {})
		}
	}

	$: {
		if (preview_element) {
			// Clear selected elements
			for (const element of preview_element.querySelectorAll('.selected')) {
				element.classList.remove('selected')
			}

			const selectable_elements = preview_element.querySelectorAll('[select-me]')

			let selected_elements: Element[] = []
			try {
				selected_elements = Array.from(preview_element.querySelectorAll(css_selector).values())
			} catch {}

			let selected_wrong = false
			for (const element of selected_elements) {
				if (!element.hasAttribute('select-me')) selected_wrong = true
				element.classList.toggle('selected', true)
			}
		}
	}

	const clear_selector = () => {
		css_selector = ''
		show_hints = false
	}
</script>

<div class="titlebar">
	<div class="title">The Selector Game</div>

	<div class="level-select">
		<button
			on:click={() => (level_index = level_index - 1)}
			disabled={level_index <= 0}
			title="Previous level"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 12L6 8L10 4"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>

		<select bind:value={level_index} title="Select a level">
			{#each level_list as level, index}
				<option value={index}>Level {index + 1}: {level.title}</option>
			{/each}
		</select>

		<button
			on:click={() => (level_index = level_index + 1)}
			disabled={level_index >= level_list.length - 1}
			title="Next level"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6 12L10 8L6 4"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>

	<a href="/" data-sveltekit-preload-data="off">Back to the Home Page</a>
</div>

<div class="game-layout">
	<div class="pane selector-editor">
		<div class="bar">
			<div class="tab"> Your Selector </div>
		</div>
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

	<div class="pane html-code">
		<div class="bar">
			<div class="tab"> HTML Code </div>
			<div class="controls">
				<button
					on:click={() => {
						show_hints = true
					}}
					class="hint-button"
					disabled={show_hints}
				>
					{#if show_hints}
						Revealed Hints
					{:else}
						Reveal Hints
					{/if}
				</button>
			</div>
		</div>
		<div class="content">
			<pre
				><code use:hljs={{ code: html_code, lang: 'html' }} class:hide-comments={!show_hints}
				></code></pre
			>
		</div>
	</div>

	<div class="pane web-browser">
		<div class="bar">
			<div class="tab"> Web Browser </div>
		</div>
		<div bind:this={preview_element} class="content">
			{@html html_code}
		</div>
	</div>
</div>
