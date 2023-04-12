async function handleGetIssLocationClick() {
  const locationParagraph = document.getElementById('issLocation');
  const issLocationUrl = 'http://api.open-notify.org/iss-now.json';

  const response = await fetch(issLocationUrl, {
    method: 'GET',
    headers: {},
  });
  const jsonData = await response.json();

  locationParagraph.innerHTML =
    jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
}

async function handleGetCorporatePhrase() {
  const phraseParagraph = document.getElementById('corporatePhrase');
  const corporatePhraseUrl = 'https://corporatebs-generator.sameerkumar.website/';

  const response = await fetch(corporatePhraseUrl, {
    method: 'GET',
    headers: {},
  });

  const phrase = await response.json();

  phraseParagraph.textContent = phrase.phrase;
}
