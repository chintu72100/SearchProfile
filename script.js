let input = document.querySelector("input");
let data = [
    {name: "Priya", src: "priya.jpeg"},
    {name: "Manas", src: "Manas.jpeg"},
    {name: "Diksha", src: "diksha.jpeg"},
    {name: "Farman", src: "Farman.jpeg"},
    {name: "Shweta", src: "Shweta.jpeg"},
    {name: "Abhijeet", src: "Abhijeet.jpeg"},
    {name: "Rupesh", src: "Rupesh.jpeg"},
    {name: "Chintu", src: "Chintu.jpeg"},
];

let person = "";
data.forEach(function (elem) {
    person += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`;
});



input.addEventListener("input", function(){
    let matching = data.filter(function(e){
        return e.name.startsWith(input.value);
    })
    let newUser = "";
    matching.forEach(function (elem) {
        newUser += `<div class="person">
            <div class="img">
                <img src="${elem.src}" alt="">
            </div>
            <h4>${elem.name}</h4>
        </div>`;
    });
    document.querySelector(".people").innerHTML = newUser;
})