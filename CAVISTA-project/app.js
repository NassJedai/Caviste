const list = [];
function descriptionBottle(element) {
        const imgBottle = document.getElementsByTagName('img')[1];
        const nameTitle = document.getElementById("nameWine"); 
        const grape = document.getElementById("grape");
        const country = document.getElementById("country");
        const region = document.getElementById("region");
        const year = document.getElementById("year");
        const capacity = document.getElementById("capacité");
        const color = document.getElementById("color");
        const price = document.getElementById("price");
        imgBottle.src = 'images/pics/'+element.picture;
        nameTitle.innerHTML = element.name;
        grape.innerHTML = '<em>Grapes</em>: '+element.grapes;
        country.innerHTML = '<em>Pays</em>: '+element.country;
        region.innerHTML = '<em>Region</em>: '+element.region;
        year.innerHTML = '<em>Année</em>: '+element.year;
        capacity.innerHTML = '<em>capacité</em>: '+element.capacity;
        color.innerHTML = '<em>color</em>: '+element.color;
        price.innerHTML = '<em>price</em>: '+element.price+" €";
}

const xhr = new XMLHttpRequest();


xhr.onload = function (){
    const doc = this.responseText;
    const data = JSON.parse(doc);

    for(let i = 0; i < data.length;i++){
        bottle = data[i];
        list.push(bottle);
    }
    
    for(let i of list){
        const liste = document.getElementById('liste');
        liste.innerHTML += '<li id="'+i.id+'">'+i.name+'</li>';
        }

        let items = document.querySelectorAll('li');

        for(let item of items){ 
            item.onclick = function () {
                    //console.log(this);
                    for(let find of list){
                        if (find.name.indexOf(this.innerHTML) != -1) {
                            //console.log(find.name);
                            descriptionBottle(find);
                        }
                    }
                }
            }
        const inputSearch = document.querySelector('input#searchBar');
        const btnSearch = document.getElementById('btnSearch');
           
                btnSearch.onclick = function(){
                    liste.innerHTML = '';
                for(let i of list){
                    if (i.name.indexOf((inputSearch.value).toUpperCase()) != -1) {
                        liste.innerHTML += '<li id="'+i.id+'">'+i.name+'</li>';
                    }
                    let items = document.querySelectorAll('li');

                    for(let item of items){ 
                        item.onclick = function () {
                            for(let find of list){
                                if (find.name.indexOf(this.innerHTML) != -1) {
                                    //console.log(find.name);
                                    descriptionBottle(find);                                    
                                }
                            }
                            }
                        }
                }
            }
}

xhr.open('GET','https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines',true);
xhr.send();
