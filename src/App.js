import React from 'react'
import './App.css';
import Header from './components/Header'
import Greet from './components/Greet'
import Card from './components/Card'

class App extends React.Component {

  user = {
    username: "adriasalvador",
    email: "adria@adria.com",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXIrqiW3R5OstWAjkuFvNwvjYHRaTmwEQWg&usqp=CAU"
  }

  user1= {
    username: "pedropedro",
    email: "pedro@pedro.com",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXIrqiW3R5OstWAjkuFvNwvjYHRaTmwEQWg&usqp=CAU"
  }

  user2 = {
    username: "antonioantonio",
    email: "antonio@antonio.com",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXIrqiW3R5OstWAjkuFvNwvjYHRaTmwEQWg&usqp=CAU"
  }

  checkForAvatar = () =>{
    if(this.user.avatar){
      return <img src={this.user.avatar} alt={this.user.username}/>
    } else {
      return <img src="https://www.gravatar.com/avatar/cef32a491aa58b729602fe6713667c40?s=5050&r=g&d=mm" 
      alt="Default user"/>
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Greet email={this.user.email} username={this.user.username}/>
        {/* {this.checkForAvatar()} */}
        {/* <p>{this.user.username === 'adriasalvador' ? 'Welcome student' : 'Welcome teacher'}</p> */}
        <Card username={this.user.username} source={this.user.avatar}/>
        <Card username={this.user1.username} source={this.user1.avatar}/>
        <Card username={this.user2.username} source={this.user2.avatar}/>
      </div>
    );
  }
}

export default App;
