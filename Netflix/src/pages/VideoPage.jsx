import { useParams } from 'react-router-dom'

import videoMaterials from '../data/VideoMaterial'
import s from './VideoPage.module.scss'
import SwiperEpisodeSection from './../components/SwiperEpisodeSection/SwiperEpisodeSection'
import YoutubePlayerFilm from '../components/YoutubePlayerFilm/YoutubePlayerFilm'

function VideoPage() {
	const { id } = useParams()
	const v = videoMaterials.find(v => v.name.replace(/\s+/g, '-') === id)

	return (
		<div className={s.divClip}  >
			{v ? (
				<>
					<img className={s.background} src={v.img} />

					<div className={s.videoSection}>
						<div className={s.videoPlayer}>
							<YoutubePlayerFilm videoId={v.videoId} />
						</div>


					</div>


					

				</>
			) : (
				<p>Video not found</p>
			)}
		</div>
	)
}

export default VideoPage
