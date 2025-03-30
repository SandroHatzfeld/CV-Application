export default function MenuTab({tabName = "tab", handleClick, isActive}) {
	return <>
		<button className={`menu-tab ${isActive && 'active'}`} onClick={handleClick}>{tabName}</button>
	</>
}
