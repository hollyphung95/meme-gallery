var imageUrls = [];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {

  if ((($imageUrlInput.value).trim()).length > 0) {
    imageUrls.push(($imageUrlInput.value).trim());
    $imageUrlInput.value = '';
  }
});
