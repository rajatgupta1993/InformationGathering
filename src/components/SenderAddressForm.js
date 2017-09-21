import React from 'react';

export default class SenderAddressForm extends React.Component {

    render() {
        return (
            <div className="container">
                <form>

                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Contact No.</label>
                        <input type="text" className="form-control" id="contact" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Address</label>
                        <input type="text" className="form-control" id="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" id="pwd" />
                    </div>

                </form>
            </div>
        );
    }
}