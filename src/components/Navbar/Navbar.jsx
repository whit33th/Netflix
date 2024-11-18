import s from "./Navbar.module.scss"
import { Link } from "react-router-dom"
import Profile from './../Profile/Profile'
import Search from './../Search/Search'
import logo from '../../assets/logo.webp'
function Navbar() {
	return (
		<div className={s.navbar}>
			<div className={s.searchContainer}>
				<Link to="/">
					<img className={s.logo} src={logo} alt="Netflix" />
				</Link>
				<Search />
			</div>
			<Profile />
		</div>
	)
}
export default Navbar 