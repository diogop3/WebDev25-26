let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.contributing_factor_vehicle_1}</h3>
                 <hr>
                 <p>${collision.on_street_name}</p>
                 <p>${collision.vehicle_type_code1}</p>
                 <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                 <hr>
                 <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                 <hr>
                 <p>Collision ID: ${collision.collision_id}</p>
              </div>`;    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByContributingFactor(){
  let output = document.getElementById("output");
  let contributingFactor = document.getElementById("contributingFactor").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.contributing_factor_vehicle_1 == contributingFactor || collision.contributing_factor_vehicle_2 == contributingFactor || collision.contributing_factor_vehicle_3 == contributingFactor || collision.contributing_factor_vehicle_4 == contributingFactor || collision.contributing_factor_vehicle_5 == contributingFactor){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByOnStreetName(){
  let output = document.getElementById("output");
  let onStreetName = document.getElementById("onStreetName").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == onStreetName){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByTypeVehicleInvolved(){
  let output = document.getElementById("output");
  let typeVehicleInvolved = document.getElementById("typeVehicleInvolved").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.vehicle_type_code1 == typeVehicleInvolved || collision.vehicle_type_code2 == typeVehicleInvolved || collision.vehicle_type_code3 == typeVehicleInvolved || collision.vehicle_type_code4 == typeVehicleInvolved || collision.vehicle_type_code5 == typeVehicleInvolved){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByPersonsKilled(){
  let output = document.getElementById("output");
  let personsKilled = document.getElementById("personsKilled").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.number_of_persons_killed == personsKilled){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByPersonsInjured(){
  let output = document.getElementById("output");
  let personsInjured = document.getElementById("personsInjured").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.number_of_persons_injured == personsInjured){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByCollisionId(){
  let output = document.getElementById("output");
  let collisionId = document.getElementById("collisionId").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.collision_id == collisionId){
      build += `<div class="fitted card">
                    <h3>${collision.contributing_factor_vehicle_1}</h3>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>Persons Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Persons Injured: ${collision.number_of_persons_injured}</p>
                    <hr>
                    <p>Collision ID: ${collision.collision_id}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

