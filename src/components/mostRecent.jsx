import React from 'react';
import moment from 'moment'

class MostRecent extends React.Component {
    constructor (props){
        super (props)
        this.state= {
        }
    }
    render () {
      return(
        <div>

          <h1>Most Recent messages</h1>
          {this.props.recent.map( (item) =>(
            <div className='recent '>

              <div>{moment(item.date).format("MMM Do YY")}</div>
              <div>{item.user}</div>
              <div>{item.message}</div>
            </div>
      ))}
        </div>
        )
    }
}
export default MostRecent;