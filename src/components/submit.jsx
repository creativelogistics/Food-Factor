import React from 'react';
import config from '../../twilio.config';

const client = require('twilio')(config.AccountSid,config.token);

class Submit extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        user: '',
        recipient: '',
        message: '',

        }
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage () {
      axios.post('/sms',{
          recipent: this.state.recipient,
          message: this.props.message,
      })
    }

    render(){
     return(
         <form className='form'>
             <label>your name </label>
             <input type='text'></input><br></br>
             <label>friends name </label>
             <input type='text'></input><br></br>
             <label>send robo call</label>
             <button onClick ={console.log(this.props.message)} className='button'></button>
         </form>
     )
    }
}
export default Submit;