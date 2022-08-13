let postTitle;
let postDesc;
let postText;
let postImg;
let postbtn;

let pathName = windows.location.pathname;
console.log(pathName);

if (window.location.pathname === '/newPost') {
	postTitle = document.querySelector('#post-title');
	postDesc = document.querySelector('#post-descicption');
	postText = document.querySelector('#post-text');
	postImg = document.querySelector('#post-image');
	postBtn = document.querySelector('#submitBtn');
}

const sendPost = (post) =>
	fetch('/api/postGen', {
		method: 'POST',
		headers: {
			'Content-Type': ' applicaiton/json',
		},
		body: JSON.stringify(post),
	});

const sendToDb = () => {
	const newPost = {
		title: postTitle.value,
		Desc: postDesc.value,
		text: postText.value,
		Img: postImg.value,
	};
	console.log('sendToDB was successful');
	sendPost(newPost);
};

if (window.location.pathname === '/newPost') {
	postBtn.addEventListener('click', sendToDb);
}
