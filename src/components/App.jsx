import React from  'react';
import Submit from './Submit.jsx';
import MostRecent from './MostRecent.jsx';
import axios from 'axios';
import FoodList from './FoodList.jsx';

class App extends React.Component  {
    constructor (props ){
        super(props)
        this.state = {
         message: '',   
         messagesSent: 0 , 
         recentlist: [],
         mostRecent: false,  
         mostRecentSms: []      
        }
        this.messageHandler = this.messageHandler.bind(this);
        this.mostRecent = this.mostRecent.bind(this);
    }
    componentDidMount() {
        // get images from database
        // get most recent let
        let here = this
        axios.get('/mostRecent')
            .then((response) => {
                console.log(response.data)
                 here.setState({
                 recentlist: response.data
                 })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
           
    }
    mostRecent(){
        console.log('clcik',this.state.recentlist)
       
        this.setState({
            mostRecent: true,
        })
    }
    messageHandler (title) {

    this.setState({
        message: title
    })

    }
    render () {
        const renderView = () => {
            if (this.state.mostRecent){
                return (
                  <div>
                    <MostRecent 
                    recent={this.state.recentlist} 
                    />
                  </div>
                )
            }else {
                return (
                    <div className='main' >
                       
                        <h1> Text nifty food facts to friends</h1>
                        <h2>click on food fact and add a phone number </h2>
                        <FoodList className ='foodList'
                        messageHandler={this.messageHandler}
                        />
                        <Submit className='submit'
                        message ={this.state.message}
                        />  
                         <div onClick={this.mostRecent} 
                        className="recentM">
                         Most Recent Messages
                        </div>
                    </div>
                )
            }
        } 
        return (
            <div>
                {renderView()}
            </div>
        )
    }
}
export default App;