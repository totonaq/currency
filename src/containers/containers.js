import { connect } from 'react-redux';

import Pairs from './../components/Pairs';
import List from './../components/List';
import DetailedPairInfo from './../components/DetailedPairInfo';
import PairInfoHeader from './../components/PairInfoHeader';
import PairInfoDescription from './../components/PairInfoDescription';
import Table from './../components/Table';

import {
    fetchData,
    selectPair
} from './../actions';

import {
	getPriceChange,
	doesLocalStorageExist
} from './../helpers';


export const CurrencyPairs = connect(

    state => ({
        isFetchingTicker: state.fetchData.isFetchingTicker,
        tickerError: state.fetchData.tickerError
    }),

    { fetchData }

)(Pairs);

export const CurrencyList = connect(

    state => {
        const tickerRaw = state.fetchData.ticker || {};

        let ticker = Object.keys(tickerRaw).map((item, idx) => {
            return {
                title: item,
                current_price: tickerRaw[item].buy_price
            };
        });

        if (!doesLocalStorageExist(localStorage.getItem('ticker'))) {

            localStorage.setItem('ticker', JSON.stringify(ticker));

        } else {
            const localTickerRaw = JSON.parse(localStorage.getItem('ticker'));

            ticker = Object.keys(localTickerRaw).map((item, idx) => {
                return {
                    ...ticker[idx],
                    title: item,
                    saved_price: localTickerRaw[item].buy_price
                };
            });
            
        }

        return {
            ticker
        };
    }

)(List);

export const CurrencyDetailedPairInfo = connect(

    state => {

        const isTickerData = state.fetchData.ticker[state.selectedPair] ?
            true : false;

        return {
            isFetchingTicker: state.fetchData.isFetchingTicker,
            isFetchingOrder: state.fetchData.isFetchingOrder,
            orderBookError: state.fetchData.orderBookError,
            isTickerData
        };
    },

    { fetchData, selectPair }

)(DetailedPairInfo);

export const CurrencyPairInfoHeader = connect(

    state => {

        const selectedPair = state.selectedPair;

        const price = state.fetchData.ticker[selectedPair].buy_price;
        const priceFromStorage =
            JSON.parse(localStorage.getItem('ticker'))[selectedPair].buy_price;
        const change = getPriceChange(price, priceFromStorage);

        return {
            selectedPair,
            price,
            change
        };
    }

)(PairInfoHeader);

export const CurrencyPairInfoDescription = connect(

    state => {

        const selectedPair = state.selectedPair;

        return {
            tickerInfo: state.fetchData.ticker[selectedPair] || {}
        };

    }

)(PairInfoDescription);

export const BuyTable = connect(

    state => ({
        list: state.fetchData.orderBook.ask.slice(0, 50) || []
    })

)(Table);

export const SellTable = connect(

    state => ({
        list: state.fetchData.orderBook.bid.slice(0, 50) || []
    })

)(Table);