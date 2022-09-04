//Getting the submit button elements
const newUserForm = document.querySelector('#newUserForm');
const logInForm = document.querySelector('#loginForm');
const statusEl = document.createElement('p');

console.log(newUserForm);
console.log(logInForm);

const createUser = async (event) => {
	event.preventDefault();
	console.log('Processing New User Request...');
	const emailEl = document.querySelector('#newEmail');
	const userEl = document.querySelector('#newUser');
	const passEl = document.querySelector('#newPass');

	email = emailEl.value;
	user = userEl.value;
	pass = passEl.value;

	if (email && user && pass) {
		const creation = await fetch('api/user/newUser', {
			method: 'POST',
			body: JSON.stringify({
				userName: `${user}`,
				email: `${email}`,
				password: `${pass}`,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (creation.ok) {
			newUserForm.reset();
			statusEl.innerText = 'User Successfully Created';
			document.querySelector('#createAccountTitle').appendChild(statusEl);
		} else {
			statusEl.innerText = 'User Creation Failed';
			document.querySelector('#createAccountTitle').appendChild(statusEl);
		}
	}
};

const loginUser = async (event) => {
	event.preventDefault();

	const userNameEl = document.querySelector('#userName');
	const passwordEl = document.querySelector('#loginPassword');

	userName = userNameEl.value;
	password = passwordEl.value;

	console.log(userName);
	console.log(password);

	if (userName && password) {
		const validate = await fetch('api/user/validate', {
			method: 'POST',
			body: JSON.stringify({ userName, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (validate.ok) {
			console.log('Log In Successful!');
		} else {
			console.log(validate);
			console.log('Log In Failed');
		}
	}
};

newUserForm.addEventListener('submit', createUser);
logInForm.addEventListener('submit', loginUser);
