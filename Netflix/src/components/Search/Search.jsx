import s from "./Search.module.scss"

function Search() {
	return (
		<div className={s.search}>

			<div>
				<i className='bx bx-search-alt-2' ></i>
				<input type="text" placeholder='Search..' />
			</div>
			<i className='bx bx-customize'></i>

		</div>
	)
}

export default Search