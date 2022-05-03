<script lang="ts">
	import { Team, type Cell, type Player } from '$lib/common';
	export let cell: Cell;

	export let currentPlayer: Player;

	console.log(currentPlayer, cell);

	function captureCell(cell: Cell): Cell {
		if (cell.ownedBy != Team.Nobody) {
			console.log('Cannot fill a filled space');
		} else {
			cell.ownedBy = currentPlayer.team;
		}
		console.log(cell);
		return cell;
	}

	// SVG Constatnts
	const viewBoxLength = 100
	const shapePadding = 20
	const strokeWidth = viewBoxLength / 10
	const lineStart =  shapePadding
	const lineEnd = viewBoxLength - shapePadding
	const circleRadius = (viewBoxLength / 2) - (shapePadding / 2)
	const circleCenter = viewBoxLength / 2
	const strokeColor = 'black'
</script>

<button on:click={() => captureCell(cell)}>
	{#if cell.ownedBy == Team.Team_X}
		<svg class="game-cell" viewBox="0 0 {viewBoxLength} {viewBoxLength}" xmlns="http://www.w3.org/2000/svg">
			<g>
				<line
					x1="{lineStart}"
					y1="{lineStart}"
					x2="{lineEnd}"
					y2="{lineEnd}"
					stroke={strokeColor}
					stroke-width="{strokeWidth}"
					stroke-linecap="round"
				/>
				<line
					x1="{lineEnd}"
					y1="{lineStart}"
					x2="{lineStart}"
					y2="{lineEnd}"
					stroke={strokeColor}
					stroke-width="{strokeWidth}"
					stroke-linecap="round"
				/>
			</g>
		</svg>
	{:else if cell.ownedBy == Team.Team_O}
		<svg class="game-cell" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<g>
				<circle
					cx="{circleCenter}"
					cy="{circleCenter}"
					r="{circleRadius}"
					fill="none"
					stroke-width="{strokeWidth}"
					stroke={strokeColor}
				/>
			</g>
		</svg>
	{/if}
</button>

<style>
	button {
		aspect-ratio: 1 / 1;
		background-color: lightgray;
		border-width: 1px;
		border-radius: 10%;
		border-color: gray;
	}
</style>
