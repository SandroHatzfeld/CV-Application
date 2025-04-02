import HeaderLayout1 from './layout1/HeaderLayout1.jsx'
import ListRenderer from './ListRenderer.jsx'

export default function CVLayout1(props) {
  return (
    <div id="CVLayout1">
      <HeaderLayout1 {...props}/>
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
