import { useState } from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Information from './Information'
import s from './Main.module.scss'
import Episodes from './Episodes'

function MovieIntro() {
	const [activeTab, setActiveTab] = useState(0)
	


	return (
		<div className={`${s.movieIntro} ${activeTab === 1 ? s.darkSide : ''}`}>

			

			{activeTab === 0 && <Information />}
			{activeTab === 1 && <Episodes />}
			{activeTab === 2 && <Information />}


			<BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

		</div>
	)
}

export default MovieIntro