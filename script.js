// 1
/* function summ(num, num2, num3) {
  var s = 0;
  if (arguments.length == 0) return 0;
  for (var i = 0; i < arguments.length; i++) {
    if (i < 3) {
      s += arguments[i];
    }
  }
  return s;
}
console.log(summ(3, 10, 10)); */

// 2

/* function strSort(str1, str2, str3) {
    let arr = [str1, str2, str3];
    return arr.sort();
}
console.log(strSort("Сортировка", "успешно", "выполнена")); */

// 3
/* let text = prompt("Введите текст");
function letter(text, caption) {
  let name;
  while (name == undefined) {
    if (text && caption) {
      return `${text}. С уважением ${caption}`;
    } else if (caption === undefined) {
      name = prompt("Введите своё имя:");
      caption = name;
      return `${text}. С уважением ${caption}.`;
    }
  }
}
console.log(letter(text)); */

// 4

/* let exponentiation = (num, num2) => {return num && num2 ? num**num2 : num**2}

console.log(exponentiation(2)); */
