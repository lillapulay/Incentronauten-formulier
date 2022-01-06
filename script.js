const submitData = () => {
  /* Targeting input fields and their values */
  const initials = document.getElementById('initials').value.toUpperCase();
  const infix = document.getElementById('infix').value;
  const lastname = document
    .getElementById('lastname')
    .value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  const postcode = document.getElementById('postcode').value;
  const number = document.getElementById('number').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;

  /* Logging values for testing */
  console.log(
    initials + infix + lastname + postcode + number + street + city + email
  );
};

/* Listening to postcode and number changes*/
const getAddress = () => {
  /* Getting the values of these fields for the dynamic url */
  const postcode = document.getElementById('postcode').value;
  const number = document.getElementById('number').value;

  /* Pulling data from the API */
  /* Used https://reqbin.com/ for setting up the request basics */
  const url = `https://postcode.tech/api/v1/postcode?postcode=${postcode}&number=${number}`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader(
    'Authorization',
    'Bearer 48942a4b-ae26-495b-bf66-fbe98d71626b'
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      /* Took a while to figure which method I need here */
      const data = JSON.parse(xhr.responseText);

      /* Logging values for testing */
      console.log(`postcode: ${postcode}, number: ${number}`);
      console.log(`street: ${data.street}, city: ${data.city}`);
      const street = document.getElementById('street');
      const city = document.getElementById('city');

      /* If street or city is undefined, don't write so in the input field */
      /* This could be finetuned into error messages */
      data.street === undefined
        ? (street.value = '')
        : (street.value = data.street);

      data.city === undefined ? (city.value = '') : (city.value = data.city);
    }
  };

  xhr.send();
};

/* SUBMIT DATA - doesn't work*/
const sendFormData = () => {
  var url = 'https://run.mocky.io/v3/c47de24c-d67b-40ac-a220-08fff5bdbf9d';

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  const initials = document.getElementById('initials').value.toUpperCase();
  const infix = document.getElementById('infix').value;
  const lastname = document
    .getElementById('lastname')
    .value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  const postcode = document.getElementById('postcode').value;
  const number = document.getElementById('number').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const data = `{
    "initials": ${initials},
    "infix": ${infix},
    "lastname": ${lastname},
    "postcode": ${postcode},
    "number": ${number},
    "street": ${street},
    "city": ${city},
    "email": ${email}
  }`;
  /* Testing */
  console.log(data);
  xhr.send(data);
};
