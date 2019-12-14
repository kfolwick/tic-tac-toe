import React, { Component } from 'react';

class Squares extends Component{

handleChange = () => {
    this.props.changeX(this.props.index)
    this.props.countDown()
}

    render(){
        return(
            <div>
                <div>

                    <button
                        onClick = {this.handleChange}
                        id="buttonSize"
                        name = 'square'>{this.props.value}
                    </button>
                </div>
            </div>
        )
    }
}
export default Squares;
