fetch('exemple.txt')
  .then(response => response.text())
  .then(data => {
    // Faites quelque chose avec le contenu du fichier (data)
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });