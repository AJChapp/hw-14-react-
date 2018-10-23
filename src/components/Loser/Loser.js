import React, {Component} from 'react';

 class Loser extends Component{

    render(){
        return(
            <div>
                <h1>Sorry :'(</h1>
                <h2>You Lost</h2>
                <button className = "btn" onClick = {this.props.reset}>Play Again?</button>
            </div>
        )
    }
 }

 export default Loser