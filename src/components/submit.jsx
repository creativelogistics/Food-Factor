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
    }
    sendMessage () {
        axios.post('/sms', ({
        
        }))
    }

    render(){
     return(
         <form className='form'>
             <label>your name </label>
             <input type='text'></input><br></br>
             <label>friends name </label>
             <input type='text'></input><br></br>
             <label>send robo call</label>
             <button onClick ={} className='button'></button>
         </form>
     )
    }
}
export default Submit;