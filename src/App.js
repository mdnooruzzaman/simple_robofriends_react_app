import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import './App.css';
import { robots } from './robots';
import Scroll from './scroll';

class App extends Component  {
    constructor(){
        super();
        this.state ={
            robots:[],
            searchfield: ''
        }
        console.log('1')
    }
    componentDidMount(){
        this.setState({robots: robots});
        console.log('2')
    }
    onSearchChange = (event) =>{
        console.log(event.target.value)
        this.setState({searchfield: event.target.value });
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name1.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filterRobots);
        console.log('3');
    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name1.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log('4');
        return(
            <div className='app'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
                
                
            </div>);
            
    }
    
}
export default App;