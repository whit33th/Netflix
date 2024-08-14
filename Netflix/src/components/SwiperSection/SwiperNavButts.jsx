import React from 'react'
import { useSwiper } from 'swiper/react'
import s from './SwiperSection.module.scss'


function SwiperNavButts() {
	const swiper = useSwiper()
	return (
		<div className={s.buttons}>
			<button onClick={() => swiper.slidePrev()} className={s.left}>
				<i className='bx bx-left-arrow-alt'></i>
			</button>
			<button onClick={() => swiper.slideNext()} className={s.right}>
			<i className='bx bx-right-arrow-alt' ></i>
			</button>
		</div>
	)
}

export default SwiperNavButts