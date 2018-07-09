import React from 'react';
import { BuyTable, SellTable } from './../containers/containers';

const TradeInfo = () => {
    return (
        <div className="app-content-details-info-trade">
            <BuyTable title='Buy orders' />
            <SellTable title='Sell orders' />
        </div>
    );
};

export default TradeInfo;
TradeInfo.displayName = 'TradeInfo';