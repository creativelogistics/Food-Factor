import React from 'react';

class MostRecent extends React.Component{
    constructor (props){
        super (props)
        this.state= {
            mostRecent: [],
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
                    MostRecent: response,
                })
            });
    }
    render () {
      return(
        <div>
          {this.state.mostRecent.map((item)(
        ))}
        </div>
        )
    }
}