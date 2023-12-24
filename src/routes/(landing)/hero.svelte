<script lang="ts">
</script>

<header>
	<h1>Hey I'm Ryly Dou</h1>
	<div class="one-liner">
		I make <span class="bold">applications</span>, <span class="bold">websites</span>, and
		<em class="bold">especially games</em>
	</div>

	<div class="description italic">
		More of what is love to do is on <a
			href="https://docs.google.com/document/d/1ZKd6QrhC72LryLohXTGJZc1fPDMtsxPd0utQ1zmwN94"
			target="_blank">my resume</a
		>
	</div>
</header>

<style lang="scss">
	header {
		min-height: calc(100vh - 10rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 1rem;
		font-size: 1.25rem;
		line-height: 2rem;
	}

	h1 {
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-size: 5rem;
		line-height: 5.25rem;
		letter-spacing: -4px;
		font-weight: 900;
		rotate: -2.5deg;
	}

	.one-liner {
		margin-bottom: 4rem;
		font-size: 2rem;
		line-height: 2.125rem;
		rotate: -2.5deg;
	}

	a {
		text-decoration: underline;
		text-decoration-color: #3978a8;
		text-decoration-thickness: 2px;
		text-underline-offset: 2px;
		color: #3978a8;

		&:hover {
			background-color: #3978a8;
			outline: solid 4px #3978a8;
			outline-offset: -1px;
			color: white;
		}
	}
</style>
