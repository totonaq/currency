import React, { Component } from 'react';
import {
    CurrencyPairInfoDescription,
    CurrencyPairInfoHeader
} from './../containers/containers';
import TradeInfo from './../components/TradeInfo';
import Loading from './Loading';
import NotFound from './NotFound';
import ErrorMessage from './ErrorMessage';
import { bookOrderErrorMsg } from './../helpers';
import PropTypes from 'prop-types';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

class DetailedPairInfo extends Component {

	componentDidMount() {

        this.receiveData();

	}

    componentDidUpdate(prevProps) {
       
		if (this.props.match.params.pair !== prevProps.match.params.pair) {
            this.receiveData();
		}
    }

    receiveData = () => {
        const { fetchData, selectPair, match } = this.props;
        const { pair } = match.params;

        fetchData(pair);
        selectPair(pair);
    }
	
	render () {

		const {
			isFetchingTicker,
			isFetchingOrder,
			orderBookError,
            isTickerData
		} = this.props;	

        if (isFetchingTicker) {

            return <Loading />;

        } else if (isTickerData && !isFetchingTicker) {
            return (
                <section className='app-content-details-wrap'>

                    <CurrencyPairInfoHeader />

                    {
                        isFetchingOrder ?

                            <Loading /> :

                            orderBookError ?

                                <ErrorMessage msg={bookOrderErrorMsg} /> :

                                <div className="app-content-details-info">
                                    <CurrencyPairInfoDescription />
                                    <TradeInfo />
                                </div>

                    }
                </section>
            );
        } else if (!isTickerData && !isFetchingTicker) {
            return <NotFound />;
        }

	}
}

DetailedPairInfo.propTypes = {
    fetchData: PropTypes.func.isRequired,
    isFetchingOrder: PropTypes.bool.isRequired,
    isFetchingTicker: PropTypes.bool.isRequired,
    isTickerData: PropTypes.bool.isRequired,
    orderBookError: PropTypes.bool.isRequired,
    selectPair: PropTypes.func.isRequired
};

export default DetailedPairInfo;
DetailedPairInfo.displayName = 'DetailedPairInfo';