
import s from './Sidebar.module.scss'
import { Link } from 'react-router-dom'

function Sidebar({sidebarIsActive, setSidebarIsActive}) {

	const links = [
		{ name: "Home", path: "/" },
		{ name: "Popular", path: "/popular" },
		{ name: "TV Shows", path: "/tvshows" },
		{ name: "Films", path: "/films" },
		{ name: "My list", path: "/mylist" }
	];
	

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
						<li key={link.name}>
							<Link to={link.path}>
								<p>{link.name}</p>
							</Link>


						</li>
					))}
				</ul>
			</div>


		</div >

	)
}

export default Sidebar