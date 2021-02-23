const fs = require("fs");
const { promisify } = require("util");

function question1() {
    const readFileAsync = promisify(fs.readFile);
    readFileAsync('./santa.txt')
        .then(data => { // file buffer, UTF-8
            const directions = data.toString('utf-8').split('');
            const answer = directions.reduce((acc, currentVal) => {
                if (currentVal === '(') {
                    return acc + 1;
                } else if (currentVal === ')') {
                    return acc - 1;
                }
            }, 0);
            console.log('floor:', answer)
        })
        .catch(console.error);
}

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString('utf-8').split('');
        let accu = 0;
        let counter = 0;
        const basementEntered = directions.some((currentItem) => {
            if (currentItem === '(') {
                accu += 1;
            } else if (currentItem === ')') {
                accu -= 1;
            }
            counter++;
            return accu <= 0;
        });
        if (basementEntered) {
            console.log('basement entered at:', counter)
        } else  {
            console.log('basement never entered')
        }
    }); 
}

question1();
question2();