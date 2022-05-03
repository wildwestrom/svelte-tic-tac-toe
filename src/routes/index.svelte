<script lang="ts">
	import type { Cell, Player } from '$lib/common';
	import { Team } from '$lib/common';
	import CellGraphic from '$lib/components/CellGraphic.svelte';

	// Turn Count
	let turnCount = 0
	function countTurn() {
		turnCount = turnCount + 1
	}

	// Current Player State
	let currentPlayer: Player = { team: Team.Team_X };
	function togglePlayer() {
		if (currentPlayer.team == Team.Team_X){
			currentPlayer.team = Team.Team_O
		} else if (currentPlayer.team == Team.Team_O){
			currentPlayer.team = Team.Team_X
		}
	}

	let cells = new Array(9).fill({ ownedBy: Team.Nobody }) as Cell[];
	function captureCell(index: number){
		cells[index].ownedBy = currentPlayer.team
		cells = [...cells]
		togglePlayer()
		countTurn()
	}

	// Sanity check
	$: {
		console.log("Cells:", cells);
	}
</script>

<main>
	<div class="container">
		<div class="cells">
			{#each cells as cell, i}
				<CellGraphic on:click={()=>{captureCell(i)}} {cell} {i}/>
			{/each}
		</div>
		<br />
		<p>Player {currentPlayer.team}'s Turn</p>
		<p>Turn #{turnCount}</p>
	</div>
</main>

<style>
	.container {
		padding: 1rem;
		margin: 1rem;
		width: 500px;
		height: 500px;
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
