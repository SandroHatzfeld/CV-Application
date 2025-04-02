export default function CVLayout3(props) {
  return (
    <div id='CVLayout3'>
      <header style={{backgroundColor:props.settings.headerColor, color: props.settings.fontColor}}>{props.dataPersonal.title}</header>
      <main></main>
      <footer></footer>
    </div>
  )
}
