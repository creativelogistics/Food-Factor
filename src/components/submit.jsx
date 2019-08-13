import React from 'react';
import axios from 'axios';
class Submit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        user: '',
        recipient: '',
        isUser: false,
        isFact: true,
        isRecipent: false,
        submitClick: false,
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    sendMessage (e) {
    
      e.preventDefault()  
      axios.post('/send',{
          user: this.state.user,
          recipient: this.state.recipient,
          message: this.props.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      // this.setStat({
      //   submitClick: true
      // })
     
        
    }
    inputHandler(e) {
    console.log(e.target.className);
    console.log(e.target.value);
    console.log(this.state.recipient)
    // if (e.target.className === 'user'){
    //   let isKey = 'isUser'
    // }if (e.target.className === 'user'){
    //   let isKey = 'isUser'
    // }if (e.target.className === 'recipient'){
    //   let isKey = 'isUser'
    // }

    let key = e.target.className;
    console.log('key',key)
    let value = e.target.value
    this.setState({
     [key]: value
     })
     if (value.length < 1){

     }
    }
    render(){ 
     return(
     <div className='formcontainer'>
         <form onSubmit={this.sendMessage} className='form'>
             <label>Your name <br></br>
             <input className='user' onChange={this.inputHandler} type='text'></input>
             </label>
             <label>Add recipient's phone number  <br></br>
             <input className='recipient' onChange={this.inputHandler} type='text'></input>
             </label>
             <label>Send a message<br></br>
             <button  className='button'>Send sms</button>
             </label>
         </form>
     </div>
          
     )
    }
}
export default Submit;