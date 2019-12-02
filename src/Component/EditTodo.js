import React, { Component } from 'react'
import {Jumbotron,FormGroup,Label,Input,Form,Card,CardBody,Button} from 'reactstrap'
import { connect } from "react-redux";
import { GeteditTodo,editTodo } from "../Actions/TodosAction";
class EditTodo extends Component {
    state={
        id:null,
        title:'',
        error:{}
    }
    componentWillReceiveProps(nextProps, nextState) {       
        const { id,title } = nextProps.Todos;
        this.setState({  
          id,
          title
        });
      }
    componentDidMount(){
        const {id} = this.props.match.params
        this.props.GeteditTodo(id);
        
    }
    onChange = e =>{
        this.setState({
            title:e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const {id,title} = this.state
        if(title === ''){
            this.setState({error:{title:'title is Required'}});
            return;
        }
        const updateContect ={
            id,
            title
        }
        this.props.editTodo(updateContect)
        const resetState = {
            id:'',
            title:'',
            error:{}
        }
        this.setState(resetState);
        this.props.history.push('/');
    }
    render() {
        var {id,title,error} = this.state
        return (
            <Form onSubmit={this.onSubmit} >
            <Jumbotron>
                <Card>
                    <CardBody>
                    <FormGroup>
                        <Label for="todo">Task</Label>
                        <Input type="text" name="todo" id="todo" placeholder="Edit-Task" id={id} value={title} onChange={this.onChange}/>
                        <span className='text-danger'>{error.title}</span>
                    </FormGroup>
                    <Button className='btn btn-primary' type='submit'>Submit</Button>
                    </CardBody>
                </Card>
            </Jumbotron>
            </Form>
        )
    }
}
const MapStateToProp = state => ({
    Todos:state.TodosRed.Todo
})
export default  connect(MapStateToProp,{GeteditTodo,editTodo})(EditTodo);