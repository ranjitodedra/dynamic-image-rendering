let imageEl = document.getElementById('images')
let captions = [
    "ranjit odedra Freshers Party",
    "ranjit odedra Home January",
    "ranjit odedra Home January",
    "ranjit odedra Home January",
    "ranjit odedra Hostel February",
    "ranjit odedra Porbandar March",
    "ranjit odedra Porbandar Beach March",
    "ranjit odedra Porbandar March",
    "ranjit odedra Anand April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Anand june",
    "ranjit odedra Anand june",
    "ranjit odedra Anand july",
    "ranjit odedra Anand july",
    "ranjit odedra Porbandar Beach july",
    "ranjit odedra Freshers Party",
    "ranjit odedra Freshers Party",
    "ranjit odedra Freshers Party",
    "ranjit odedra SGP presentation",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar Beach March",
    "ranjit odedra Porbandar Beach March",
    "ranjit odedra Teachers Day",
    "ranjit odedra No way home",
    "ranjit odedra college",
    "ranjit odedra college",
    "ranjit odedra college",
    "ranjit odedra college",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar Beach April",
    "ranjit odedra Freshers Party",
]

let captions2 = [
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Porbandar April",
    "ranjit odedra Anand march",
    "ranjit odedra Porbandar April",

]

let image = ""

for (let index = 0; index <= 32; index++) {
    image += `<div class="image-el${index}">
                <img height="200px" src = "/asset/ranjitodedra${index}.jpg" alt="ranjitodedra">
                <figcaption>${captions[index]}</figcaption>
               </div>
              `
    imageEl.innerHTML = image
}
for (let index = 0; index <= 5; index++) {
    image += `<div class="image-el${index}">
               <img height="200px" src = "/asset/ranjitodedra${index}.jpeg" alt="ranjitodedra">
               <figcaption>${captions2[index]}</figcaption>
              </div>
             `
    imageEl.innerHTML = image
}

