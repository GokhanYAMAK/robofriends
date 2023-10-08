import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

function App() {
  // constructor(){
  // 	super()
  // 	this.state = {
  // 		robots: [],
  // 		searchfield: ''
  // 	}
  // }

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  // componentDidMount(){
  // 	fetch('https://jsonplaceholder.typicode.com/users')
  // 		.then(response=> response.json())
  // 		.then(users=>this.setState({robots:users}))
  // }

  useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response=> response.json())
  		.then(users=>{setRobots(users)})
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
export default App;
