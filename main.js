const gridBoxes = document.querySelectorAll('.grid-item');
const p = document.querySelector('p');

p.textContent = 'kolej o';
let xs = [];
let os = [];
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




let checker = (arr, target) => target.every(v => arr.includes(v));

// const containsAlly = ys.every(element => {
//     return wins[i].includes(element);
// });


Array.from(gridBoxes).forEach(element => {
    element.addEventListener('click', (e) => {
        if (p.textContent === 'kolej o') {
            e.target.textContent = 'o';
            p.textContent = 'kolej x';
            os.push(parseInt(e.target.id));
            for (let i =0; i<8; i++) {
                if(checker(os, wins[i])) {
                    console.log('zwycięża o')
                } else {
                    break;
                }
            }

       
          
        } else {
            e.target.textContent = 'x';
            p.textContent = 'kolej o';
            xs.push(parseInt(e.target.id));
            for (let i =0; i<8; i++) {
                if(checker(xs, wins[i])) {
                    console.log('zwycięża x')
                } else {
                    break;
                }
            }
        }

    })
});