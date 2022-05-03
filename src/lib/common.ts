export enum Team {
	Nobody,
	Team_X = 'X',
	Team_O = 'O'
}

export interface Cell {
	ownedBy: Team;
	index?: number;
}

export type Player = {
	team: Team;
};
