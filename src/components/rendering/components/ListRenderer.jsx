export default function ListRenderer(props) {
  if (props.items.length !== 0) {
    return (
      <div className="list">
        <h2 style={{ fontFamily: props.settings.headlineFont }}>
          {props.title}
        </h2>
        {props.items.map((item) => {
          return (
            <div
              className="list-item"
              key={item.name}
              style={{ fontFamily: props.settings.paragraphFont }}
            >
              <div className="list-item-time">
                {new Date(item.start).toLocaleDateString()}
                <br />
                {new Date(item.end).toLocaleDateString()}
              </div>
              <div className="list-item-content">
                <h3>
                  {props.itemHeading && props.itemHeading + ": "}
                  {item.name}
                </h3>
                <div className="list-item-details">
                  {item.description && (
                    <p>
                      {props.itemDescription && props.itemDescription + ": "}
                      {item.description}
                    </p>
                  )}
                  {item.location && <p>Location: {item.location}</p>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
