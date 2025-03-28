export default function MenuTab({tabName = "tab", handleClick}) {
	return <>
		<button onClick={handleClick}>{tabName}</button>
	</>
}
