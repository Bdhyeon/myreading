const searchBtn = document.getElementById('searchBtn');
let keyword = document.getElementById('keyword');
const resultContainer = document.getElementById('result');

searchBtn.onclick = function(){
    const keywordVal = keyword.value;
    const Kakao_api_key = document.getElementById('Kakao_api_key').value;

    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=" + keywordVal, {
        headers: {
            "Authorization": Kakao_api_key
        }
    })
        .then((res) => res.json())
        .then((data) => {
            data.documents.forEach(function(data){
                const newElement = document.createElement('div');
                newElement.className = "books";
                let contents = "";

                contents += "<p><img src='" + data.thumbnail + "'></p>";
                contents += "<p class='title'>" + data.title + "</p>";
                contents += "<p class='authors'>" + data.authors;
                if(data.translators.length){
                    contents += " / " + data.translators + "(번역)</p>";
                }else{
                    contents += "</p>";
                }
                contents += "<p class='contents'>" + data.contents + "</p>";
                contents += "<p class='publisher'>출판사: " + data.publisher + "</p>";
                contents += "<p class='datetime'>출판일자: " + data.datetime.substr(0,10) + "</p>";

                newElement.innerHTML = contents;
                resultContainer.appendChild(newElement);
                console.log(data);
            });
        });
};