import HeaderLayout1 from "./layout1/HeaderLayout1.jsx"
import ListRenderer from "./ListRenderer.jsx"

export default function CVLayout1(props) {
  return (
    <div id="CVLayout1" className='layout'>
      <HeaderLayout1 {...props} />
      <main
        style={{
          color: props.settings.textColor,
          backgroundColor: props.settings.backgroundColor,
          fontFamily: props.settings.paragraphFont,
        }}
      >
        <div>
          {props.dataPersonal.description && (
            <h2 style={{ fontFamily: props.settings.headlineFont }}>About Me:</h2>
          )}
          {props.dataPersonal.description && (
            <p>{props.dataPersonal.description}</p>
          )}
        </div>
        <ListRenderer
          items={props.itemsEducation}
          title="Education"
          itemDescription="Degree"
          {...props}
        />
        <ListRenderer
          items={props.itemsBusiness}
          title="Experience"
          itemDescription="Position"
          {...props}
        />
      </main>
      <footer
        style={{
          color: props.settings.footerTextColor,
          backgroundColor: props.settings.footerColor,
          fontFamily: props.settings.footerFont
        }}
      >
        {props.dataPersonal.street && <h2>Adress:</h2>}
        <p className="contact">{`${props.dataPersonal.street} ${props.dataPersonal.number}`}</p>
        <p className="contact">{`${props.dataPersonal.zip} ${props.dataPersonal.city}`}</p>
      </footer>
    </div>
  )
}
