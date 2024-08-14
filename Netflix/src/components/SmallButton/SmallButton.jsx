import s from "./SmallButton.module.scss"
function SmallButton({ children, cb }) {
	return (
		<button onClick={cb} className={s.button}>
			{children}
		</button>
	)
}
export default SmallButton