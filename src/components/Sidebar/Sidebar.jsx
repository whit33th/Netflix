import s from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import useMyStore from '../../store/store';

function Sidebar() {
	const {isSidebarOpen, setSidebarOpen} = useMyStore()
	const links = [
		{ name: "Home", path: "/" },
		{ name: "Popular", path: "/popular" },
		{ name: "TV Shows", path: "/tvshows" },
		{ name: "Films", path: "/films" },
		{ name: "My list", path: "/mylist" }
	];
	const width = isSidebarOpen ? '15%' : '3%'

	
	return (
		<div className={s.sidebar} style={{ width }} >
			<div className={s.sidebarButton} >
				<i onClick={setSidebarOpen} className='bx bx-menu'></i>
				
			</div>
			<div className={`${s.links} ${ isSidebarOpen ? s.active : ''}`} >
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