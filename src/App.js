import React, {Component}from 'react'


class Ticker extends Component{

    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    //LifeCycle methods
    componentDidMount(){
        setInterval (() => {
            this.setState({
                count: this.state.count + 1
            })
        } , 1000)

    }


    //this is a custom method
    increment = () => {

    }
    reset = () => {
      this.setState({
        count: 0,
      })
    }


    shouldComponentUpdate(nextProps, nextState){
        // if (nextState.count % 3 === 0)
        //    return true;
        // else
        //   return false;
        return (nextState.count % 3 === 0)
    }

    render(){
        return(
            <div>
            <p>The Ticker is :{this.state.count}</p>
            <button type="reset" value="Reset"onClick={this.reset}>Reset_Ticker</button>
            </div>
        );
    };
};


export default Ticker;
