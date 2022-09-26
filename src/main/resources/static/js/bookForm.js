const findBooks = document.getElementById('findBooks');

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
