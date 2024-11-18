import s from './BottomNav.module.scss'
function BottomNav({activeTab, setActiveTab}) {
	const Tabs = ['Overview','Episodes','Details']
	return (
		<div className={s.bottomNav}>
			{Tabs.map((Tab,index) => (
				<button key={Tab} className={activeTab === index ? s.active : ''} onClick={() => setActiveTab(index)}>{Tab}</button>
			))}
		</div>
	)
}
export default BottomNav