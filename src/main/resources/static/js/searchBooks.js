const searchBtn = document.getElementById('searchBtn');
let keyword = document.getElementById('keyword');
let resultContainer = document.getElementById('result');
var pages = 1;

searchBtn.addEventListener('click', function(){
    resultContainer.innerHTML = '';
    listBooks(pages);
});

document.addEventListener('scroll', function() {
    if(window.pageYOffset >= resultContainer.clientHeight * 0.8){
        pages++;
        if(pages < 50){
            listBooks(pages);
        }
    }
});

function listBooks(){
    const keywordVal = document.getElementById('keyword').value;
    const Kakao_api_key = document.getElementById('Kakao_api_key').value;

    fetch('https://dapi.kakao.com/v3/search/book?query=' + keywordVal + '&page=' + pages, {
        headers: {
            'Authorization': Kakao_api_key
        }
    })
        .then((res) => res.json())
        .then((data) => {
            data.documents.forEach(function(data){
                const newElement = document.createElement('div');
                newElement.className = 'books';
                let contents = '';

                contents += "<p><img src='" + data.thumbnail + "'></p>";
                contents += "<p class='title'>" + data.title + "</p>";
                contents += "<p class='authors'>" + data.authors;
                if(data.translators.length){
                    contents += " / " + data.translators + "(번역)</p>";
                }else{
                    contents += "</p>";
                }
                contents += "<p class='contents'>" + data.contents.substr(0,100) + "</p>";
                contents += "<p class='publisher'>출판사: " + data.publisher + "</p>";
                contents += "<p class='datetime'>출판일자: " + data.datetime.substr(0,10) + "</p>";

                newElement.innerHTML = contents;
                newElement.addEventListener('click', function(){
                    const selected = {
                        'thumbnail' : data.thumbnail,
                        'title' : data.title,
                        'authors' : data.authors,
                        'translators' : data.translators,
                        'publisher' : data.publisher,
                        'datetime' : data.datetime.substr(0,10)
                    };
                    window.localStorage.setItem('selected', JSON.stringify(selected));
                    window.close();
                });
                resultContainer.appendChild(newElement);
                //console.log(data);
                //console.log(pages);
            });
        });
}
