const Button = () => {

}

const Buttons = (click, open) => {
  return (
    <div>
      <button id="facebook" onClick={open}>facebook</button>
      <button id="twitter" onClick={open}>twitter</button>
      <button id="change" onClick={click}>change</button>
    </div>
  )
}

export default Buttons
