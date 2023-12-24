export const blob_to_data_uri = async (blob: Blob): Promise<string> => {
	return new Promise((resolve) => {
		const reader = new FileReader()
		reader.readAsDataURL(blob)
		reader.onload = (e) => resolve(e.target?.result! as string)
	})
}
