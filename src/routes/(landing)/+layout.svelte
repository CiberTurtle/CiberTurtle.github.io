<script lang="ts">
	import '$lib/styles/bespoke-sans.css'
	import '$lib/styles/main.sass'
	import '@fontsource-variable/jetbrains-mono'
</script>

<slot />

<style lang="scss">
	:global(html) {
		--font-spoke: 'BespokeSans', sans-serif;
		--font-mono: 'JetBrains Mono Variable' monospace;

		user-select: none;

		font-family: var(--font-spoke);
		line-height: 1.5rem;

		background-color: white;
		color: black;
	}

	:global(html, body) {
		overflow-x: hidden;
	}
</style>
