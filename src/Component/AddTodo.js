import React, { Component } from 'react'
import {Jumbotron,FormGroup,Label,Input,Form,Card,CardBody,Button} from 'reactstrap'
import {connect} from 'react-redux'
import {addTodo} from '../Actions/TodosAction'
class AddTodo extends Component {
    state={
        title:''
    }
    onChange = e =>{
        this.setState({title:e.target.value})
       // console.log(e.target.value);     
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.props.history.push('/')
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
            <Jumbotron>
                <Card>
                    <CardBody>
                    <FormGroup>
                        <Label for="todo">Task</Label>
                        <Input type="text" name="todo" id="todo" placeholder="nter Task" onChange={this.onChange} />
                    </FormGroup>
                    <Button className='btn btn-primary' type='submit'>Submit</Button>
                    </CardBody>
                </Card>
            </Jumbotron>
            </Form>
        )
    }
}
export default connect(null,{addTodo})(AddTodo);