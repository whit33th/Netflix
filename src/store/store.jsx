import {create} from 'zustand'


const useMyStore = create((set) => ({
	isSidebarOpen: false,
	setSidebarOpen:() => set((state) => ({isSidebarOpen: !state.isSidebarOpen}))
}))

export default useMyStore