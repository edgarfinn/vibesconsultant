import React, { Component } from 'react';
import './App.css';
import './Reset.css'

{/* setup access to users route in express */}
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
          <header className="hero-header large-10 large-centered small-11">
            <h1 className="neon-font">Vibes <br className="large-hide medium-show"/>Consultant</h1>
          </header>
          <p className="hero-description">Full site coming soon</p>
        </section>
        {/* access users route in express */}
          {/* {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )} */}
      </div>
    );
  }
}

export default App;
