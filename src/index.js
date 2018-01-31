import sockette from 'sockette';
import { h, Component } from 'preact';

export default function Sockette(props, context) {
	Component.call(this, props, context);

	this.componentDidMount = () => {
		context.ws = sockette(props.url, props);
	}

	this.shouldComponentUpdate = () => false;

	this.componentWillUnmount = () => {
		context.ws.close();
	}
}

(Sockette.prototype = new Component()).constructor = Sockette;

Sockette.prototype.render = () => '';
