import React from  'react';
import axios from 'axios';
import FoodItem from './FoodItem.jsx';

class FoodList extends React.Component  {
    constructor (props ){
        super(props)
        this.state = {
            //add to db
            images: [
                {title: ['A Hotdog is a Taco!'],
                 url : 'https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/a2/c5/36/a2c53607-b8e6-112d-800c-9d975a8e7b76/pr_source.png/246x0w.jpg'},
                 
                {title: ['A smoothie is soup!'],
                url : 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg'},
                
                {title: ['An eggroll is a burrito!'],
                url : 'http://www.npfamilyrecipes.com/wp-content/uploads/2017/09/VietnameseEggroll.jpg'},
                
                {title: ['A corn dog is a lolipop!'],
                url : 'https://static.olocdn.net/menu/applebees/be395cbacf63fe3f5081b894cde6996f.jpg'},
              
                {title: ['A banana is a sausage!'],
                url : 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
               
                {title: ['Salad is potpurri!'], 
                url : 'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-760x983.jpg'},
                
                {title: ['A slice of pie is a taco!'],
                url : 'https://www.icarol.com/wp-content/uploads/923px-Cherry-Pie-Slice.jpg'},
                
                {title: ['A Big Mac is lasagna!'],
                url:'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Big-Mac.jpg'}
               ],
          foodIndex: '',
         messagesSent: 0 , 
         recentlist: [],
         mostRecent: false,  
         mostRecentSms: []      
        }
        this.setFood = this.setFood.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
       
    }
   
    messageHandler (key) {
    let text = this.state.images[key].title[0];
    console.log('messge',text)
    this.setState({
        message: text
    })
    }
    setFood(index){
      console.log('hheheheh')
      this.setState({
        foodIndex: index
      })
    }
    render () {
      return (
        <div className='display'>
          {this.state.images.map((image,index) => (
            <FoodItem 
            style={this.state.foodIndex === index ? {border: 'solid black 20px'} : {border: 'solid black 20px'} }
            messageHandler={this.props.messageHandler} 
            className={`food${index}`} 
            id={index}
            key={index} 
            image={image}
            />
          ))}
        </div>
      )               
  }
}
export default FoodList;


/* <div className='main' >
                        <div onClick={this.mostRecent} className="recent">Most Recent</div>

                         

                          <div className='display'>
                            {this.state.images.map( (image,index) =>(
                              <div onClick = {() => this.messageHandler(index)}
                              key= {index} 
                              className='images'>
                                <img id = {index} 
                                className= 'img' 
                                src={image.url}>
                                </img>
                                <p>{image.title[0]}</p>
                              </div>
                            ))}
                        </div>  
                        <Submit message ={this.state.message}/>  
                    </div>
           */