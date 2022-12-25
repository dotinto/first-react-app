const placeholder = () => { return 'Hello, world!' }

const elements = <input placeholder="Hello"/>
const app = document.getElementById("app")

ReactDOM.render(elements, app)