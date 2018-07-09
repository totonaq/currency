import React from 'react';
import Header from './Header';
import { CurrencyPairs } from './../containers/containers';

const Home = props => {
    return (
        <section>
            <Header />
            <CurrencyPairs />
        </section>
    );
};

export default Home;
Home.displayName = 'Home';