app = angular.module('notes', [])
app.controller('mainCtrl' , () ->
	this.isClicked = true
	this.isDeleted = false
	this.notes = [{
		name: "Example title"
		body: "Example body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate, soluta deserunt illum eaque quaerat? Aliquid assumenda, sit placeat.Lorem ipsum dolor sit."
	}
	# {	name: "Example two"
	#	body: "Example body"
	#}
	]
	this.noteCount = this.notes.length
	this.addNote = ->
		this.notes.push(this.note)
		this.note = {}
	return
)

app.directive('notes', () ->
	return {
		restrict: 'E',
		templateUrl: 'notes.html'
		}
	)

$(document).ready(() ->
	$('.add').click(() ->
		$(this).toggleClass('rotate')
		return
		)
	$('.info-but').click(() ->
		$('.info').show()
		$(this).hide()
		return
		)
	$('.info-close-but').click(() ->
		$('.info').hide()
		$('.info-but').show()
		return
		)
	return
	)