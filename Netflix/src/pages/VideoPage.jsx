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
				<div style={{minHeight: 'calc(100vh - 85px)'}} >
					<img className={s.background} src={v.img} />
					<YoutubePlayerFilm  videoId={v.videoId} />
				</div>
			) : (
				<p>Video not found</p>
			)}
		</div>
	)
}
export default VideoPage
