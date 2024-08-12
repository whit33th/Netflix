import s from "./Button.module.scss"

function Button({ children, cb }) {
	return (
		<button onClick={cb} className={s.button}>
			{children}
		</button>
	)
}

export default Button