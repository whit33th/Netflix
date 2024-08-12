import Button from '../Button/Button'
import s from './Main.module.scss'

function Information() {
	return (
		<div className={s.info}>
			<img className={s.logo} src="https://www.escapelive.co.uk/wp-content/uploads/2022/02/peaky-blinders-logo.png" width={175} alt="" />

			<div className={s.details}>
				<span>2019</span>
				<span className={s.age}>17+</span>
				<span>IMDB 7.2</span>
				<span>48 min</span>
			</div>
			<div className={s.about}>
			Thomas Shelby and his brothers return to Birmingham after serving in WWI. They lead the Peaky Blinders, controlling the city. Shelby's ambitions go beyond Birmingham as he aims to expand his business empire and eliminate any obstacles in his path.
			</div>
			<div className={s.buttons}>
				<Button>
					<i className='bx bx-play' ></i>
					<span>Watch</span>
				</Button>
				<Button>
				<i className='bx bx-list-plus' ></i>
					<span>Add to list</span>
				</Button>


			</div>
		</div>
	)
}

export default Information