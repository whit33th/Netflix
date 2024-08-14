import { Swiper, SwiperSlide } from 'swiper/react'
import s from './SwiperEpisodeSection.module.scss'

// import required modules
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SwiperNavButts from '../SwiperSection/SwiperNavButts'

function SwiperEpisodeSection() {
	const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
	
	const [currentSeason, setCurrentSeason] = useState(1)
	const swiperRef = useRef(null) // Создаем реф для Swiper
	const Episodes = [
		{
			_id: 1,
			name: 'Episode 1',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcTmnLi0XFKHu0XLByVqHMzXeWchS7Tj25R04m67DMSiA6gBRydPN4ZOE4qFMZYkT1Bflv3eDKh-0MtstAxYpVxV5fTrSvm0USajpM9xXjtDDeLWTw9n374I.jpg?r=c76',
			season: 1,
			rating: '5.0'
		},
		{
			_id: 2,
			name: 'Episode 2',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd69ZrAdPV3O_J2ZNH9Cnk2tH6UUfHz9IPfIvfFjvPzBurNtTAfGrlk4MuhmRKWIL50bWKRooQAHmPMdcfhgg6Jb7T05vb8li4LngaaTIL-D9tcpnNuPNges.jpg?r=c06',
			season: 1,
			rating: '5.0'
		},
		{
			_id: 3,
			name: 'Episode 3',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZUcbxChnZKvn0qb0IbDqgY-gg2zi1i9_Cp4OGlmZaxe7jeA_wQKtHLvlanT23EJFTFwDbr0yfLBaSabYKRfrmme9fL9Ei61-W1KqSKQkYksXeOJJYcg2pMj.jpg?r=b69',
			season: 1,
			rating: '5.0'
		},
		{
			_id: 4,
			name: 'Episode 4',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX6eeukNNqd9tzVlTZp5DN3oiS8eTa4nyX9Z_V5Gx2J6CAiOZugr3KmVlJOfnxlrWuhuVuhC9YGfWlvvAAvg99CWeO91RGTR7WKbsjJ421FhUDAfhSQHgb6o.jpg?r=753',
			season: 1,
			rating: '5.0'
		},
		{
			_id: 5,
			name: 'Episode 5',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQkgYboPOowk0wp8W8j0eU_MBUjv5KSA3XUCzeeCs-iT67FI8YfKWwLQuKiMLhMQQTYZ2Wdqg_ubl4kalGgKunsJlwCNZVEDt9l72AQNnCTbYvPZQkkxd6VV.jpg?r=a07',
			season: 1,
			rating: '5.0'
		},
		{
			_id: 6,
			name: 'Episode 6',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS6uJKMlBOMzg0hjA22pXTNWkylUhkQ2oNSEX0CWeyECcn1Pzr482NwKAScSCrhPqMnxdWwaa6aDitP6rIIuZ3PxMQkQw6edho9HYM15BGGfDwwZLPxoopoV.jpg?r=e86',
			season: 1,
			rating: '5.0'
		}, {
			_id: 1,
			name: 'Episode 1',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZZ7vmM3hJZ-Pjq1f1ud61L54NWN1GSwqQ9RfV9hQMUgyLAQzBuYaGmA3ETYpQY8UTjHi3wRRhTAWHOy6y-s4Nz3DP_SmwNkraspXkC6HPl7_qz-91-zfgwR.jpg?r=f51',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 2,
			name: 'Episode 2',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVQw_RDfMi68fnEGHCSaRp6q0sg6uyTUJfqiOdsVmo9-1gNtR6mrVG0OkDK4BOjE8EjM4h2Sw5pBmyvhvP8wNDzCsvvz61raNndlp5NO_r8AOzGC29IdWeKn.jpg?r=5a6',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 3,
			name: 'Episode 3',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV290jgerq9jeoRP6XvYEycfdkpPfXebfxrdyumXCP6T6-46wbCoNAboHo_ivZoRuZx9-uJ0dRCg6wYrXkoHzBQFN3a4xhQMBXdp7eeOQqcCZj4pQfualEk3.jpg?r=a44',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 4,
			name: 'Episode 4',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR4Y77KYvZRACW3U0AJQ9kT3NKdsES5d2GfYmF1RhFy6KxLnldUQ4u9wy-mrIHwz5of1G6KqUOEIlafAhMoHvLkWBIyDzTdnLfbUHsXvY7dti9cJz7J3fCZv.jpg?r=fba',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 5,
			name: 'Episode 5',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc-pMnn4joMZFQvfKaeKcFnjn8OYpE0SzEwtrYX1S-BmVZjvYYfcGVnbLmIS5jN5XBtBPChfx3vsgNZ467V9aNxqhGD2RP_VszMDw52Zvygw314U50NifZRr.jpg?r=63b',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 6,
			name: 'Episode 6',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ5TPtSmyKTF1Y7GN3xI0wsoagVFjnkcR-rVF0ZMYnFfAjwwy5GyO1IxNJVXtOr8ylgrM8e_SyxyD5Hvg_1vFUjf8MrbQIWwZ9xe3FrwEDH0kZ8Gre6BuBok.jpg?r=856',
			season: 2,
			rating: '5.0'
		},
		{
			_id: 1,
			name: 'Episode 1 ',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT-B-mrdN2Um8PS6EgNPr9sbUklfT4xodKpBVyztg5EUBC_IbLvssZfoWVcDoB75vtUcR-J2Uar2j89PpsBkI4IzMSwjGr0Z0sH-DAKkkvDWXcKsOWnZSuTk.jpg?r=9cd',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 2,
			name: 'Episode 2',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRimC3Ct9CBkzwBREuz13SJdzP6Oy5NDbdI77QUHoi9d36MIt6SnOmLlIpVhd6xKbmQcwi2yRghc2Kl4jQxE2Oh9d45Tx9bf3al1uY8_atEbCDm58o4jRN-f.jpg?r=58a',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 3,
			name: 'Episode 3',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZbJViZa_kPpzWJApN7ikjlYPCw6Q5hG_Pv166OaQ_rpu2FhleN8NNK9nl9I2liAHKdQQKQRtgpMqa0gPxlbh3x3cW-x9ZZCQNvpi_MKeCeZmLrfsdh34w0N.jpg?r=18c',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 4,
			name: 'Episode 4',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUMisr59J3mRnh1PF_VFcKI6m5dMJGJ3t8CkC10v7NY87WWxm2ZOt-RcUbdK7LHG16_QvObDDGRjxVWJ3ZtNyxhXubMtXzorvw4qY7yZWYRbuKCO-CyCwpSD.jpg?r=73f',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 5,
			name: 'Episode 5',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSGM-II__97qjOtXat4lqiv2-Mzy95yk_tbSqMKcEOiRDLg5d-_80KlwYcc4H920KQKeIXDjuv3nms7OHI-H1yvPv22hZxPiA4lysAV3X3U1oN2qdp-du_Ok.jpg?r=9c7',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 6,
			name: 'Episode 6',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXIlIND8FxVNqZc1uP97gGu5iWf7OZBZzq8jqVSsZUVoxLoWJfCkbF-2810G-DlLnCtqb-JJfShfAQkDq4HQm2yYrSMDNsnsUeWbIwx5TeBJ4jjj_jBC_CeG.jpg?r=249',
			season: 3,
			rating: '5.0'
		},
		{
			_id: 1,
			name: '1 | The Noose',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfGxzIHg7s2rmlAZL5LTSvLw_ZGKNHgvZczsFO1SkkVgx7hWTFLbx8jr5sZZJQYZBUFFhnjFPxeYpjuaYy-6VI0A7ZlPXRTRbs67ok6HyKmbfjUc46I8ojhV.jpg?r=173',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 2,
			name: '2 | Heathens',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTQwTThqlqSYeTWBm26djPqn1joEL_MSqQbOUzRDKQEXvPTuGiyb2yl_yVrMFdKhKZPOSkd5sO93dBtd-Tp4_Qm1lFqMsU0gD3ktJd021L8zTCO63CYM7J94.jpg?r=add',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 3,
			name: '3 | Blackbird',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU6P1UYrOWz3mvO6rd8PlrCq1dv-JLEfsBC-HvIvn8JkoHwW5_bk9WA1cgQJl_HtnOOC6fckCaaGgvTw6sb5P1DqutEqLfz-GcmwCJzhavnlYs0-bIitUVIq.jpg?r=c61',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 4,
			name: '4 | Dangerous',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVhm1drVvBk58M9ScYlgxgmw-VxHGN8LN22yTNefbB-cOQb0dllJ5NN7jWCTfruGwqvxLDioYjtym0jZSvMj0FR0miSZmxSrJGhXKjgwFB8HBNf7DhfJyW9j.jpg?r=e3a',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 5,
			name: '5 | The Duel',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXWk8XThbzu4YCfQI37Tdap08RLJGU8hixtUxwhR8b-T-LO13X3nWe16S1jJS39XE3VrrCW-nrGEqdMOPfJjU1em2B6MVXMbCxfE6oygHUyn4zgzkM6R8Qc2.jpg?r=15d',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 6,
			name: '6 | The Company',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZwOfc3fdd4xsdUIuMIpuVHRVV5199cSNPEai45JFkmMaaESF3-C5t8yOImK9ObqhM1iKJvnYQKQGxXV1mXfWoTdxfTqQOjqBhJKPEonfynckzjkdWeWKhQd.jpg?r=cbc',
			season: 4,
			rating: '5.0'
		},
		{
			_id: 1,
			name: '1 | Black Tuesday',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXb4d9U9jrNiB_kgwBcZn1HI9XWi7g1iCYPwSM-UGP5zTGu6NIoxqlVvXx8uby_k44SJ4abtZ4m8NcueJ6F9YbG8H4YYltPwESw5Fv7mtkU0qY5B-ePI2iEV.jpg?r=f09',
			season: 5,
			rating: '5.0'
		},
		{
			_id: 2,
			name: '2 | Black Cats',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfAJpbzXFaOap94qqTrx2MqJEQ027KWwdyi1N5W7OcLuowqmUKo7IfUExM9cHhzLlsGK881-_hogl1JcHuX3XjKEtYrlVUXVTeoWTtemg9NFr-rPJc5W2T8d.jpg?r=fd8',
			season: 5,
			rating: '5.0'
		},
		{
			_id: 3,
			name: '3 | Strategy',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRMQW-Vloxw4KoryZQWZd59F_BX7uBHqVJWAdkLLdpdI1-fD7tjT85Ij2PxIaoBbbKge2GiHfDyRnY9eT6D3qjiXVvcdjGI-WyDsEKnJxvYCTlumIYcQb0BK.jpg?r=621',
			season: 5,
			rating: '5.0'
		},
		{
			_id: 4,
			name: '4 | The Loop',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRam-HKDrxGe2-ys54XVe2ouJq4Q66T_x7CcNcBJQTeO1HT6VpIg9ToQmnw-nc5WKekGpN8Fi4RjCdJBtQzSKphETvV0LF3qH0HrNVO0oEQiN0E0EyQmLba6.jpg?r=31e',
			season: 5,
			rating: '5.0'
		},
		{
			_id: 5,
			name: '5 | The Shock',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUWWae51ER70W0r-hhdDgGmI5aQ7E7hJM-vU51p-rCv4QufTikFXWaUpkKCZDUh7f6RiO3UrHkqVBlvELCyL1cCjJVtKbCUINYC3dRh9_gxkcrEvss2AOMPv.jpg?r=7d0',
			season: 5,
			rating: '5.0'
		},
		{
			_id: 6,
			name: '6 | Mr. Jones',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbIcLFyOdUqFDuD8wIqe1CmSAzf0fQnVwZUH904TMAzEEMozTH6Yi-5omkUUzKocYonalYdAYeDH2extmckFQa3VGIJPN6CpH2_RDIgOGHb5OI4O5Pt7seJC.jpg?r=57b',
			season: 5,
			rating: '5.0'
		},

		{
			_id: 1,
			name: '1 | Black Day',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABanXjbqC8pY5AK44tpa7Mjh7SNIGtAoI-H7kqbZHQHsuB6hC1GziolH_gxrB2hwTntp0qQClGhbsAeKuvz4njhCwqt0TdAoGZmfVGQJBm8TENg8fA-WK9ZQ1.jpg?r=a9chttps://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABanXjbqC8pY5AK44tpa7Mjh7SNIGtAoI-H7kqbZHQHsuB6hC1GziolH_gxrB2hwTntp0qQClGhbsAeKuvz4njhCwqt0TdAoGZmfVGQJBm8TENg8fA-WK9ZQ1.jpg?r=a9c',
			season: 6,
			rating: '5.0'
		},
		{
			_id: 2,
			name: '2 | Black Shirt',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaxo4pvGSbaSvPsk60ZDOlC3WhSByAet3EW0G-rwAiYE1S75c6s3wzVy8fwm36OPnnW76umA5nVTm1qsFyDMujqTlH60az5Lz_nXZRDDL1W07FxKIn5AH-Ay.jpg?r=f3b',
			season: 6,
			rating: '5.0'
		},
		{
			_id: 3,
			name: '3 | Gold',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfHy_ks7m0ET9HTqhJOgesduA1BpwIyPDbws37tHGkzaQ857X2Vv5gNokxbWLsygr21kXwscxkuNJ8hCklLmsjLgEbnoUAGMl3worKW0agXAyQTds6FmW2k3.jpg?r=69bhttps://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfHy_ks7m0ET9HTqhJOgesduA1BpwIyPDbws37tHGkzaQ857X2Vv5gNokxbWLsygr21kXwscxkuNJ8hCklLmsjLgEbnoUAGMl3worKW0agXAyQTds6FmW2k3.jpg?r=69b',
			season: 6,
			rating: '5.0'
		},
		{
			_id: 4,
			name: '4 | Sapphire',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfLGtkiIYS8DqIuWgRXfYThvuIN7_vUe9TJtGD-n3oggfellMPNGZ0y8QW2wf_0TSetY2JR4omiaigMb-1XYtHFhcbAzmu28oinzhxNlolPHZ6Nlhy7bWBtl.jpg?r=422',
			season: 6,
			rating: '5.0'
		},
		{
			_id: 5,
			name: '5 | The Road to Hell',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXJTKCvF992y2KDFMtcVbuj4AieL22Ex-q0DioxNBR9txfOxvrT7OANI8_SfH8XMacMCTom3BHB33wIBItQAg7OrF8fIysoi1dxsCjrPIs1Mpde4Ay88CmU-.jpg?r=4b4',
			season: 6,
			rating: '5.0'
		},
		{
			_id: 6,
			name: '6 | Lock and KeyLock and Key',
			img: 'https://occ-0-3627-1433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaGvLeoG4zp-CDDdX8uUY6Xo-mJMjPgDaHAbmtHSaY-O45c_dcUaqbjoBKleYjcGLkkLOv4_-SzEyo57ALIGM0NwZ_y4FiuTkw8.jpg?r=bcc',
			season: 6,
			rating: '5.0'
		},

	]

	useEffect(() => {

		swiperRef.current.swiper.slideTo(0)

	}, [currentSeason])


	const uniqueSeasons = [...new Set(Episodes.map(t => t.season))]


	function handleSeason(e) {
		setCurrentSeason(parseInt(e.target.value))
	}
	const filteredBySeason = Episodes.filter(t => t.season === (currentSeason))

	return (
		<div className={s.swiperSection}>
			<select value={currentSeason} name="Season" id="season" onChange={handleSeason}>
				{
					uniqueSeasons.map((u) => (
						<option key={u} value={u}>Season {u}</option>
					))
				}


			</select>
			<Swiper
				ref={swiperRef}
				slidesPerView={width > 1024 ? 4.5 : width > 768 ? 3 : 2}
				spaceBetween={30}
				modules={[Pagination]}

				className={s.mySwiper}
			>
				
				{
					filteredBySeason.map((t) => (

						<>
							<SwiperSlide key={t._id} >
								<Link to='/series/Peaky-Blinders'>
									<div>
										<img src={t.img} alt="" />
										<p className={s.genre} ><i className='bx bxs-star' ></i> {t.rating}</p>
										<div className={s.info}>
											<p>{t.name}</p>
											<i className='bx bx-right-arrow-alt' ></i>
										</div>
									</div>
								</Link>
								
							</SwiperSlide>
						</>







					))

				}



			</Swiper>
		</div>
	)
}

export default SwiperEpisodeSection