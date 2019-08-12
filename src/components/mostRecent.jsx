import React from 'react';

class MostRecent extends React.Component{
    constructor (props){
        super (props)
        this.state= {
            mostRecent: [],
        }
    }
 
    render () {
      return(
        <div>
          {this.state.mostRecent.map((item)(
        ))}
        </div>
        )
    }
}