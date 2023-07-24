function addBook(){
    bookid=bid.value
    bname=bn.value
    aname=an.value
    bdesc=desc.value
    if(bname in localStorage){
        alert("Book already added")
        window.location='index.html'
    }
    else{
        books={bookid,bname,aname,bdesc}
        localStorage.setItem(bname,JSON.stringify(books))
        alert("Book added succesfully")
        window.location='index.html'
    }
}
function search(){
    bname=bn1.value
    if(bname in localStorage){
        booksObj=JSON.parse(localStorage.getItem(bname))
        d1.innerHTML=`<p class="container card w-75 p-5" style="text-align:left;color:purple;">
                    Book Name: ${booksObj.bname}<br>
                    Author Name: ${booksObj.aname}<br>
                    Book Description: ${booksObj.bdesc}<br>
        </p>`
    }
    else{
        d1.innerHTML=`<p style="color:red">BOOK NOT FOUND!</p>`
    }
}
function searchPage(){
    window.location="searchbook.html"
}
function addPage(){
    window.location='index.html'
}