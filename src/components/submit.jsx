import React from 'react';

class Submit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        user: '',
        recipient: '',
        

        }
        this.sendMessage = this.sendMessage.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    sendMessage () {
      axios.post('/sms',{
          recipent: this.state.recipient,
          message: this.props.message,

      })
    }
    inputHandler(e) {
    console.log(e.target.className);
    console.log(e.target.value);
    console.log(this.state.recipient)
    let key = e.target.className;
    let value = e.target.value
    this.setState({
        [key]: value
     })

    }
    
    render(){
     return(
         <form onClick ={console.log(this.props.message)} className='form'>
             <label>your name </label>
             <input className='user' onChange={this.inputHandler} type='text'></input><br></br>
             <label>friends name </label>
             <input className='recipient' onChange={this.inputHandler} type='text'></input><br></br>
             <label>send robo call</label>
             <button  className='button'></button>
         </form>
     )
    }
}
export default Submit;