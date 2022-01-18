console.log("this is notes app")
showNotes()

//if user add a note add it to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);

    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    showNotes()

});

// to add notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach((element, index) => {

        html += `<div class="card noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note-${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id=${index} onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`

    });
    let notesElm= document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show ! ADD YOUR NOTES`
    }
}


function deleteNotes(index){

    let notes=localStorage.getItem('notes');
    if(notes===null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}

let search=document.getElementById('searchTxt');

search.addEventListener('input',function(){
    // console.log('input event fired')
    let inputVal=search.value.toLowerCase();
    // console.log("input event fired!"+inputVal);
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach((element)=>{
        let cardTxt=element.getElementsByTagName('p')[0].innerHTML;
        if(cardTxt.includes(inputVal)){
            element.style.display='block';
            
        }else{
            element.style.display='none';
        }
        
    })


});
