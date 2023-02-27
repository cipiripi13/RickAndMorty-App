
var row = document.querySelector('.d-flex');
var container = document.querySelectorAll('.container');
console.log(container);
//console.log(row);


  $.get( "https://rickandmortyapi.com/api/character", function( data ) {
    console.log ( data ); 
//prikazujemo sliku
//lepimo na div car
//dajemo slici klasu "card-img-top"

for(var i=0; i<4; i++){
    var image = document.createElement('img');
    var div = document.createElement('div');
    var divBody = document.createElement('div');
    divBody.setAttribute('class', 'card-body');
    var h5 = document.createElement('h5');
    h5.textContent = data.results[i].name;
    h5.setAttribute('class', 'card-title');
    divBody.appendChild(h5);

    var button = document.createElement('a');
    button.setAttribute('href', '#');
    button.setAttribute('class', 'btn btn-primary' )
    button.textContent = 'Like'
    image.setAttribute('src', data.results[i].image);
    image.setAttribute('class', "card-img" );
    image.setAttribute('id', data.results[i].id )
     image.style.width = '200px'
    div.setAttribute('class', "card" );
    div.setAttribute('id', data.results[i].id )
    div.appendChild(image);
    div.appendChild(divBody);

    div.appendChild(button);
    
    row.appendChild(div);
}

});


function onclick(event){
    $.get( "https://rickandmortyapi.com/api/character", function( data ) {
    console.log ( data ); 
    console.log(event.target);
    var id = event.target.id;
    if(event.target.classList.contains('card-img')){
        console.log(event.target.id);
        var id = event.target.id;
    }

    $.get( `https://rickandmortyapi.com/api/character/${id}`, function(data){
        console.log(data);
        container[0].textContent = '';
        container[1].textContent = '';
    

        singleImg = document.createElement('img');
        singleImg.setAttribute('src', data.image);
        container[1].appendChild(singleImg);

        singleDiv = document.createElement('div');
        var h3 = document.createElement('h3');
        h3.textContent = data.name;

        singleDiv.appendChild(h3);
        container[1].appendChild(singleDiv);
        
    })


})

}

row.addEventListener('click', onclick);

var logo = document.querySelector('.navbar-brand');

function refresh (){
    if(logo){
        location.reload();
    }
}

logo.addEventListener('click', refresh)