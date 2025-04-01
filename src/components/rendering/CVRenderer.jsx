import CVLayout1 from './CVLayout1.jsx'

export default function CVRenderer(props) {
	



  switch (parseFloat(props.settings.layoutOption)) {
    case 0:
      return <CVLayout1 {...props} />
    case 1:
      return
    case 2:
      return
    case 3:
      return
    default:
      break
  }
}
