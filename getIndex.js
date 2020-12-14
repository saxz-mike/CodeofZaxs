const bluma = ['bluma'];

function getIndex(array){

  /*   const {preformance} = require('perf_hooks').performance;
  var t1 = performance.now(); */
  
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'bluma'){
      return console.log('index found :)');
    }else{
      return console.log('index not found :(');
    }
  }

  /*   var t2 = preformance.now(); */
  
 /* Time Elapsed
 console.log(`run time code ${(t2 - t1) /1000}millisecondes`); */
}
getIndex(bluma);
