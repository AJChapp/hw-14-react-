import React, {Component} from 'react';

 class Winner extends Component{

    render(){
        return(
            <div>
                <h1>Congratulations</h1>
                <h2>You Won!!</h2>
                <button className = "btn" onClick = {this.props.reset}>Play Again?</button>
            </div>
        )
    }
 }

 export default Winner