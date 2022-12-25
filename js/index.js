const placeholder = () => { return 'Hello, world!' }

const elements = <input placeholder={placeholder}/>
const app = document.getElementById("app")

ReactDOM.render(elements, app)