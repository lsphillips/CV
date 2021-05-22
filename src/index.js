import './styles/index.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function setupLazyImages ()
{
	document.addEventListener('load', event =>
	{
		if (event.target.tagName.toLowerCase() === 'img')
		{
			event.target.style.opacity = 1;
		}

	}, true);

	Array.prototype.forEach.call(document.images, image =>
	{
		if (image.complete)
		{
			image.style.opacity = 1;
		}
	});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

setupLazyImages();
