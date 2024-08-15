import { Link } from 'react-router-dom'
import videoMaterials from '../../data/VideoMaterial'
import s from './PopularSection.module.scss'
function PopularSection() {
	return (<>
		<h1 className={s.PageTitle}>Popular Now</h1>
		<div className={s.popularSection}>

			{videoMaterials.slice(0, 9).map((v, index) => (
				<>
					<div className={s.item}>
						<div className={s.place} >
							{index + 1}
						</div>
						<Link to={'/' + v.type + '/' + v.name.replace(/\s+/g, '-')}>
							<div className={s.img} key={{ index }}
								style={{ backgroundImage: `url(${v.img})` }}>
							</div>
						</Link>
					</div>
				</>
			))
			}
		</div >
	</>

	)
}
export default PopularSection