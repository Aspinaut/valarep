function WelcomeFunc({name, children}){
  return <div>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
  </div>
}

class Welcome extends React.Component {
    render() {
      return <div>
          <h1>Bonjour {this.props.name}</h1>
          <p>{this.props.children}</p>
      </div>
    }
}

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state =  {date: new Date()}
    this.timer = null
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render () {
    return <div>
        Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>
  }
}

function Home() {
  return <div>
      <Welcome name="Dodo" />
      <Welcome name="Jean" />
      <Clock />
      <Incrementer start={10} step={10}/>
    </div>
}

class Incrementer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {compteur: props.start}
    this.timer = null
    this.isPaused = true
  }

  componentDidMount() {
    this.timer = window.setInterval(this.increment.bind(this), 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  increment() {
    if (this.isPaused === true){
      this.setState(function(state, props){
        return {compteur: state.compteur}
      })
    } else {
      this.setState(function(state, props){
        return {compteur: state.compteur + props.step}
      })
    }
  }

  changeState() {
    this.isPaused === true ? this.isPaused = false : this.isPaused = true
  }

  render () {
    return <div>
      <span>{this.state.compteur}</span>
      <button onClick={this.changeState()}>Play / Pause</button>
    </div>
  }
}

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {n: 0}
  }

  increment(e) {
      this.setState((state, props) => ({n: state.n + 1}))
  }

  render () {
    return <div>
        Valeur : {this.state.n}
    </div>
  }
}
ReactDOM.render(<Home name="Bob">Salut à tous</Home>, document.querySelector('#app'))
