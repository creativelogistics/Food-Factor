import React from 'react';

class MostRecent extends React.Component {
    constructor (props){
        super (props)
        this.state= {
        }
    }
    render () {
      return(
        <div>
          {this.props.mostRecent.map((item)(
            <p>item</p>
        ))}
        </div>
        )
    }
}
export default MostRecent;