import { useState, useEffect, useMemo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './SwiperSection.module.scss';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import videoMaterials from '../../data/VideoMaterial';
import SmallButton from '../SmallButton/SmallButton';
import SwiperNavButts from './SwiperNavButts'
function SwiperSection({ genre = 'Trending Now', type = 'series' }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [watchLater, setWatchLater] = useState([]);
  useEffect(() => {
    const savedWatchLater = localStorage.getItem("watchLater");
    if (savedWatchLater) {
      try {
        const parsedWatchLater = JSON.parse(savedWatchLater);
        if (Array.isArray(parsedWatchLater)) {
          setWatchLater(parsedWatchLater);
        } else {
          console.warn('Data in localStorage is not an array. Initializing a new array.');
          setWatchLater([]);
        }
      } catch (error) {
        console.error('Error parsing watchLater data:', error);
        setWatchLater([]);
      }
    }
  }, []);
  const addToWatchLater = useCallback((_id) => {
    setWatchLater(prevWatchLater => {
      const updatedWatchLater = [...prevWatchLater];
      if (!updatedWatchLater.includes(_id)) {
        updatedWatchLater.push(_id);
        localStorage.setItem("watchLater", JSON.stringify(updatedWatchLater));
      } else {
        console.log('Already added');
      }
      return updatedWatchLater;
    });
  }, []);
  const filterByCriteria = videoMaterials.filter(l =>
    Array.isArray(l.genre) && l.genre.includes(genre) && l.type === type
  );
  return (
    <div className={s.swiperSection}>
      <h1>{genre}</h1>
      <Swiper
        slidesPerView={width > 1024 ? 4.5 : width > 768 ? 3 : 2}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className={s.mySwiper}
      >
        {filterByCriteria.map((t) => (
          <SwiperSlide className={s.swiperWrapper} key={t._id}>
            <div>
              <Link to={'/' + t.type + '/' + t.name.replace(/\s+/g, '-')}>
                <img loading="lazy" src={t.img} alt={t.name} />
                <p className={s.genre}>{genre}</p>
              </Link>
              <div className={s.info}>
                <p>{t.name}</p>
                <SmallButton cb={() => addToWatchLater(t._id)}>
                  <i className='bx bx-time'></i>
                  <span>{watchLater.includes(t._id) ? 'Already added' : 'Add to list'}</span>
                </SmallButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
				<SwiperNavButts/>
      </Swiper>
    </div>
  );
}
export default SwiperSection;
