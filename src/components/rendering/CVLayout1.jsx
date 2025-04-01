export default function CVLayout1(props) {
  return (
    <div id='CVLayout1'>
      <header style={{backgroundColor:props.settings.headerColor, color: props.settings.fontColor}}>{props.dataPersonal.title}</header>
      <main></main>
      <footer></footer>
    </div>
  )
}
