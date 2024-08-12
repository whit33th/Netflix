
import SwiperEpisodeSection from '../SwiperEpisodeSection/SwiperEpisodeSection'
import s from './Main.module.scss'
function Episodes() {
	return (
		<div className={s.info} style={{width: '-webkit-fill-available'}}>
			<img className={s.logo} src="https://www.escapelive.co.uk/wp-content/uploads/2022/02/peaky-blinders-logo.png" width={175} alt="" />

			<SwiperEpisodeSection/>

		</div>
	)
}

export default Episodes