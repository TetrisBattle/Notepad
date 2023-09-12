import { makeAutoObservable } from 'mobx'

export type StatName =
	| 'strength'
	| 'dexterity'
	| 'constitution'
	| 'intelligence'
	| 'wisdom'
	| 'charisma'

export type StatSetter =
	| 'setStrength'
	| 'setDexterity'
	| 'setConstitution'
	| 'setIntelligence'
	| 'setWisdom'
	| 'setCharisma'

export class DndStore {
	strength = ''
	dexterity = ''
	constitution = ''
	intelligence = ''
	wisdom = ''
	charisma = ''

	constructor() {
		makeAutoObservable(this)
	}

	setStrength(strength: string) {
		this.strength = strength
	}

	setDexterity(dexterity: string) {
		this.dexterity = dexterity
	}

	setConstitution(constitution: string) {
		this.constitution = constitution
	}

	setIntelligence(intelligence: string) {
		this.intelligence = intelligence
	}

	setWisdom(wisdom: string) {
		this.wisdom = wisdom
	}

	setCharisma(charisma: string) {
		this.charisma = charisma
	}
}
