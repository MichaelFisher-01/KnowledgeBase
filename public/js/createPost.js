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
	const form = event.currentTarget;
	const title = document.querySelector('#title').value.trim();
	const description = document.querySelector('#description').value.trim();
	const imageUpload = document.querySelector('#image');
	console.log(imageUpload);

	if (title && description) {
		try {
			console.log(imageUpload.files);
			const location = imageUpload.files[0].name;
			const imageLocation = `./public/images/${location}`;
			const formData = new FormData(form);
			formData.append('image', imageUpload.files[0]);
			formData.append('postTitle', title);
			formData.append('postInfo', description);
			formData.append('imageLocation', imageLocation);
			formData.append('imageName', location);
			const createPost = await fetch('/api/post/create', {
				method: 'POST',
				body: formData,
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
