const pass = ['dfg', 'fhgkeydn', 'dfkjGkj8l', '*sdkgfjkKjl8',
  'jjsfljslfjsldfjlsfjlsdfjlfjsdflsdjflsdldjflsf;a', '&slfjl9jkjJ',
  '12345678901234567890123445678901234567890',
  '1234567890123456789O123456', '1234567890123456789@123456']
/** @param {string} input */
function checkPass(input) {
  if (input.length < 4) return false;
  if (input.length > 30) return false;
  let up = false;
  let num = false;

  const reg = /[a-zA-Zа-яА-Я]/g;

  for (let i = 0; i < input.length; i++) {
    /** @type {string} */
    const check = input[i];
    if (isNaN(parseInt(check))) { // string
      if (reg.test(check)) {
        if (check === check.toUpperCase()) up = true
      }
    } else { // число
      num = true;
    }
    if (up && num) {
      return true;
    }
  }
  return false;
}

pass.forEach((item, index) => {
  console.log(index, checkPass(item))
})

console.log('------------------')
let mathData = 'djhf117 gf4 h008dbsh79 hsfsd98 8783 hefs80 763 78 00 86r87bkfs';

function getNumbers(math) {
  const numArray = [];
  let numStr = '';
  for (let i = 0; i < math.length; i++) {
    if (math[i] === '0') {
      numArray.push(Number(math[i]))
      continue;
    }
    if (!isNaN(parseInt(math[i]))) {
      numStr += math[i]
    } else {
      //console.log(i, math[i], 'ItIsNotNumber', Number(math[i]), numStr, numStr.length)
      if (numStr.length) {
        //console.log(i, 'PUSH ostatok')
        numArray.push(Number(numStr));
        numStr = '';
      }
    }
  }
  return numArray;
}

console.log(getNumbers(mathData))

console.log(Number('0'), Number(' '), Number('-'));

const getAllNumbers = str => {
  const result = []

  str.split('').reduce((acc, curr, index) => { // дробим строку на массив и начинаем прогон
    if (Number(curr)) { // проверяем, что элемент является number или 0 (чтобы обойти falsey)
      if (index === str.length - 1) { // если у нас последний элемент строки, тогда пушим то, что имеем
        result.push(Number(acc += curr))
      }

      return acc ? acc += curr : curr // если acc не undefined, тогда плюсуем к нему взятый элемент, иначе установливаем значение аккумулятора
    }

    if (acc) { // если curr не является числом, тогда пушим готовый аккумулятор в result
      result.push(Number(acc))
    }

    if (curr === '0') { // предположительно ошибочная проверка
      result.push(Number(curr))
    }
  }, undefined) // инициализируем значение аккумулятора

  return result
}

console.log(getAllNumbers(mathData))


