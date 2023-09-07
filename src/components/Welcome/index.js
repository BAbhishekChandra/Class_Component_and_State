// Functional Components
//const Welcome = () => <h1>Hello, User</h1>

//export default Welcome

// Class Component
/*
import {Component} from 'react'

class Welcome extends Component {
  render() {
    return <h1>Hello, User Abhishek</h1>
  }
}

export default Welcome
*/

// Accessing Props

import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Hello, User {name}</h1>
  }
}

export default Welcome
