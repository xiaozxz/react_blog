import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>账号</h2>
      <ul>
        <li><Link to="/react-router">React Router</Link></li>
        <li><Link to="/leoashin">LeoAshin</Link></li>
        <li><Link to="/justjavac">justjavac</Link></li>
        <li><Link to="/reacttraining">React Training</Link></li>
      </ul>

      <Route path="/:id" component={NewChild}/>
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)
class NewChild extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProp){
         debugger
    }

    render(){
        let {match}=this.props;
        return(<div>
            <h3>ID: {match.params.id}</h3>
          </div>)
    }
}

export default ParamsExample