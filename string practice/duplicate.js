const names = ['abul', 'kalam', 'harier', 'najj', 'rudra', 'raisha', 'alian', 'baccha', 'raisha', 'hati', 'abul', 'harier'];

function removeDuplicate(name) {
    const unique = [];
    for (let i = 0; i < name.length; i++) {
        if (unique.includes(name[i]) === false) {
            unique.push(name[i]);
        }
    }
    return unique;
}

const unique = removeDuplicate(names);
console.log(unique);