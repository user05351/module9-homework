
const button = document.querySelector('button');

const useRequest = (height, width, cb) => {
    fetch(`https://picsum.photos/${height}/${width}`)
    .then(response => response)
    .then(json => {
        if(cb){
        cb(json.url);
    }
    })
};

function displayResult(jsonData){
    const cardBlock = `
    <div class="card">
    <img
    src = "${jsonData}"
    class = "card-image">
    </div>
`;

    result.innerHTML = cardBlock;
};

button.addEventListener('click', ()=>{
    const topInputValue = Number(document.getElementById('top-input').value);
    const bottomInputValue = Number(document.getElementById('bottom-input').value);
    if(topInputValue >= 100 && topInputValue <= 300 && bottomInputValue >= 100 && bottomInputValue <= 300){
    useRequest(topInputValue, bottomInputValue, displayResult);
    } else {
    document.getElementById('result').textContent = 'одно из чисел вне диапазона от 100 до 300';
    }
});
