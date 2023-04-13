// async function handleGetIssLocationClick() {
//   const locationParagraph = document.getElementById('issLocation');
//   const issLocationUrl = 'http://api.open-notify.org/iss-now.json';

//   const response = await fetch(issLocationUrl, {
//     method: 'GET',
//     headers: {},
//   });
//   const jsonData = await response.json();

//   locationParagraph.innerHTML =
//     jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
// }

// async function handleGetCorporatePhrase() {
//   const phraseParagraph = document.getElementById('corporatePhrase');
//   const corporatePhraseUrl = 'https://corporatebs-generator.sameerkumar.website/';

//   const response = await fetch(corporatePhraseUrl, {
//     method: 'GET',
//     headers: {},
//   });

//   const phrase = await response.json();

//   phraseParagraph.textContent = phrase.phrase;
// }

async function handleGetRequest(value) {
  const locationParagraph = document.getElementById('issLocation');
  const phraseParagraph = document.getElementById('corporatePhrase');

  const requestUrls = {
    space: 'http://api.open-notify.org/iss-now.json',
    corporate: 'https://corporatebs-generator.sameerkumar.website/',
  }

  let responseUrl;

  if (value === "space") {
    responseUrl = requestUrls.space;
  } else {
    responseUrl = requestUrls.corporate;
  }

  const response = await fetch(responseUrl, {
    method: 'GET',
    headers: {},
  });

  const jsonData = await response.json();

  if (value === "space") {
    locationParagraph.innerHTML =
    jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
  } else {
    phraseParagraph.textContent = jsonData.phrase;
  }

}

async function getApi() {
  const response = await fetch(requested, {
    method: 'GET',
    headers: {},
  });

  const jsonData = await response.json();

  if (selectedRadioButton.value === "space") {
    responseParagraph.textContent =
    jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
  } else {
    responseParagraph.textContent = jsonData.phrase;
  }
}

function runApp() {
  const responseParagraph = document.getElementById('responseParagraph');
  

  const requestUrls = {
    space: 'http://api.open-notify.org/iss-now.json',
    corporate: 'https://corporatebs-generator.sameerkumar.website/',
  };


  const submitButton = document.querySelector("#formButton");

  submitButton.addEventListener('click', async () => {
    let selectedRadioButton = document.querySelector('input[name=requestType]:checked').value;

    let requested = requestUrls[selectedRadioButton];

    const response = await fetch(requested, {
      method: 'GET',
      headers: {},
    });
  
    const jsonData = await response.json();
  
    if (selectedRadioButton === "space") {
      responseParagraph.textContent =
      jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
    } else {
      responseParagraph.textContent = jsonData.phrase;
    }
  });
}

window.addEventListener('load', runApp);
