
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