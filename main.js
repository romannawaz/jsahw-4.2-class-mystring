class MyString {
    reverse(string) {
        if (typeof string == 'string')
            return string.split('').reverse().join('');
    }

    ucFirst(string) {
        if (typeof string == 'string')
            return string[0].toUpperCase() + string.slice(1);
    }

    ucWords(string) {
        if (typeof string == 'string')
            return string.split(' ').map(val => this.ucFirst(val)).join(' ');
    }
}

const str = new MyString();

console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));