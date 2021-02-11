$('.mystery-button').on('click', function() {
	var catpicUrl = $(this).attr('data-cat-picture')

  $('#cat-pic').empty()

  $('#cat-pic').css('background-image', `url(${catpicUrl})`)
})
