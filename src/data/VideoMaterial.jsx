const videoMaterials = [
	{
		_id: 1,
		name: 'Peaky Blinders',
		img: 'https://ik.imagekit.io/fqhavjbxy/AAAABU5J6xyQf--Js4YnqzIIitPRmcML2g9oe2oNHZBP8sRibh7jNJJiUdCz_ryb6mdVbY4Dp903-Gm-3kATtCkoRRBySWqj4I9dWk7l3OpWDBQVl2S8acTrpWYo7h_Gqn8JOrZzVQ.webp_r=c0e?updatedAt=1723636404760',
		genre: ['Crime'],
		type: "series",
		videoId: 'Ruyl8_PT_y8'
	},
	{
		_id: 2,
		name: 'Wednesday',
		img: 'https://ik.imagekit.io/fqhavjbxy/29248593e2e2f2b83d9af9cfc65852ff849049b74b9cd9d2c80e1f7a5f1de35a.jpg?updatedAt=1723636960870',
		genre: ['Horror', 'Drama'],
		type: "series",
		videoId: 'Di310WS8zLk'
	},
	{
		_id: 3,
		name: 'Breaking Bad',
		img: 'https://ik.imagekit.io/fqhavjbxy/Untitled-design-33-3.jpg?updatedAt=1723638612127',
		genre: ['Drama', 'Crime'],
		type: "series",
		videoId: 'HhesaQXLuRY'
	},
	{
		_id: 4,
		name: 'Stranger Things',
		img: 'https://ik.imagekit.io/fqhavjbxy/726772.jpg?updatedAt=1723638698077',
		genre: ['Horror', 'Drama'],
		type: "series",
		videoId: 'b9EkMc79ZSU'
	},
	{
		_id: 5,
		name: 'Game of Thrones',
		img: 'https://ik.imagekit.io/fqhavjbxy/throne-jon-snow-game-of-thrones-qyptpol8ztg2ihkb.jpg?updatedAt=1723638742112',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'KPLWWIOCOOQ'
	},
	{
		_id: 6,
		name: 'Narcos',
		img: 'https://ik.imagekit.io/fqhavjbxy/308344_w=1920?updatedAt=1723638742105',
		genre: ['Crime'],
		type: "series",
		videoId: 'xl8zdCY-abw'
	},
	{
		_id: 7,
		name: 'Mindhunter',
		img: 'https://ik.imagekit.io/fqhavjbxy/p14413981_b_h10_ac.jpg?updatedAt=1723638742129',
		genre: ['Crime'],
		type: "series",
		videoId: 'evdxH50J3rs'
	},
	{
		_id: 8,
		name: 'The Sopranos',
		img: 'https://ik.imagekit.io/fqhavjbxy/img_optimizer=image&quality=75&width=3500&aspect_ratio=16_3A9?updatedAt=1723638742584',
		genre: ['Crime'],
		type: "series",
		videoId: 'KMx4iFcozK0'
	},
	{
		_id: 9,
		name: 'The Haunting of Hill House',
		img: 'https://ik.imagekit.io/fqhavjbxy/AAAABaxEl83KSCOJL5YJlCI3GZ9Phdq-H3dQsuNe5D6_ZLlqDRq8afP8nYMR8SswnlhOgbDQRSKT55j9avVQcsssOpn4ehdo10CEJVcK.jpg_r=b11?updatedAt=1723638742027',
		genre: ['Horror'],
		type: "series",
		videoId: 'Q8cBFvpqmH0'
	},
	{
		_id: 10,
		name: 'Bates Motel',
		img: 'https://ik.imagekit.io/fqhavjbxy/406f466b211d1df68335572611c0f710696f1b4df4c123f2c776576eac4eb919.jpg?updatedAt=1723638742128',
		genre: ['Horror'],
		type: "series",
		videoId: 'CamCCXK4fFw'
	},
	{
		_id: 11,
		name: 'The Crown',
		img: 'https://ik.imagekit.io/fqhavjbxy/32cd354c655516532f9512816b063bf6c89b382b.jpeg?updatedAt=1723638741956',
		genre: ['Drama'],
		type: "series",
		videoId: 'Ej0vb8xhvbw'
	},
	{
		_id: 12,
		name: 'True Detective',
		img: 'https://ik.imagekit.io/fqhavjbxy/true-detective-s1.jpg?updatedAt=1723638742123',
		genre: ['Drama', "Crime"],
		type: "series",
		videoId: 'fVQUcaO4AvE'
	},
	{
		_id: 13,
		name: 'The West Wing',
		img: 'https://ik.imagekit.io/fqhavjbxy/TheWestWing-AboutImage-1920x1080-KO.jpg?updatedAt=1723638742082',
		genre: ['Drama'],
		type: "series",
		videoId: 'oBZlwRkB6Bs'
	},
	{
		_id: 14,
		name: 'The Witcher',
		img: 'https://witcher-tv.ru/wp-content/uploads/2019/12/geralt-poster-16-9.jpg',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'ndl1W4ltcmg'
	},
	{
		_id: 15,
		name: 'Shadow and Bone',
		img: 'https://ik.imagekit.io/fqhavjbxy/AAAABZRYyrqI2bjlYZiWQqzzJAYM8m__aNCMB2z9RB9AD4bXfFOX-aiGyvaAOq5xdTjPT9CN7jfPbzb4vE-UerYSeFZhUwZblPQ4-Bv2QIBMYPuqRFE6w_qPPCA4gG7qt5aPGkWygA.webp_r=d5b?updatedAt=1723638742065',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'b1WHQTbJ7vE'
	},
	{
		_id: 16,
		name: 'His Dark Materials',
		img: 'https://ik.imagekit.io/fqhavjbxy/his-dark-materials-season-3-finale-leaves-lingering-questions-with-bittersweet-ending-heres-what-happens.jpg?updatedAt=1723638742240',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'APduGe1eLVI'
	},
	{
		_id: 17,
		name: 'The Mandalorian',
		img: 'https://ik.imagekit.io/fqhavjbxy/the-mandalorian-review.jpg?updatedAt=1723638742137',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'aOC8E8z_ifw'
	},
	{
		_id: 18,
		name: 'The Dark Crystal: Age of Resistance',
		img: 'https://ik.imagekit.io/fqhavjbxy/dark_crystal_netflix3.jpg_w=512?updatedAt=1723638742408',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'a3_owZfYVR8'
	},
	{
		_id: 19,
		name: 'Cursed',
		img: 'https://ik.imagekit.io/fqhavjbxy/cursed-netflix-review.jpg?updatedAt=1723638741965',
		genre: ['Fantasy'],
		type: "series",
		videoId: 'xLTdy6PfotA'
	},
	{
		_id: 20,
		name: "The Queen's Gambit",
		img: 'https://ik.imagekit.io/fqhavjbxy/the-queens-gambit-netflix-770x433.jpg?updatedAt=1723638742631',
		genre: ['Drama'],
		type: "series",
		videoId: 'oZn3qSgmLqI'
	},
	{
		_id: 21,
		name: 'No One Gets Out Alive',
		img: 'https://ik.imagekit.io/fqhavjbxy/1875d3128386439.6154fa206932f.jpg?updatedAt=1723638742813',
		genre: ['Horror'],
		type: "series",
		videoId: 'sY2TLiK27g4'
	},
	{
		_id: 22,
		name: 'Sherlock',
		img: 'https://ik.imagekit.io/fqhavjbxy/1585653092-069c50d32152399ae9f0d81ca5df32e35a7695c9.jpg?updatedAt=1723638742739',
		genre: ['Crime'],
		type: "series",
		videoId: '9UcR9iKArd0'
	}
]
export default videoMaterials