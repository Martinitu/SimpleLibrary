let myLibrary = [
  //  new Book("Cuerpos in Edad, mentes sin Tiempo", "Dr. Deepak Chopra", 473, "read"),
   //  new Book("Rasta and Resistance", "Horace Campbell", 234, "read")
   
]



document.querySelector(".addBook").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})
document.querySelector(".popup .closeButton").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})




class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

  }
   /* this.info = function(){
        let info = title + " by" + author + ", " + pages + ", " + read ;
        return info;
    }*/
}



function addBookToLibrary(title, author, pages, read) {
    
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    displayBooksOnPage()
   
     
  
  }
  //displayBooksOnPage()
  function displayBooksOnPage() {
      let books = document.querySelector(".books");
      let removeDivs = document.querySelectorAll(".card");
      for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
      } 
      let index = 0
      let secondIndex = 0
    myLibrary.forEach(myLibrarys => {
        let card = document.createElement('div');
        card.classList.add("card")
        books.appendChild(card)
      

     

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "remove from library"
        removeButton.dataset.linkedArray = index;
        index++;
        card.appendChild(removeButton)
        removeButton.addEventListener("click", removeBook)
        
        function removeBook(){
          let bookToRemove = removeButton.dataset.linkedArray;
         
          myLibrary.splice(parseInt(bookToRemove), 1);
          
          card.remove();
          displayBooksOnPage();
        }

        let changeReadButton = document.createElement("button")
        changeReadButton.classList.add("changeRead");
        changeReadButton.textContent = "Change read status"
        
        changeReadButton.dataset.linkedArray = secondIndex;
        secondIndex++;
  
        card.appendChild(changeReadButton)
       
        changeReadButton.addEventListener("click", changeReadStatus)

        function changeReadStatus() {
          let bookToRetrieve = changeReadButton.dataset.linkedArray;
          
          Book.prototype = Object.create(Book.prototype);
          console.log(myLibrary[parseInt(bookToRetrieve)].read)
        
          
          const togleBook = new Book();
         
          if((myLibrary[parseInt(bookToRetrieve)].read) == "read") {
              togleBook.read = "not read";
              
              myLibrary[parseInt(bookToRetrieve)].read = togleBook.read;
          } else { 
          togleBook.read = "read";
          myLibrary[parseInt(bookToRetrieve)].read = togleBook.read;
        }
        displayBooksOnPage();
        }

        for (let key in myLibrarys) {
            let para = document.createElement('p');
            
            para.textContent = key +": " + myLibrarys[key];
            card.appendChild(para)
            

        }
        
    })
    resetForm()
   //myLibrary.pop();
  }
  

  let submitBook = document.querySelector(".submitBook")

  
 
      
  submitBook.addEventListener("click", intakeFormData, );

  function resetForm() {
    let  form = document.querySelector("#formReset");
    form.reset()

  }
  

  function intakeFormData () {
      let title = document.getElementById("title").value
      let author = document.getElementById("author").value
      let pages = document.getElementById("pages").value
      let read = document.getElementById("read").checked
      
      let readDisplay =  read === true ? "read" : "Not read";
     
      event.preventDefault();
      //if (title === "" ||author === "" || pages || "") {
      //    return;
     // } else{
      
      addBookToLibrary(title, author, pages, readDisplay)
     
    //  }
  }

  
  