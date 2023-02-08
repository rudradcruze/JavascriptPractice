const fiboNacchi = [0, 1];

for(let i=2; i<= 25; i++) {
    fiboNacchi[i] = fiboNacchi[i-1] + fiboNacchi[i-2];
}

console.log(fiboNacchi);