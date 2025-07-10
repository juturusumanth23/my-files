function shuffle(arr) {
    let a=[]
    while(arr.length) {
        let ran= Math.floor(Math.random()*arr.length)
        a.push(arr[ran])
        arr.splice(ran,1)
        
    }
    arr.push(...a)
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}