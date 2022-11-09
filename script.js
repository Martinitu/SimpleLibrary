let myLibrary = [
    new Book("Cuerpos in Edad, mentes sin Tiempo", "Dr. Deepak Chopra", 473, "read"),
    new Book("Rasta and Resistance", "Horace Campbell", 234, "read")
   
]
console.log(myLibrary)

document.querySelector(".addBook").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})
document.querySelector(".popup .closeButton").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by" + author + ", " + pages + ", " + read 
       
    }
}



function addBookToLibrary() {
    
    new Book(title, author, pages, read)

  
  }