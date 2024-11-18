import s from './Profile.module.scss'
import avatar from '../../assets/avatar.webp'
function Profile() {
	return (
		<div className={s.profile}>
			<div>
				<i className='bx bxs-bell'></i>
			</div>
			<div className={s.myProfile}>
				<img className={s.avatar} src={avatar} alt="" />
				<i style={{fontSize: '12px'}} className='bx bx-caret-down'></i>
			</div>
		</div>
	)
}
export default Profile