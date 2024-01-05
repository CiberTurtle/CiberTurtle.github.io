import _hljs from 'highlight.js'
import type { Action } from 'svelte/action'


export const hljs: Action<HTMLElement, { code: string, lang: string }> = (node, params) => {
	const result = _hljs.highlight(params.code, {
		language: params.lang,
	})
	node.innerHTML = result.value

	return {
		update(params) {
			const result = _hljs.highlight(params.code, {
				language: params.lang,
			})
			node.innerHTML = result.value
		},
	}
}
