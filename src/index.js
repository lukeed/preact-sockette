import sockette from 'sockette';
import { h, Component } from 'preact';

export default function Sockette(props) {
	Component.call(this, props);

	let ws;
	this.componentDidMount = () => {
		ws = sockette(props.url, props);
	}

	this.shouldComponentUpdate = () => false;

	this.componentWillUnmount = () => {
		ws.close();
	}
}

(Sockette.prototype = new Component()).constructor = Sockette;

Sockette.prototype.render = () => '';
