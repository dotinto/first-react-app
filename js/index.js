class App extends React.Components {
  placeholder = "Hello, world!"
  render() {
    return (
      <input placeholder={this.placeholder}/>
    )
  }
}

const root = document.getElementById("app")

ReactDOM.render(<App />, root)