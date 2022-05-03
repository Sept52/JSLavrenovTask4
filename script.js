// 1
/* function summ(num, num2, num3) {
    var s = 0;
    if(arguments.length==0) return 0;
    for(var i=0; i<arguments.length; i++){
        if (i < 3) {
            s += arguments[i];
        }
    }
    return s
  }
console.log(summ(3,10,10)); */

// 2 

/* function Sort(strs) {
    strs = ["сортировка", "добрый", "денёк"] 
    let a = ["а","б","в","г","д","е",'ё','ж','з','и','й','к',"л",'м','н','о','п','р','с','т','у','ф','х','ц',"ч",'ш','щ',"ъ",'ы','ь','э','ю','я'];
    let result = "";
        for (let elem of strs) {
            for (i=0; i<=a.length; i++) {
                for(j=0; j<=elem.length; j++) {
                    if (a[i] === elem.charAt(j)) {
                        result +=a[i]
                    }  
                }
            }
            result += " " 
        }
    return result;
}

console.log(Sort()); */

// 3
/* let text = prompt('Введите текст');
function letter (text, caption) {
    let name
    while (name == undefined) {
       
        if (text && caption) {
            return `${text}. С уважением ${caption}`
        } else if (caption === undefined) {
            name = prompt("Введите своё имя:")
            caption = name;
            return `${text}. С уважением ${caption}.`
        }
    }   
}
console.log(letter(text)); */

// 4

/* let exponentiation = (num, num2) => {return num && num2 ? num**num2 : num**2}

console.log(exponentiation(2)); */