import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../actions';
import './App.css';
import './../styles/App-media.css';
import './../styles/LoadAnimation.css';
import Home from './Home';
import { CurrencyDetailedPairInfo } from './../containers/containers';
import NotFound from './NotFound';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
        window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    }

    componentWillUnmount() {
        console.log('unmount');
        window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    }

    saveStateToLocalStorage() {
        localStorage.setItem('ticker', JSON.stringify(this.props.ticker));
    }

    render() {
        return (
            <section className='app'>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/:pair' component={CurrencyDetailedPairInfo} />
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            </section>
        );
    }

}

export default connect(
    state => ({ ticker: state.fetchData.ticker }),
    { fetchData }
)(App);
App.displayName = 'App';