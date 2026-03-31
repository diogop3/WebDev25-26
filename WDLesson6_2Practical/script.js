function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  output.innerHTML = `<div class="card">
  <img src="${school.image}">
  <div class="card-body">
    <h3 class="card-title">${school.name}</h3>
    <p class="card-text">${school.address}</p>
  </div>
 </div>`;

}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Bad Bunny",
    "image":"https://fortune.com/img-assets/wp-content/uploads/2025/09/GettyImages-2232285464-e1759158259117.jpg",
    "album":"DeBÍ TiRAR MáS FOToS",
    "url":"https://www.youtube.com/@BadBunnyPR"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  output.innerHTML = `<div class="card">
  <a href="${artist.url}" target="_blank">
    <img src="${artist.image}">
  </a>
  <div class="card-body">
    <h3 class="card-title">${artist.name}</h3>
    <p class="card-text">${artist.album}</p>
  </div>
</div>`;

}


