import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Jumbotron} from 'reactstrap'
import Todo from './Todo'
import {getTodos} from '../Actions/TodosAction'
class Todos extends Component {
    
    componentDidMount(){
        this.props.getTodos();
    }
    render() {
        const {Todos} = this.props
        
        return ( 
            <Jumbotron>
                {   Todos.map(Tdo => (
                    <Todo key={Tdo.id} Tdo={Tdo} deletetdo={this.DeleteTdo} />
                ))} 
            </Jumbotron>
        )
    }
}
const MapStateToProp = state => ({
    Todos:state.TodosRed.Todos
})

export default connect(MapStateToProp,{getTodos})(Todos);
