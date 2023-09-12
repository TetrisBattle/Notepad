import { AppStore } from './AppStore'
import { DndStore } from 'features/Dnd/DndStore'

export class RootStore {
	appStore = new AppStore()
	dndStore = new DndStore()
}
