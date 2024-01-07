export type Level = {
	title: string
	html: string
}

export const level_list: Level[] = [
	{
		title: 'Introduction',
		html: (await import('./introduction.html?raw')).default,
	},
	{
		title: 'Classes',
		html: (await import('./classes.html?raw')).default,
	},
	{
		title: 'Keyboard',
		html: (await import('./keyboard.html?raw')).default,
	},
	{
		title: 'Shorthand',
		html: (await import('./shorthand.html?raw')).default,
	},
	{
		title: 'A Lot of Things',
		html: (await import('./a-lot-of-things.html?raw')).default,
	},
	{
		title: 'Know-It-All',
		html: (await import('./know-it-all.html?raw')).default,
	},
	{
		title: 'First',
		html: (await import('./first.html?raw')).default,
	},
	{
		title: 'Not Buttons',
		html: (await import('./not-buttons.html?raw')).default,
	},
]
