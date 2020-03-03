function reverseVowels(s) {
    let i = 0;
    let j = s.length - 1;

    let arr = s.split("")
    let vowels = {
        a : true,
        e : true,
        i : true,
        o : true,
        u : true
    }

    while (i < j) {
        while (!vowels[arr[i].toLowerCase()] && i < j) {
            i++
        }
// test
        while (!vowels[arr[j].toLowerCase()] && i < j) {
            j--
        }

        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;

        i++;
        j--;
    }

    return arr.join("");
}

console.log(reverseVowels('hello')) //=> 'holle'