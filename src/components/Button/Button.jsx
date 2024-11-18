import s from "./Button.module.scss"
function Button({ children, cb, emphasis = false }) {
	return (
		<button onClick={cb} className={`${s.button} ${emphasis === true ? s.buttonEmphasis : ''}`}>
			{children}
		</button>
	)
}
export default Button