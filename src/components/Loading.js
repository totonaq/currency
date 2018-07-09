import React from 'react';

const Loading = () => {
    return (
        <div className="loading">
            <div className="lds-css ng-scope">
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
Loading.displayName = 'Loading';