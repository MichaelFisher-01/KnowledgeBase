let postTitle;
let postDesc;
let postText;
let postImg;

if (window.location.pathname === '/newPost') {
	postTitle = document.querySelector('#post-title');
	postDesc = document.querySelector('#post-descicption');
	postText = document.querySelector('#post-text');
	postImg = document.querySelector('#post-image');
}

const sendPost = (post) =>
	fetch('/api/postGen', {
		method: 'POST',
		headers: {
			'Content-Type': ' applicaiton/json',
		},
		body: JSON.stringify(post),
	});
