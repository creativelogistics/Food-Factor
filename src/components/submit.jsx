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
      
    //   client.calls.create({
    //       url:
    //       to: this.state.recipent,
    //       from: +14153017919,
    //   }, (err,result) => {
    //       if (err) {
    //           console.log(error)
    //       }
    //       else {
    //           console.log(result)
    //       }
    //   })
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