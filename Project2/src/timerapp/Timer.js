/*
import { Component } from 'react';

class Timer extends Component {
	state = {
		seconds: 0,
	};

	tick = () => {
		this.setState({
			seconds: this.state.seconds + 1,
		});
	};

	componentDidMount = () => {
		this.interval = setInterval(() => this.tick(), 1000);
	};

	componentWillUnmount = () => {
		clearInterval(this.interval);
	};

	render() {
		return <div>Seconds Elapsed: {this.state.seconds}</div>;
	}
}

export default Timer;
*/

import { useState, useEffect } from 'react';

export default function Timer() {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	return <div>Seconds Elapsed: {seconds}</div>;
}
/*
import { Component } from 'react';
class Timer extends Component {
	state = {
		seconds: 0,
	};
	interval = {};
	//   tick = ()=> {
	//     this.setState({
	//         seconds: this.state.seconds+1
	//     })
	//   }
	componentWillUnmount = () => {
		clearInterval(this.interval);
	};
	componentDidMount = () => {
		this.interval = setInterval(
			() =>
				this.setState({
					seconds: this.state.seconds + 1,
				}),
			1000
		);
	};
	render() {
		return <div>Seconds Elapsed: {this.state.seconds}</div>;
	}
}
export default Timer;
*/
