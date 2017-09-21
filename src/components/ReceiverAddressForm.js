import React from 'react';

export default class ReceiverAddressForm extends React.Component {

    render() {
        return (
            <div className="container">
                <form>

                    <div className="form-group">
                        <label htmlFor="email">Receiver's Name</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Receiver's Email address</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Receiver's Contact No.</label>
                        <input type="number" className="form-control" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Receiver's Address</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                   
                </form>
            </div>
        );
    }
}