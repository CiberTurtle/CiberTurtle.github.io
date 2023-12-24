<script lang="ts">
	import '$lib/styles/hack.scss'
	import '@fontsource-variable/jetbrains-mono'

	import { blob_to_data_uri } from '$lib/util'
	import { onMount } from 'svelte'

	let image: HTMLImageElement
	let resulting_image: HTMLImageElement
	let canvas: HTMLCanvasElement
	let ctx: CanvasRenderingContext2D
	let data_url_element: HTMLElement

	let max_size = 8
	let quality = 0.5
	let format = 'webp'

	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D

		document.ondragover = (ev) => {
			ev.preventDefault()
		}

		document.ondrop = (ev) => {
			ev.preventDefault()
			const dataTransfer = ev.dataTransfer
			const files = dataTransfer && dataTransfer.files
			if (files && files.length === 1) {
				const reader = new FileReader()
				reader.onload = async () => {
					const buffer = reader.result as ArrayBuffer
					await set_image(buffer)
				}
				reader.readAsArrayBuffer(files[0])
			}
		}
	})

	const set_image = async (buffer: ArrayBuffer) => {
		await new Promise((resolve) => {
			const blob = new Blob([buffer])
			const url = URL.createObjectURL(blob)
			image.onload = resolve
			image.src = url
		})
	}

	const update_image = async () => {
		const size = Math.max(image.width, image.height)
		canvas.width = Math.round((max_size * image.width) / size)
		canvas.height = Math.round((max_size * image.height) / size)

		ctx.imageSmoothingEnabled = true
		ctx.imageSmoothingQuality = 'high'
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
		ctx.textBaseline = 'top'
		ctx.textAlign = 'left'

		const blob = await new Promise<Blob | null>((resolve) =>
			canvas.toBlob((blob) => resolve(blob), `image/${format}`, quality),
		)

		if (!blob) {
			console.error('Failed to covert canvas to blob')
			return
		}

		const url = await blob_to_data_uri(blob)
		data_url_element.innerText = url
		resulting_image.src = url
	}

	const copy_datauri = (format = '{}'): void => {
		let text = data_url_element.innerText
		text = format.replace('{}', text)
		navigator.clipboard.writeText(text)
	}
</script>

<header>
	<h1>Image Crusher</h1>
</header>

<main class="flex flex-wrap gap-2 p-2">
	<form on:submit={update_image} class="frame flex-col flex-wrap gap-1">
		<div class="flex-row gap-1 item-start">
			<label>
				<span>Max size</span>
				<input type="number" bind:value={max_size} on:input={update_image} />
			</label>
			<label>
				<span>Quality</span>
				<div class="flex-row gap-1">
					<input type="text" bind:value={quality} on:input={update_image} style="width: 4rem" />
					<input
						type="range"
						bind:value={quality}
						on:input={update_image}
						min="0"
						max="1"
						step="0.01"
					/>
				</div>
			</label>
			<label>
				<span>Format</span>
				<input type="text" bind:value={format} on:input={update_image} />
			</label>
		</div>
		<button>Update</button>
	</form>

	<div class="frame flex-row flex-wrap gap-2 item-center">
		<div class="frame flex-col item-center gap-1">
			<h3>Input</h3>
			<img
				bind:this={image}
				class="img"
				src="images/tidal-towns-cover.png"
				alt="Drag and drop an image"
				on:load={update_image}
			/>
		</div>
		<span class="bold text-2">→</span>
		<div class="frame flex-col item-center gap-1">
			<h3>Working Canvas</h3>
			<canvas class="img" bind:this={canvas}></canvas>
		</div>
		<span class="bold text-2">→</span>
		<div class="frame flex-col item-center gap-1">
			<h3>Resulting Image</h3>
			<img class="img" bind:this={resulting_image} />
		</div>
	</div>

	<div class="frame flex-col item-start gap-1 w-full">
		<div class="flex-row item-center gap-1/2">
			<button on:click={() => copy_datauri('{}')} class="">Data URL</button>
			<button on:click={() => copy_datauri("url('{}')")} class="">CSS URL</button>
			<button on:click={() => copy_datauri("background-image: url('{}');")} class=""
				>CSS Background Image</button
			>
			<span>{data_url_element?.innerText?.length} chars</span>
		</div>
		<code bind:this={data_url_element} style="word-wrap: break-word;"> Data URI </code>
	</div>
</main>

<style lang="scss">
	.img {
		min-width: 16rem;
		max-width: 16rem;
	}
</style>
