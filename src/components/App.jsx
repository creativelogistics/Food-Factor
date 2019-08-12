import React from  'react';
import Submit from './submit.jsx';
import MostRecent from './MostRecent.jsx';

class App extends React.Component  {
    constructor (props ){
        super(props)
        this.state = {
            images: [
                {title: 'A Hotdog is a Taco',
                 url : 'https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/a2/c5/36/a2c53607-b8e6-112d-800c-9d975a8e7b76/pr_source.png/246x0w.jpg'},
                 
                {title: 'A smoothie is soup',
                url : 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg'},
                
                {title: 'A eggroll is a burrito',
                url : 'http://www.npfamilyrecipes.com/wp-content/uploads/2017/09/VietnameseEggroll.jpg'},
                
                {title: 'A Corn dog  is a lolipop',
                url : 'https://static.olocdn.net/menu/applebees/be395cbacf63fe3f5081b894cde6996f.jpg'},
              
                {title: 'A Banana is a sausage',
                url : 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
               
                {title: 'Salad is potpurri', 
                url : 'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-760x983.jpg'},
                
                {title: 'A slice of pie is a taco ',
                url : 'https://www.icarol.com/wp-content/uploads/923px-Cherry-Pie-Slice.jpg'},
                
                {title: 'A Big Mac is lasagna ',
                url:'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Big-Mac.jpg'}
               ],
         hotdogIs : ['Taco'],
         smoothieIs: ['Soup'],
         eggrolis: ['burrito'],
         cornDogIs : ['lolipop'],
         bannanaIs: ['fruit sausage'],
         saladIs: ['potupurri'],
         sliceOfPie: ['taco'],
         bigMacIs: ['lasagna'],
         messagesSent: 0 , 
         mostRecent: false,  
         mostRecentSms: []      
        }
    }
    componentDidMount() {
        axios.get('/mostRecent')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                this.setState({
                    MostRecent: ['recent','recent'],
                })
            });
    }
    render () {
        renderViews  = () => {
            if (this.state.mostRecent){
                return (
                    <MostRecent mostRecent={this.state.mostRecent} />
                )
            }else {
                return(
                    <div className='main' >
                        <div className="recent">Most Recent</div>
                          <h1>Robo call Food classification to your friends</h1>
                          <div className='display'>
                            {this.state.images.map( (image,index) =>(
                              <div onClick= { () => console.log('changeStyle')}
                              key= {index} 
                              className='images'>
                                <img id = {index} 
                                className= 'img' 
                                src={image.url}>
                                </img>
                                <p>{image.title}</p>
                              </div>
                            ))}
                        </div>  
                        <Submit/>  
                    </div>
                )
            }

            
            return (
            <p>rer</p>
            )
        }   
}

export default App;