import type { Readable } from 'svelte/store'

import _hljs from 'highlight.js'
import type { Action } from 'svelte/action'


export const hljs: Action<HTMLElement, { code: string, lang: string }> = (node, param) => {
	const result = _hljs.highlight(param.code, {
		language: param.lang,
	})
	node.innerHTML = result.value

	return {}
}
