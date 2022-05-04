
    const list = [];
    const xhr = new XMLHttpRequest();


    xhr.onload = function (){
        const doc = this.responseText;
        const data = JSON.parse(doc);

        for(let i = 0; i < data.length;i++){
            bottle = data[i];
            list.push(bottle);
        }

        const liste = document.getElementById('liste');
       
        for(let i of list){
            liste.innerHTML += '<li>'+i.name+'</li>';
        }
         

            const inputSearch = document.querySelector('input#searchBar');
            const btnSearch = document.getElementById('btnSearch');
               
                    btnSearch.onclick = function(){
                        liste.innerHTML = '';
                       
                    for(let i of list){
                        if (i.name.indexOf((inputSearch.value).toUpperCase()) != -1) {
                            liste.innerHTML += '<li>'+i.name+'</li>';
                        }
                    } 
                }
    }
    
    xhr.open('GET','https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines',true);
    xhr.send();
