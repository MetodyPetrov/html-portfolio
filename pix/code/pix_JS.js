const button = document.getElementById("new image");
button.addEventListener('click', function(){
    if(document.getElementById("curr_image"))document.getElementById("curr_image").remove();
    if(document.getElementById("newline"))document.getElementById("newline").remove();
    const a = document.createElement('a');
    a.href = ("https://prnt.sc/" + ((Math.random() + 1).toString(36).substring(2,8)));
    a.textContent = "new image";
    a.id = "curr_image";
    a.target = "_blank";
    a.addEventListener('click', function(){
        a.textContent = "image";
    })
    const b = document.createElement('br');
    b.id = "newline";
    document.body.appendChild(b);
    document.body.appendChild(a);
});