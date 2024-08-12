import { Swiper, SwiperSlide } from 'swiper/react'
import s from './SwiperSection.module.scss'

import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'


function SwiperSection({ genre = 'Trending Now' }) {

	const listOfMaterials = [
		{
			_id: 1,
			name: 'Peaky Blinders',
			img: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU5J6xyQf--Js4YnqzIIitPRmcML2g9oe2oNHZBP8sRibh7jNJJiUdCz_ryb6mdVbY4Dp903-Gm-3kATtCkoRRBySWqj4I9dWk7l3OpWDBQVl2S8acTrpWYo7h_Gqn8JOrZzVQ.webp?r=c0e',
			genre: ['Crime']
		},
		{
			_id: 2,
			name: 'Wednesday',
			img: 'https://m.media-amazon.com/images/S/pv-target-images/29248593e2e2f2b83d9af9cfc65852ff849049b74b9cd9d2c80e1f7a5f1de35a.jpg',
			genre: ['Horror', 'Drama']
		},
		{
			_id: 3,
			name: 'Breaking Bad',
			img: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-33-3.jpg',
			genre: ['Drama', 'Crime']
		},
		{
			_id: 4,
			name: 'Stranger Things',
			img: 'https://images7.alphacoders.com/726/726772.jpg',
			genre: ['Horror', 'Drama']
		},
		{
			_id: 5,
			name: 'Game of Thrones',
			img: 'https://wallpapers.com/images/hd/throne-jon-snow-game-of-thrones-qyptpol8ztg2ihkb.jpg',
			genre: ['Fantasy']
		},
		{
			_id: 6,
			name: 'Narcos',
			img: 'https://t2.tudocdn.net/308344?w=1920',
			genre: ['Crime']
		},
		{
			_id: 7,
			name: 'Mindhunter',
			img: 'https://resizing.flixster.com/PnnwLWoCPh3KGowPk7dUGBlRue8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14413981_b_h10_ac.jpg',
			genre: ['Crime']
		},
		{
			_id: 8,
			name: 'The Sopranos',
			img: 'https://cdn.playpilot.tech/f8ecb07853c711ed923b0a58a9feac02/src/img?optimizer=image&quality=75&width=3500&aspect_ratio=16%3A9',
			genre: ['Crime']
		},
		{
			_id: 9,
			name: 'The Haunting of Hill House',
			img: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaxEl83KSCOJL5YJlCI3GZ9Phdq-H3dQsuNe5D6_ZLlqDRq8afP8nYMR8SswnlhOgbDQRSKT55j9avVQcsssOpn4ehdo10CEJVcK.jpg?r=b11',
			genre: ['Horror']
		},
		{
			_id: 10,
			name: 'Bates Motel',
			img: 'https://m.media-amazon.com/images/S/pv-target-images/406f466b211d1df68335572611c0f710696f1b4df4c123f2c776576eac4eb919.jpg',
			genre: ['Horror']
		},
		{
			_id: 11,
			name: 'The Crown',
			img: 'https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/53/32cd354c655516532f9512816b063bf6c89b382b.jpeg',
			genre: ['Drama']
		},
		{
			_id: 12,
			name: 'True Detective',
			img: 'https://www.skyminds.net/wp-content/uploads/true-detective-s1.jpg',
			genre: ['Drama', "Crime"]
		},
		{
			_id: 13,
			name: 'The West Wing',
			img: 'https://i0.wp.com/www.nbc.com/sites/nbcunbc/files/files/styles/640x360/public/images/2016/11/22/TheWestWing-AboutImage-1920x1080-KO.jpg',
			genre: ['Drama']
		},
		{
			_id: 14,
			name: 'The Witcher',
			img: 'https://witcher-tv.ru/wp-content/uploads/2019/12/geralt-poster-16-9.jpg',
			genre: ['Fantasy']
		},
		{
			_id: 15,
			name: 'Shadow and Bone',
			img: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZRYyrqI2bjlYZiWQqzzJAYM8m__aNCMB2z9RB9AD4bXfFOX-aiGyvaAOq5xdTjPT9CN7jfPbzb4vE-UerYSeFZhUwZblPQ4-Bv2QIBMYPuqRFE6w_qPPCA4gG7qt5aPGkWygA.webp?r=d5b',
			genre: ['Fantasy']
		},
		{
			_id: 16,
			name: 'His Dark Materials',
			img: 'https://m.economictimes.com/thumb/msid-96552028,width-1600,height-900,resizemode-4,imgsize-131126/his-dark-materials-season-3-finale-leaves-lingering-questions-with-bittersweet-ending-heres-what-happens.jpg',
			genre: ['Fantasy']
		},
		{
			_id: 17,
			name: 'The Mandalorian',
			img: 'https://vargiskhan.com/log/wp-content/uploads/2020/04/the-mandalorian-review.jpg',
			genre: ['Fantasy']
		},
		{
			_id: 18,
			name: 'The Dark Crystal: Age of Resistance',
			img: 'https://mattcanada.wordpress.com/wp-content/uploads/2019/11/dark_crystal_netflix3.jpg?w=512',
			genre: ['Fantasy']
		},
		{
			_id: 19,
			name: 'Cursed',
			img: 'https://www.heavenofhorror.com/wp-content/uploads/2020/07/cursed-netflix-review.jpg',
			genre: ['Fantasy']
		},
		{
			_id: 20,
			name: "The Queen's Gambit",
			img: 'https://www.tvinsider.com/wp-content/uploads/2022/09/the-queens-gambit-netflix-770x433.jpg',
			genre: ['Drama']
		},
		{
			_id: 21,
			name: 'No One Gets Out Alive',
			img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/1875d3128386439.6154fa206932f.jpg',
			genre: ['Horror']
		},
		{
			_id: 22,
			name: 'Sherlock',
			img: 'https://gagadget.com/media/post_big/1585653092-069c50d32152399ae9f0d81ca5df32e35a7695c9.jpg',
			genre: ['Crime']
		}
	]

	// Фильтрация по жанру
	const filterByCriteria = listOfMaterials.filter(l =>
		Array.isArray(l.genre) ? l.genre.includes(genre) : l.genre === genre
	)

	function addToWatchLater(_id) {

		let watchLater = localStorage.getItem("watchLater");
		if (!watchLater) {
			watchLater = [];
			
		}
		else{
			watchLater = JSON.parse(watchLater);
		}

		if(!watchLater.includes(_id) ){
			watchLater.push(_id);
			localStorage.setItem("watchLater", JSON.stringify(watchLater));
			alert('Added!');
		}
		else{
			alert('Already in the watch list!');
		}
	}


	return (
		<div className={s.swiperSection}>
			<h1>{genre}</h1>
			<Swiper
				slidesPerView={4.5}
				spaceBetween={30}
				modules={[Pagination]}
				className={s.mySwiper}
			>
				{
					filterByCriteria.map((t) => (
						<SwiperSlide key={t._id} >

							<div>
								<Link>
									<img src={t.img} alt="" />
									<p className={s.genre} >{genre}</p>

								</Link>
								<div className={s.info}>
									<p>{t.name}</p>

									<button onClick={() =>  addToWatchLater(t._id)} className={s.watchLater}  >
										<i className='bx bx-time' ></i>
										<span>Watch later</span>
									</button>
								</div>
							</div>

						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default SwiperSection