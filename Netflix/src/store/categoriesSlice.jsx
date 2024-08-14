
import { createSlice } from '@reduxjs/toolkit'
import { getList } from './path-to-your-thunk-file' // Путь к файлу с вашим thunk
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Асинхронный thunk для получения списка
export const getList = createAsyncThunk('watchList/getList', async (_, thunkAPI) => {
	// Получаем данные из localStorage
	const storage = localStorage.getItem('watchLater')
	const parsedWatchList = storage ? JSON.parse(storage) : []

	// Здесь вы можете заменить на вашу логику фильтрации и загрузки видео
	// Например, делаем запрос на сервер или фильтруем данные
	const videoMaterials = await fetchVideoMaterials() // Замените на реальный запрос

	const updatedWatchList = videoMaterials.filter(v => parsedWatchList.includes(v._id))

	return updatedWatchList
})


const watchListSlice = createSlice({
	name: 'watchList',
	initialState: {
		list: [],
		status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
		error: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getList.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(getList.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.list = action.payload
			})
			.addCase(getList.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export default watchListSlice.reducer;

