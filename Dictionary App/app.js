window.addEventListener("load", function(){
    let filter = document.getElementById("searchBox");
 
    filter.addEventListener("keyup", function(){
        var search = this.value.toLowerCase();
        var all = document.querySelectorAll('#list li');
 
        for(let i of all) {
            let item = i.innerHTML.toLowerCase();
            if(item.indexOf(search) === -1) {
                i.classList.add("hide");
            } else {
                i.classList.remove("hide");
            }
        }
    });
 });
 