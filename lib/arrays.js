var nombreElements = function(array) {
	return array.length;
}

var valeurMinimum = function(array) {
	return Math.min.apply( Math, array );
}


var valeurMaximum = function(array) {
	return Math.max.apply( Math, array );
}


var additionElements = function(array) {
var total=0;
for(var i in array) { 
    total += array[i]; }
	return total ;
}


var calculMoyenne = function(array) {
var total=0;
for(var i in array) { 
    total += array[i]; }
    var moyenne = total / array.length;
return moyenne;
}



var trouverPosition = function(array,number){
 var index = array.indexOf(43) + 1;
    return index;
}

var filtrerNegatif = function(array){
  function retirer(array) {
     return array > 0;
  }
  array = array.filter(retirer);
  return array;
}
    
    
var ajouterValeur = function(array,value){
    array.push(-45);
	return array;
}