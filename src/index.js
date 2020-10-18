module.exports = function toReadable (number) {

  let defNum = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    0 : "zero"
  };

  let defNums = {
    0 : "ten ",
    1 : "eleven ",
    2 : "twelve ",
    3 : "thirteen ",
    4 : "fourteen",
    5 : "fifteen ",
    6 : "sixteen",
    7 : "seventeen",
    8 : "eighteen ",
    9 : "nineteen"
  }; 

  let defNums2 = {
    2 : "twenty ",
    3 : "thirty ",
    4 : "forty ",
    5 : "fifty ",
    8 : "eighty "
  };

  let resNNN = '';
  let resNN = '';
  let resN = '';

  let numberStr = number.toString();

  if (numberStr.length == 1) {
    for (let key in defNum) {
      if (numberStr[0] == key) {
        resN = defNum[key];
      }
    }
  }

  if (numberStr.length == 2) {
    for (let key in defNum) {
      if (numberStr[0] == key && key == 1) {
        for (let j in defNums) {
          if (numberStr[1] == j) {
            resNN = defNums[j];
          }
            // resNN = defNum[j] + 'teen ';
        }
      } else if (numberStr[0] == key && (key == 2 || key == 3 || key == 4 || key == 5 || key == 8)) {
        for (let i in defNums2) {
          if (numberStr[0] == i) {
            resNN = defNums2[i];
          }
        }
      } else if (numberStr[0] == key && key != 0) {
        resNN = defNum[key] + "ty ";
      }
    }
    for (let key in defNum) {
      if (numberStr[1] == key && numberStr[0] != 1  && key != 0) {
        resN = defNum[key];
      }
    }
  }

  if (numberStr.length == 3) {
    for (let key in defNum) {
      if (numberStr[0] == key && key != 0) {
        resNNN = defNum[key] + ' hundred ';
      }
    for (let key in defNum) {
      if (numberStr[1] == key && key == 1) {
        for (let j in defNums) {
          if (numberStr[2] == j) {
            resNN = defNums[j];
          } 
        }
      } else if (numberStr[1] == key && (key == 2 || key == 3 || key == 4 || key == 5 || key == 8)) {
        for (let i in defNums2) {
          if (numberStr[1] == i) {
            resNN = defNums2[i];
          }
        }
      } else if (numberStr[1] == key && key != 0) {
        resNN = defNum[key] + "ty ";
      }
    }
    for (let key in defNum) {
      if (numberStr[2] == key && numberStr[1] != 1 && key != 0) {
        resN = defNum[key];
      }
    }
  }
  }
  let result = resNNN+resNN+resN;
    if (result[result.length-1] == ' ') {
      return result.slice(0, -1);
    }
    return result;

  } 
