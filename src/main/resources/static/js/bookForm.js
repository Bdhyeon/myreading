const findBooks = document.getElementById('findBooks');
const submit = document.getElementById('submit');

findBooks.addEventListener('click', function(){
    //console.log(window.location.host);
    //console.log(window.location.protocol);
    const url = window.location.protocol +  "/searchBooks";
    window.open(url, "도서검색", "width=400, height=500, scrollbars=yes");
});

window.addEventListener('storage', function(){
    const selected = JSON.parse(localStorage.getItem('selected'));
    document.getElementById('thumbnail').innerHTML = "<img src='" + selected.thumbnail + "'>";
    document.getElementById('title').value = selected.title;
    document.getElementById('authors').value = selected.authors;
    document.getElementById('translators').value = selected.translators;
    document.getElementById('publisher').value = selected.publisher;
    document.getElementById('datetime').value = selected.datetime;
});

submit.addEventListener('click', function(e){
    e.preventDefault();
    const url = window.location.href;
    const review = {
        'thumbnail' : document.getElementById('thumbnail').innerHTML,
        'title': document.getElementById('title').value,
        'authors': document.getElementById('authors').value,
        'translators': document.getElementById('translators').value,
        'publisher': document.getElementById('publisher').value,
        'datetime': document.getElementById('datetime').value,
        'star': document.querySelector('select').value,
        'review': document.getElementById('review').value,
        'reviewtime': document.querySelector('#year').value + '-'
                    + document.querySelector('#month').value + '-'
                    + document.querySelector('#date').value
    }

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    };

    fetch(url, option).then(() => {
        console.log("전송 성공");
    });
});