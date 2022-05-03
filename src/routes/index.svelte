<script lang="ts">
	import type { Cell, Player } from '$lib/common';
	import { Team } from '$lib/common';
	import CellGraphic from '$lib/components/CellGraphic.svelte';

	// Current Player State
	let currentPlayer: Player = { team: Team.Team_X };
	function togglePlayer() {
		if (currentPlayer.team == Team.Team_X) {
			currentPlayer.team = Team.Team_O;
		} else if (currentPlayer.team == Team.Team_O) {
			currentPlayer.team = Team.Team_X;
		} else {
			console.log("I'm not expecting this to fail, but here's what would happen if it did.");
		}
	}

	let cells = new Array(9).fill({ ownedBy: Team.Nobody }) as Cell[];

	// Sanity check
	$: {
		console.log(currentPlayer, cells);
	}
</script>

<main>
	<div class="container">
		<div class="cells">
			{#each cells as cell, index ((cell.index = index))}
				<CellGraphic on:click={togglePlayer} {cell} {currentPlayer} />
			{/each}
		</div>
		<br />
		<p>Player {currentPlayer.team}'s Turn</p>
		<button on:click={togglePlayer}>Toggle Player Turn</button>
	</div>
</main>

<style>
	.container {
		padding: 1rem;
		margin: 1rem;
		width: 300px;
	}
	.cells {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-rows: repeat(3, minmax(0, 1fr));
	}
	button {
		background-color: lightgray;
		padding: 0.5rem;
		border-width: 1px;
		border-radius: 0.5rem;
		border-color: gray;
	}
</style>
