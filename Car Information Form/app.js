// Submit button ko HTML se select kar rahe hain
let btn = document.querySelector("#submitBtn");

// Car name ka input field le rahe hain
let carName = document.querySelector("#name");

// Car model ka input field le rahe hain
let carModel = document.querySelector("#model");

// Car engine ka input field le rahe hain
let carEngine = document.querySelector("#engine");

// Car image ka input field le rahe hain (image URL)
let carImage = document.querySelector("#image");

// Car transmission ka input field le rahe hain
let carTransmission = document.querySelector("#transmission");

// Jab user submit button par click karega
btn.addEventListener("click", function () {
  // Ek khaali array bana rahe hain jisme car details store hongi
  let items = [];

  // Car ka naam array mein daal rahe hain
  items.push(carName.value);

  // Car ka model array mein daal rahe hain
  items.push(carModel.value);

  // Car ka engine type array mein daal rahe hain
  items.push(carEngine.value);

  // Car ki image ka URL array mein daal rahe hain
  items.push(carImage.value);

  // Car ka transmission type array mein daal rahe hain
  items.push(carTransmission.value);

  // Ab passValue function ko call kar rahe hain, aur array ke saare values bhej rahe hain
  passValue(items[0], items[1], items[2], items[3], items[4]);
});

// Ye function car ki values ko accept karega aur card create karega
function passValue(a, b, c, d, e) {
  // Ek constructor function bana rahe hain jisse nayi car object banegi
  function Car(name, model, engine, image, transmission) {
    // Name ko object ke carname property mein daal rahe hain
    this.carname = name;

    // Model ko carmodel property mein daal rahe hain
    this.carmodel = model;

    // Engine ko carengine property mein daal rahe hain
    this.carengine = engine;

    // Image URL ko carimage property mein daal rahe hain
    this.carimage = image;

    // Transmission ko cartransmission property mein daal rahe hain
    this.cartransmission = transmission;
  }

  // Ab hum ek naya car object bana rahe hain is constructor se
  let newCar = new Car(a, b, c, d, e);

  // Console mein check karne ke liye car object print kar rahe hain
  console.log(newCar);

  // Us HTML element ko le rahe hain jisme cards show honge
  let cardsDiv = document.querySelector("#cards");

  // Ek naya div element bana rahe hain jisme ek car ka card banega
  let cardDiv = document.createElement("div");

  // Us div mein Bootstrap ka 'card' class add kar rahe hain
  cardDiv.classList.add("card");

  // Card ke andar HTML content daal rahe hain: image, name, model, engine
  cardDiv.innerHTML = `
    <img class="card-img-top" src="${carImage.value}" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">${carName.value}</h5>

      <p class="card-text">Model : ${carModel.value}</p> 
      <p class="card-text"> Engine : ${carEngine.value}</p>
      <p class="card-text">Transmision : ${carTransmission.value}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;

  // Card ko actual page mein #cards div ke andar add kar rahe hain
  cardsDiv.appendChild(cardDiv);
}


