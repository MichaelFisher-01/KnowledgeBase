const postForm = document.querySelector('#newPostForm');
const imageEl = document.querySelector('#image');
const displayEl = document.querySelector('#imageDisplay');

const showImage = (event) => {
	const file = imageEl.files[0];
	console.log(file);
	const imageType = /image.*/;

	if (file.type.match(imageType)) {
		const reader = new FileReader();
		reader.onload = function (event) {
			displayEl.innerHTML = '';

			const content = new Image();
			content.src = reader.result;

			displayEl.appendChild(content);
		};
		reader.readAsDataURL(file);
	} else {
		displayEl.innerHTML = 'Cannot accept that file type';
	}
};

imageEl.addEventListener('change', showImage);

const createPost = async (event) => {
	event.preventDefault();
	const titleEl = document.querySelector('#title');
	const descriptionEl = document.querySelector('#description');

	const title = titleEl.value;
	const description = descriptionEl.value;
	const imageData = imageEl.files[0];

	if (title && description && imageData) {
		try {
			console.log(`${title}, ${description}, ${imageData}`);

			const createPost = await fetch('/api/post/create', {
				method: 'POST',
				body: JSON.stringify({
					postTitle: `${title}`,
					postInfo: `${description}`,
					imgSrc: `${imageData}`,
				}),
				headers: { 'Content-Type': 'application/json' },
			});

			if (createPost.ok) {
				displayEl.innerText = 'Post Generated Successfully';
				console.log('Success!');
			} else {
				displayEl.innerText = 'Post generation failed';
				console.log('Fail');
			}
		} catch (error) {
			console.log(error);
		}
	}
};

postForm.addEventListener('submit', createPost);
