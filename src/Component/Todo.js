import React, { Component } from 'react'
import {Card,CardBody,CardText,Row,Col,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteTodos} from '../Actions/TodosAction'

class Todo extends Component {
    
    DeleteTodo = id => {
        this.props.deleteTodos(id);
        //console.log(id);
        
    }
    

    render() {
        const {id,title} = this.props.Tdo
        return (
            <React.Fragment>
            <Card>
                <CardBody>
                    <Row>
                        <Col><CardText>{title}</CardText></Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Link className='btn btn-warning' to={`/EditTodo/${id}`}>Edit</Link>
                            <Button className='btn btn-danger' onClick={this.DeleteTodo.bind(this,id)}>Delete</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </React.Fragment>
        )
    }
}
export default connect(null,{deleteTodos})(Todo);