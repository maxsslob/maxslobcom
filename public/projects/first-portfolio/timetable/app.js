var app = angular.module('TimeTable', []);

var d = new Date();

app.controller('MainCtrl', function(){
  this.date = d;
  this.active = function(){
    return this.date.getDay();
  };
  
  var none = '- - -';
  var security = 'Безопасность';
  var testing = 'Тестирование';
  var autotesting = 'А. Тестирование';
  var economy = 'Экономика';
  var internet = 'Интернет';
  var mathmod = 'Мат. Мод.';
  var PE = 'Физ-ра';
  var program = 'КП и ЯП';
  var eng = 'Англ. Яз.';

  this.lessonsS = [
     {one: none,
        two: none,
          three: security + ' | 302',
            four: testing + ' | 325',
              five: autotesting + ' | 325',},
     {one: none,
        two: none,
          three: mathmod + ' | 320',
            four: internet + ' | 309',
              five: economy + ' | 125'},
     {one: none,
        two: eng + ' | 104',
          three: mathmod + ' | 320',
            four: testing + ' | 325',
              five: autotesting + ' | 325'},
     {one: none,
        two: eng + ' | 213',
          three: PE,
            four: mathmod + ' | 320',
              five: program + ' | 323'},
     {one: none,
        two: security + ' | 325',
          three: eng + ' | 164(8)',
            four: program + ' | 314',
              five: none},
     {one: none,
        two: internet + ' | 320',
          three: PE,
            four: economy + ' | 153',
              five: none},
  ];
    this.lessonsF = [
     {one: none,
        two: none,
          three: none,
            four: testing + ' | 325',
              five: autotesting + ' | 325'},
     {one: none,
        two: none,
          three: economy + ' | 125',
            four: internet + ' | 309',
              five: economy + ' | 125'},
     {one: none,
        two: eng + ' | 104',
          three: mathmod + ' | 320',
            four: testing + ' | 325',
              five: autotesting + ' | 325'},
     {one: none,
        two: eng + ' | 213',
          three: PE,
            four: mathmod + ' | 320',
              five: program + ' | 323'},
     {one: none,
        two: security + ' | 325',
          three: eng + ' | 164(8)',
            four: program + ' | 314',
              five: none},
     {one: none,
        two: internet + ' | 320',
          three: economy + ' | 153',
            four: none,
              five: none},
  ];
});

$(document).ready(function(){
  switch(d.getDay()){
    case 1: 
      $('#week:nth-child(2)').addClass('today');
        break;
    case 2: 
      $('#week:nth-child(3)').addClass('today');
        break;
    case 3: 
      $('#week:nth-child(4)').addClass('today');
        break;
    case 4: 
      $('#week:nth-child(5)').addClass('today');
        break;
    case 5: 
      $('#week:nth-child(6)').addClass('today');
        break;
    case 6: 
      $('#week:nth-child(7)').addClass('today');
        break;
  }
  
  switch(d.getHours()){
    case 8: 
      $('.p1').addClass('today');
        break;
    case 9: 
      $('.p1').addClass('today');
        break;
    case 10: 
      $('.p2').addClass('today');
        break;
    case 11: 
      $('.p2').addClass('today');
        break;
    case 12: 
      $('.p3').addClass('today');
        break;
    case 13: 
      $('.p3').addClass('today');
        break;
    case 14: 
      $('.p4').addClass('today');
        break;
    case 15: 
      $('.p4').addClass('today');
        break;
    case 16: 
      $('.p5').addClass('today');
        break;
    case 17: 
      $('.p5').addClass('today');
        break;
  }
});

