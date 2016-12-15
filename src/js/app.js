import Message from './modules/Message';

const message = new Message('Default text');
const num = 10;

console.log('ahoi: ', num);

new Promise((resolve, reject)=> {
	setTimeout(resolve, 2000)
	}).then(()=> {
		console.log('Yay it works!')
});

message.say('Override default text');
//debugger;
function foo ({
	bar = 'no',
	baz = 'works!'
} = {}) {

	return (`${bar}, ${baz}`);
}

console.log(foo({
	bar: 'yay 1'
})); // logs 'yay, works!'