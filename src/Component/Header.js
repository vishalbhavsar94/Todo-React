import React, { Component } from 'react'
import {Nav,NavbarBrand,NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Nav className='navbar navbar-expand-md navbar-dark bg-primary fixed-top'>
                    <NavbarBrand>Todo-App</NavbarBrand>
                        <NavItem><Link to='/' className='nav-link' style={{color:'#212529'}}>Home</Link></NavItem>
                        <NavItem><Link to='/AddTodo' className='nav-link'style={{color:'#212529'}} >AddTodo</Link></NavItem>
                        
            </Nav>
        )
    }
}
