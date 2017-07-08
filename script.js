
var w = [1,'hello',67,'werber',5,345];
 for(var index in w) {
document.write('Ячейка массива - ' + index + ' - значение данной ячейки - ' + w[index] + '<br>' );
   
   var arr = [1,2,3,4,['Artem','Novorai']];
   document.write(arr[4][1] + '<br>');
 } 
 
 var food = ['апельсин', 'мандарин', 'банан', 'фуагра', 'ананас'];
document.write(food.join('***'));

 var good = [12, 56, 65, 654, 1, 45, 566, 663, 2, 535, 644, 3, 5654, 564, 234, 4];
good.sort(function nood (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
  return 1;
  }
  return 0;
});
document.write(good);

//выбор нужного элемента 't' 'f';
var arr = ['q','e','t','f - ','v','m'];
document.write(arr.slice(-4,-2));

//удаление елементов 't'   'f' + добовление элементов;
var roody = ['q','e','t','f','v','m'];
alert(roody.splice(2,2,'Novorai','Artem',45,234,534,466,));
document.write(roody);

var array = new Array(10);

for(var i = 0; i < array.length; i++) {
  array[i] = new Array(10);
}

for(var j = 0; j < array.length; j++) {
  for(var n = 0; n < array[j].length; n++){
    array[j][n] = j*n
  }
}

alert(array[5][5]);