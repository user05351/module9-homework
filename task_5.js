
document.querySelector('button').onclick = clickOnButton;

function clickOnButton() {
    let pageNumber = Number(document.querySelector('.top-input').value);
    let limit = Number(document.querySelector('.bottom-input').value);
    console.log(pageNumber);
    console.log(limit);
    if (pageNumber < 1 || pageNumber > 10) {
        console.log('Номер страницы вне диапозона от 1 до 10');
        if (limit < 1 || limit > 10) {
            console.log('Лимит вне диапозона от 1 до 10');
        }
    } else {
        fetch(' https://picsum.photos/v2/${pageNumber}/${limit}',)
            .then((response) => {
                console.log('response', response);
                const result = response.json();
                console.log('result', result);
                return result

            })
            .then((data) => {
                console.log(data);
            })
            .catch(() => {
                console.log('an error ocurred')
            });
    }

    const img = document.createElement('img');
    img.innerHTML = result;
    const app = document.getElementById('app');
    document.body.insertBefore(img, app);
};
