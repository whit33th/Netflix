import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import s from './Main.module.scss'
import YoutubePlayerPreload from '../YoutubePlayerPreload/YoutubePlayerPreload'
const imdb = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png'

function Information() {
	let youtubeVideoId = 'Ruyl8_PT_y8'
	return (
		<div className={s.info}>
			<YoutubePlayerPreload className={s.Youtube} videoId={youtubeVideoId} />

			<img rel="preload" className={s.logo} src="https://ik.imagekit.io/fqhavjbxy/peaky-blinders-logo.webp?updatedAt=1723639477498"  alt="" />

			<div className={s.details}>
				<div>
					<img loading='lazy' src={imdb} alt="" />
					<span>7.2</span>
				</div>

				<span>2019</span>

				<span>9 episodes</span>
				<span className={s.age}>17+</span>



				<span style={{ color: 'rgb(0 255 0 / 73%)' }}>100% match</span>
			</div>
			<div className={s.about}>
				Thomas Shelby and his brothers return to Birmingham after serving in WWI. They lead the Peaky Blinders, controlling the city. Shelby's ambitions go beyond Birmingham as he aims to expand his business empire and eliminate any obstacles in his path.
			</div>
			<div className={s.buttons}>
				<Button>
					<i className='bx bx-download' ></i>
				</Button>
				<Link to="./series/Peaky-Blinders">
					<Button emphasis={true}>
						<i style={{ fontSize: '36px' }} className='bx bx-play'></i>
						<span>Watch now</span>
					</Button>
				</Link>

				<Button>
					<i className='bx bx-like' ></i>
				</Button>
				<Button>
					<i className='bx bx-plus' ></i>
				</Button>
				<Button>
					<i className='bx bx-message-alt-add'></i>
				</Button><Button>
					<i className='bx bx-fast-forward'></i>
				</Button>





			</div>
		</div>
	)
}

export default Information