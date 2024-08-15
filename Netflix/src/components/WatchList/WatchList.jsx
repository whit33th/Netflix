import { Link } from 'react-router-dom'
import videoMaterials from '../../data/VideoMaterial'
import s from './WatchList.module.scss'
import { useEffect, useState } from 'react'
import SmallButton from '../SmallButton/SmallButton'
function WatchList() {
	const [watchList, setWatchList] = useState([])
	const loadWatchList = () => {
		const storage = localStorage.getItem("watchLater")
		const parsedWatchList = storage ? JSON.parse(storage) : []
		const updatedWatchList = videoMaterials.filter(v => parsedWatchList.includes(v._id))
		setWatchList(updatedWatchList)
	}
	useEffect(() => {
		loadWatchList()
	}, [])
	// Функция удаления из списка "watchLater"
	function deleteToWatchLater(itemId) {
		let storage = localStorage.getItem("watchLater")
		let parsedWatchList = storage ? JSON.parse(storage) : []
		// Удаляем элемент и обновляем localStorage
		parsedWatchList = parsedWatchList.filter(id => id !== itemId)
		localStorage.setItem("watchLater", JSON.stringify(parsedWatchList))
		// Обновляем список в состоянии
		loadWatchList()
	}
	return (
		<>
			{watchList ? <div className={s.empty}>Your list is empty</div> : ''}
			<div className={s.gridScreen}>
				{
					watchList.map((v) => (
						<div key={v._id}>
							<Link to={'/' + v.type + '/' + v.name.replace(/\s+/g, '-')}>
								<img loading="lazy" src={v.img} alt="" />
							</Link>
							<div className={s.info}>
								<p>{v.name}</p>
								<SmallButton cb={() => deleteToWatchLater(v._id)}>
									<i className='bx bx-trash'></i>
								</SmallButton>
							</div>
						</div>
					))
				}
			</div>
		</>


	)
}
export default WatchList