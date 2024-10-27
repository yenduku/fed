import React,{Component} from 'react';
import './digitalclock.css';
class DigitalClock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time : new Date(),
            };
    }
componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000);
}
componentWillUnmount(){
    clearInterval(this.timerID);
}
tick(){
    this.setState({
        time : new Date()
        });
}
render() {
    const {time} = this.state;
    const hours = String(time.getHours()).padStart(2,'0');
    const minutes =String(time.getMinutes()).padStart(2,'0');
    const seconds = String(time.getSeconds()).padStart(2,'0');
    return (
        <div className="digital-clock">
            <div className ="digit">{hours[0]}</div>
            <div className ="digit">{hours[1]}</div>
            <div className ="colon">:</div>
            <div className ="digit">{minutes[0]}</div>
            <div className ="digit">{minutes[1]}</div>
            <div className="colon">:</div>
            <div className ="digit">{seconds[0]}</div>
            <div className ="digit">{seconds[1]}</div>
        </div>
    );
}
}
export default DigitalClock;