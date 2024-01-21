import { AppStore } from './AppStore'
import { DndStore } from 'features/dnd/DndStore'

export class RootStore {
	appStore = new AppStore()
	dndStore = new DndStore()
}
