import Sidebar from '../../components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import s from './Main.module.scss'
import Home from '../../pages/Home'
import WatchList from '../WatchList/WatchList'
import Popular from '../../pages/Popular'
import VideoPage from '../../pages/VideoPage'
import useMyStore from '../../store/store'

function Main() {
	const {isSidebarOpen} = useMyStore()
	const width = isSidebarOpen ? '85%' : '97%'
	console.log(width)
	return (
		<div className={s.main}  >
			<Sidebar />
			<div className={s.content} style={{ width }}>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/popular" element={<Popular/>} />
					<Route path="/mylist" element={<WatchList/>} />
					<Route path="/series/:id" element={<VideoPage />} />
        <Route path="/movie/:id" element={<VideoPage />} />
				</Routes>
			</div>
		</div>
	)
}
export default Main