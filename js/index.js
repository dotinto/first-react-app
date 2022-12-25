const placeholder = "Hello, world!";

class App extends React.Components {
  
  render() {
    return (
      <input placeholder={placeholder}/>
    )
  }
}

const root = document.getElementById("app")

ReactDOM.render(<App />, root)