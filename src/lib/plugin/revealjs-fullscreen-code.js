$('body').append("<div id='fullscreen-box'><pre><code></code></pre></div>")
$('pre code').before("<button class='fullscreen-button'>Plein écran&nbsp;&nbsp;&nbsp;</button>")
let fullscreenBoxVisible = false
$('button.fullscreen-button').on('click', function (e) {
	let code = this.parentElement?.children[1].innerHTML
	if (code === undefined) return
	if (fullscreenBoxVisible) {
		$('div#fullscreen-box pre code').html('')
		$('div#fullscreen-box').toggleClass('visible')
		fullscreenBoxVisible = false
	} else {
		$('div#fullscreen-box pre code').html(code)
		$('div#fullscreen-box').toggleClass('visible')
		fullscreenBoxVisible = true
	}
})
