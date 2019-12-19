import React, { Component } from 'react';
import './App.css';
import News from './News/News';

const user = {
    firstName: 'Ertugrul',
    lastName: 'Dal',
    data: 'this is some data',
};

const UserData = React.createContext();
const Theme = React.createContext();
export const UserConsumer = UserData.Consumer;
export const ThemeConsumer = Theme.Consumer;

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleName = () => {
        this.setState(state => ({
            name:
            state.name == 'Ertugrul Dal'
            ? 'Somebody else'
             : 'Ertugrul Dal'
        }))
    }

    this.state = {
      news: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
        name: 'Ertugrul Dal',
        toggleName: this.toggleName,
        styles: {
          display: 'flex',
        }
    };
  }

  render() {
    return (
        <UserData.Provider value={this.state}>
            <div className="containwer-fluid">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper indigo lighten-4">
                            <a href="/" className="bran-logo center">My Feed</a>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Theme.Provider value={this.state}>
                            <News news={this.state.news} />
                        </Theme.Provider>
                    </div>
                </div>
            </div>
        </UserData.Provider>

    );
  }
}

export default App;
