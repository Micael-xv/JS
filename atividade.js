let vet = [2, 7];
// console.log(vet);
vet.push(9);
// console.log(vet);
vet.splice(1, 0, '+');
// console.log(vet);
vet.splice(3, 0, '=');
console.log(vet.join(' '));
