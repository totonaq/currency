import React from 'react';
import { CurrencyList } from './../containers/containers';
import { tickerErrorMsg } from './../helpers';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import PropTypes from 'prop-types';

const Pairs = (props) => {

    const { isFetchingTicker, tickerError } = props;

    return (
        <div className='app-content'>

            <h2 className='app-content-header'>Currency pairs</h2>

            {

                isFetchingTicker ?

                    <Loading /> :

                    tickerError ?

                        <ErrorMessage msg={tickerErrorMsg} /> :

                        <CurrencyList />
            }

        </div>
    );

};

Pairs.propTypes = {
    fetchData: PropTypes.func.isRequired,
    isFetchingTicker: PropTypes.bool.isRequired,
    tickerError: PropTypes.bool.isRequired
};

export default Pairs;
Pairs.displayName = 'Pairs';