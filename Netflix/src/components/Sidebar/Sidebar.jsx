
import s from './Sidebar.module.scss'
import { Link } from 'react-router-dom'

function Sidebar({sidebarIsActive, setSidebarIsActive}) {

	const links = ["Popular", "TV Shows", "Films", "My list"]

	const width = sidebarIsActive ? '15%' : '3%'
	const arrowDirection = sidebarIsActive ? 'bx bx-arrow-to-left' : 'bx bx-arrow-to-right'




	function handleSidebar() {
		setSidebarIsActive(!sidebarIsActive)
	}

	return (
		<div className={s.sidebar} style={{ width }} >

			<div className={s.sidebarButton} >
				<i onClick={handleSidebar} className={arrowDirection}></i>
			</div>


			<div className={`${s.links} ${ sidebarIsActive ? s.active : ''}`} >
				<ul>
					{links.map((link) => (
						<li key={link}>
							<Link to={'/'+link.replace(/\s+/g, '-')}>
								<p>{link}</p>
							</Link>


						</li>
					))}
				</ul>
			</div>


		</div >

	)
}

export default Sidebar