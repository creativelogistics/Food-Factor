import React from  'react';



class FoodItem extends React.Component  {
    constructor (props ){
        super(props)
        this.state = {
        //add to db
        messagesSent: 0 , 
        recentlist: [],
        mostRecent: false,  
        mostRecentSms: []      
        }  
    }
    render () {
    return (          
      <div 
      onClick={ () => this.props.messageHandler(this.props.image.title[0])} 
      id={this.props.id}
      >  <div className ='foodItem'>
        <img
        className="img" 
        src= {this.props.image.url}
        />
        <div className='food'>
      {this.props.image.title[0]}
      </div>

      </div>
       
      </div>
    )        
  }
}
export default FoodItem;