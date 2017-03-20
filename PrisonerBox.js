function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};

  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}

function main(){
  var setBox = ["piano", "drum", "violin", "cello", "trumpet", "sax", "mic", "flute", "guitar", "harp"];
  var randomIns = ["piano", "drum", "violin", "cello", "trumpet", "sax", "mic", "flute", "guitar", "harp"];
  var musicians = ["piano", "drum", "violin", "cello", "trumpet", "sax", "mic", "flute", "guitar", "harp"];
  var boxPlusIns = [];
  var successArr = [];
  var foundTen;
  randomIns = shuffle(randomIns);
  musicians = shuffle(musicians);
  for(i = 0; i < setBox.length; i++){
    boxPlusIns.push([setBox[i], randomIns[i]]);
  }
  //Logger.log(boxPlusIns);
  /* Create search function: Set 3 variable (finalCrit, tmpCrit, tmpResult). finalCrit must be static value and it must be the musician's instrument
  tmpCrit is the initial search value (musician's instr. to start), tmpResult is the keypair to the box.  If tmpResult = finalCrit then we are done, if not tmpResult = tmpCrit
  kick off another search, this time searching tmpCrit and upon next search, tmpResult = keypair to box */
  for(i = 0; i < musicians.length; i++){
    var finalCrit = musicians[i];
    var tmpCrit = musicians[i];
    var tmpResult;
    var chances = 5;
    for(c = 0; c < 5; c++){
      for(j = 0; j < boxPlusIns.length; j++){
        if(boxPlusIns[j][0] == tmpCrit){
          tmpResult = boxPlusIns[j][1];
          if(tmpResult==finalCrit){
            //Logger.log('*****Musician ' + musicians[i] + 's search criteria is ' + tmpCrit + ' saw instrument ' + tmpResult + ' and have found what he is looking for*****');
            successArr.push(tmpResult);
            break;
            }else{
              chances--;
              //Logger.log('Musician ' + musicians[i] + 's search criteria is ' + tmpCrit + ' saw instrument ' + tmpResult + ' and still have ' + chances + ' more chance');
              tmpCrit = boxPlusIns[j][1];
              break;
            }
          }
        }
      }
   }
  result = removeDuplicates(successArr);
  //Logger.log(result.length);
  if(result.length!=10){
    foundTen = false;
  }else{
    foundTen = true;
  }
  //Logger.log(result);
  //Logger.log(foundTen);
  return foundTen;
}

function runThousands(){
  var counter = 0;
  var results;
  var tenCounter = 0;
  while(counter<1000){
    results = main();
    if(results == true){
      tenCounter += 1;
    }
    //Logger.log(results);
    counter += 1;
  }
  Logger.log(tenCounter);
}
