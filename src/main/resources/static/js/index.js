const date = document.getElementsByClassName('date');

Array.from(date).forEach(function(e){
    e.addEventListener("click", function(){
          const url = window.location.href + "searchBooks";
          window.open(url, "도서검색", "width=400, height=500, scrollbars=yes");
    });
});