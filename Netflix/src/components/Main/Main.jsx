import Sidebar from '../../components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import s from './Main.module.scss'
import { useState } from 'react'
import Home from '../../pages/Home'



function Main() {
	const [sidebarIsActive, setSidebarIsActive] = useState(false)
	const width = sidebarIsActive ? '85%' : '97%'

	return (

		<div className={s.main}  >
			<Sidebar sidebarIsActive={sidebarIsActive} setSidebarIsActive={setSidebarIsActive} />
			<div className={s.content} style={{ width }}>
				<Routes>
					<Route path="/Popular" element={<Home/>} />
				</Routes>

				
			</div>

		</div>

	)
}

export default Main