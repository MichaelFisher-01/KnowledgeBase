const logoutBtn = document.querySelector('#logout');

const logout = async () => {
	const confirmation = await fetch('api/user/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if (confirmation.ok) {
		document.location.replace('/');
	} else {
		alert(confirmation.statusText);
	}
};

logoutBtn.addEventListener('click', logout);
