const runApp = () => {
  //   let currentSelection = 'space';

  //   const selectCorporate = document.getElementById('corporate');
  //   selectCorporate.addEventListener('click', () => {
  //     currentSelection = 'corporate';
  //   });

  //   const selectSpace = document.getElementById('space');
  //   selectSpace.addEventListener('click', () => {
  //     currentSelection = 'space';
  //   });

  let currentSelection = document.querySelector(
    'input[name="chooseRequest"]:checked'
  ).value;

  console.log(currentSelection);

  let possibleURLs = {
    space: 'http://api.open-notify.org/iss-now.json',
    corporate: 'https://corporatebs-generator.sameerkumar.website/',
  };

  const form = document.getElementById('spaceOrBS');
  form.addEventListener('submit', () => {
    console.log(currentSelection);
    console.log(possibleURLs[currentSelection]);
    form.action = possibleURLs[currentSelection];
    form.method = 'GET';
    form.submit();
  });
};

window.addEventListener('load', runApp);
