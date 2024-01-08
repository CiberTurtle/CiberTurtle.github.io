<script lang="ts">
	import '$lib/styles/parts/card.scss'
	import '$lib/styles/parts/button.scss'
	import '$lib/styles/parts/badge.scss'
</script>

<section class="flex-col pb-8">
	<div class="bento">
		<div class="card" style="--clr: #cd6093; --shadow: #000000">
			<img class="cover" src="./images/trix-cover.webp" />
			<div class="screen">
				<div class="badges">
					<div class="badge jam-20sec" data-tooltip="Entry for 20 Second Jam 2023"></div>
				</div>
				<h3 class="invis">Trix</h3>
			</div>
			<div class="description">
				<p> You're an overpowered ship, but will it be enough? </p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/trix" target="_blank">Give it a shot →</a>
			</div>
		</div>

		<div class="card" style="--clr: #3978a8; --shadow: #3978a8; grid-column: 0 / 3;">
			<img class="cover" loading="lazy" src="./images/tidal-towns-cover.webp" />
			<div class="screen">
				<div class="badges">
					<div class="badge jam-ld" data-tooltip="Entry for Ludum Dare 54"></div>
				</div>
				<h3 class="invis">Tidal Towns</h3>
			</div>
			<div class="description">
				<p>
					A city <span class="strike">builder</span> saver made in a weekend for Ludum Dare 54.
				</p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/tidal-towns" target="_blank"
					>Save the City from Ruin →</a
				>
			</div>
		</div>

		<div class="card" style="--clr: #e6482e; --shadow: #7a444a;">
			<img class="cover" loading="lazy" src="./images/ball-cover.webp" />
			<div class="screen">
				<div class="badges">
					<div class="badge jam-score" data-tooltip="Entry for FODDIAN JAM (Space Score)"></div>
				</div>
				<h3 class="invis">Ball Entanglement</h3>
			</div>
			<div class="description">
				<p> Harness the power quantum entanglement to climb mountains. </p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/ball-entanglement" target="_blank"
					>Climb the Ranks →</a
				>
			</div>
		</div>

		<div class="card" style="--clr: #f47e1b; --shadow: #397b44;">
			<img class="cover" loading="lazy" src="./images/space-cow-cover.webp" />
			<div class="screen">
				<div class="badges">
					<div class="badge jam-gmtk" data-tooltip="Entry for GMTK Game Jam 2023"></div>
				</div>
				<h3 class="invis">Utterly from Outer Space</h3>
			</div>
			<div class="description">
				<p> Give those aliens a taste of their own medicine! </p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/utterly-from-outer-space" target="_blank"
					>BECOME COW →</a
				>
			</div>
		</div>

		<div class="card" style="--clr: #71aa34; --shadow: #39314b;">
			<img class="cover" loading="lazy" src="./images/vines-cover.webp" />
			<div class="screen">
				<div class="badges">
					<div
						class="badge jam-8bit2inf"
						data-tooltip="Entry for Puzzle Jam III (8bits to infinity)"
					></div>
				</div>
				<h3 class="invis">Vines</h3>
			</div>
			<div class="description">
				<p> Puzzle good in the neighborhood. </p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/vines" target="_blank">touch vine →</a>
			</div>
		</div>

		<div class="card" style="--clr: #f4b41b; --shadow: #f4b41b;">
			<img class="cover" loading="lazy" src="./images/poultry-cover.webp" />
			<div class="screen">
				<h3 class="invis">Poultry Pounders</h3>
			</div>
			<div class="description">
				<p> Fight your friends in an intense Spelunkey-like deathmatch! </p>
			</div>
			<div class="floating">
				<a class="btn" href="https://ciber-turtle.itch.io/poultry-pounders" target="_blank"
					>BATTLE IT OUT →</a
				>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.bento {
		display: flex;
		// flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 4rem;
		// display: grid;
		// align-self: center;
		// width: min(100rem, calc(100vw - 4rem));
		// grid-template-columns: 1fr 1fr 1fr;
		// grid-template-rows: 1fr 1fr 1fr;
		// gap: 4rem;

		// > :first-child {
		// 	grid-column: 1 / 3;
		// 	grid-row: 1 / 3;
		// }
	}
</style>
