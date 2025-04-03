import HeaderLayout1 from './layout1/HeaderLayout1.jsx'
import ListRenderer from './ListRenderer.jsx'

export default function CVLayout1(props) {
  

  return (
    <div id="CVLayout1">
      <HeaderLayout1 {...props}/>
      <main>
        <div>
          {props.dataPersonal.description && <h2>About Me:</h2>}
          {props.dataPersonal.description && <p>{props.dataPersonal.description}</p>}
        </div>
        <ListRenderer items={props.itemsEducation} title="Education" itemHeading="" itemDescription="Degree"/>
        <ListRenderer items={props.itemsBusiness} title="Experience" itemHeading="" itemDescription="Position"/>
      </main>
      <footer>
        {props.dataPersonal.street && <h2>Adress:</h2>}
        <p className="contact">{`${props.dataPersonal.street} ${props.dataPersonal.number}`}</p>
        <p className="contact">{`${props.dataPersonal.zip} ${props.dataPersonal.city}`}</p>
      </footer>
    </div>
  )
}
