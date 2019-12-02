import React from 'react';
import {Provider} from 'react-redux'
import Store from './store'
import Header from './Component/Header'
import {Container} from 'reactstrap'
import Todos from './Component/Todos'
import AddTodo from './Component/AddTodo'
import EditTodo from './Component/EditTodo'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <Provider store={Store}>
    <Router>
        <React.Fragment>
          <Header />
            <Container>
                <Route exact path='/' component={Todos} />
                <Route exact path='/AddTodo' component={AddTodo} /> 
                <Route exact path='/EditTodo/:id' component={EditTodo} /> 
            </Container>
      </React.Fragment>
    </Router>
    </Provider>
      );
}
export default App;
