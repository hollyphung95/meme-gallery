/*  At the top of your main.js file,
use document.querySelector() to grab the main element of your HTML document and
store it in a variable named $gallery */
var $gallery = document.querySelector('main');

var imageUrls = [
  'https://lh3.googleusercontent.com/pw/AL9nZEWEjG3GR0WX2orq56BgeUEilXjippweI3_JVe93NFZnD1VZgIhBwBJu0fANnse0W4nHbCli2kj1FVlfhO7Tk_94BIOMxRvOtZ7bNffLro59vm9veRSOF_cPMaXITg7zTLgYJtLkTpRdgTJ2wyUUULV_=w483-h858-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AL9nZEXVGABGNPLmP3k7W90Pr_ivlT2_fwAQZomRR_1EyOMlYLwfyBZpEheqxC45qvTuoft2VWPXVM2KVuLxKhwbDAtS-qRMJtivblDQomAWeik_dH1xDrki3qSa_ke-2sAdK0J9fJqNvFiOoqpleliGjf2R=w483-h858-no?authuser=0',
  'https://lh3.googleusercontent.com/pw/AL9nZEXWHvORyXLXkc-QctClR2AvcWgW5VgKIZIuGE0fakT9nnf19uNvKU-M3pnDKCnNLmxMARmfZnuus8DVYVkggp24dhhjMDWyllf8A2IxxYPuK_Np2l8j6x0nl392BVcfJBFpGHrgFd61HE8U0GrgEgmH=w863-h858-no?authuser=0'];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {

  if ((($imageUrlInput.value).trim()).length > 0) {
    imageUrls.push(($imageUrlInput.value).trim());
    $imageUrlInput.value = '';
    updateGallery();
  }
});

/* At the bottom of your main.js file, define a function named updateGallery that takes no parameters. */
/* Within updateGallery function's code block, use for loop to visit each URL in imageUrls array */
/* create 'img' element w/ document.createElement assign to $imageElement */
function updateGallery() {
  // initialize the property InnerHTML = ''
  // this will empty the gallery beforerebuilding all the images
  // Recall the doubled up images issue
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);

  }
}
updateGallery();
