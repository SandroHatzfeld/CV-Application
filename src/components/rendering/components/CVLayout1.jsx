import ListRenderer from './ListRenderer.jsx'

export default function CVLayout1(props) {
  return (
    <div id="CVLayout1">
      <header
        style={{
          backgroundColor: props.settings.color0,
          color: props.settings.color2,
        }}
      >
        <h1 className="name">
          {`${props.dataPersonal.title} ${props.dataPersonal.firstName} ${props.dataPersonal.lastName}`}
        </h1>
        <p className="contact">{`E-Mail: ${props.dataPersonal.eMail}`}</p>
        <p className="contact">{`Phone: ${props.dataPersonal.phoneNumber}`}</p>
      </header>
      <main>
        <ListRenderer items={props.itemsEducation} title="Education" />
        <ListRenderer items={props.itemsBusiness} title="Experience" />
      </main>
      <footer>
        <h2>Adress:</h2>
        <p className="contact">{`${props.dataPersonal.street} ${props.dataPersonal.number}`}</p>
        <p className="contact">{`${props.dataPersonal.zip} ${props.dataPersonal.city}`}</p>

      </footer>
    </div>
  )
}
