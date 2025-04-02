export default function ListRenderer(props) {
	if(props.items.length !== 0) {
		return (
			<div className="list">
				<h2>{props.title}</h2>
				{props.items.map((item) => {
					return (
						<div className="list-item" key={item.name}>
							<div className="list-item-time">
								{item.start}
								<br />
								{item.end}
							</div>
							<div className='list-item-details'><h3>{item.name}</h3><p>{item.description}</p></div>
						</div>
					)
				})}
			</div>
		)
	}
}
