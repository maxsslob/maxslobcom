(function() {
  var app;

  app = angular.module('notes', []);

  app.controller('mainCtrl', function() {
    this.isClicked = true;
    this.isDeleted = false;
    this.notes = [
      {
        name: "Example title",
        body: "Example body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate, soluta deserunt illum eaque quaerat? Aliquid assumenda, sit placeat.Lorem ipsum dolor sit."
      }
    ];
    this.noteCount = this.notes.length;
    this.addNote = function() {
      this.notes.push(this.note);
      return this.note = {};
    };
  });

  app.directive('notes', function() {
    return {
      restrict: 'E',
      templateUrl: 'notes.html'
    };
  });

  $(document).ready(function() {
    $('.add').click(function() {
      $(this).toggleClass('rotate');
    });
    $('.info-but').click(function() {
      $('.info').show();
      $(this).hide();
    });
    $('.info-close-but').click(function() {
      $('.info').hide();
      $('.info-but').show();
    });
  });

}).call(this);

