export default function CVLayout2(props) {
  return (
    <div id='CVLayout2'>
      <header style={{backgroundColor:props.settings.headerColor, color: props.settings.fontColor}}>{props.dataPersonal.title}</header>
      <main></main>
      <footer></footer>
    </div>
  )
}
