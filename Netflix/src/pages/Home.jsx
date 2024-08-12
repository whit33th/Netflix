
import SwiperSection from '../components/SwiperSection/SwiperSection'
import MovieIntro from './../components/Main/MovieIntro';


function Home() {
	return (
		<div>

			<MovieIntro/>
			<SwiperSection genre={'Drama'}/>
			<SwiperSection genre={'Fantasy'}/>
			<SwiperSection genre={'Horror'}/>
			<SwiperSection genre={'Crime'}/>
		</div>
	)
}

export default Home