import React, { Component } from 'react';
import './App.css';
import './Reset.css'

class App extends Component {
  state = {users: []}


componentDidMount() {
  fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
}

  render() {
    return (
      <div className="App">
        <section className="section-hero">
          <header className="hero-header large-8 large-centered">
            <h1 className="neon-font">Vibes Consultant</h1>
          </header>
          <p className="hero-description">Full site coming soon</p>
        </section>
          {/* {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )} */}
      </div>
    );
  }
}

export default App;
