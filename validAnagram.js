function validAnagram(s, t) {
    let hash = {};

    s.split('').map(char => hash[char] = hash[char] ? hash[char] + 1 : 1);
    t.split('').map(char => hash[char] = hash[char] ? hash[char] - 1 : 1);
    return Object.keys(hash).every(char => hash[char] === 0);

}

console.log(validAnagram('anagram', 'nagaram'))

