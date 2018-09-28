import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      picture: '',
      friends: [{ name: 'T$', picture: 'http://http.cat/404' }]
    };
    // this.updateName = this.updateName.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  // updateName(event) {
  //   console.log(event.target.value)
  //   this.setState({
  //     name: event.target.value
  //   });
  // }
  updateUrl(event) {
    // console.log(event.target.value)
    this.setState({
      picture: event.target.value
    });
  }

  addFriend() {
    const newFriend = { name: this.state.name, picture: this.state.picture}
    const friendsCopy = this.state.friends.slice()
    friendsCopy.push(newFriend)
    this.setState({friends: friendsCopy})
    this.clearNames();
  } 

  clearNames(e) {
    this.setState({
      picture: '',
      name: ''
    })
  }

  render() {
    const name = this.state.name;
    const picture = this.state.picture;
    const friends = this.state.friends;
    console.log(this.state)
    return (
      <div>
        <div>
          Name: <input value ={name} onChange={event => this.setState({name: event.target.value})} />
          {name}
          </div>
        <div>
          Picture URL: <input value = {picture} onChange={this.updateUrl} />
          {picture}
          </div>
          <button onClick={this.addFriend}>Add Friend</button>
          <div>Friends: {friends.map(friend => {
            return <div>
              Name: {friend.name}{' '}
              Picture: <img src={friend.picture} />
            </div>
          } )}</div>
      </div>
    );
  }
}

export default App;

