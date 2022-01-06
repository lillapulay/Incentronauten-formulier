const submitData = () => {
  /* Targeting input fields and their values */
  const initials = document.getElementById('initials').value;
  const infix = document.getElementById('infix').value;
  const lastname = document.getElementById('lastname').value;
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
