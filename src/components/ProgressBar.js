import React from "react"


export default class ProgressBar extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         percentageCompleted: 0
    //     }

    //     this.onPreviousClicked = this.onPreviousClicked.bind(this);
    //     this.onProceedClicked = this.onProceedClicked.bind(this);
    // }

    render() {
        debugger;
        return (
            <div style={{ marginTop: '50px', marginBottom:'50px' }}>

                <div className="container">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.props.percentageCompleted}%` }}>
                            {this.props.percentageCompleted}%
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}