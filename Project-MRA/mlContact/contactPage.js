var language = 'france'
const content = {
  en: {
      title: "Welcome!",
      message: "This is a simple language selector example."
  },
  es: {
      title: "¡Bienvenido!",
      message: "Este es un ejemplo simple de selector de idioma."
  },
  fr: {
      title: "Bienvenue!",
      message: "Ceci est un exemple simple de sélecteur de langue."
  },
  de: {
      title: "Willkommen!",
      message: "Dies ist ein einfaches Beispiel für einen Sprachwähler."
  }
};

document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', (e) => {
      const language = e.target.getAttribute('data-lang');
      document.querySelector('#content h1').textContent = content[language].title;
      document.querySelector('#content p').textContent = content[language].message;
  });
});
if (language === 'english') {
    console.log(content.en.title)
} else if (language === 'german') {
    console.log(content.de.title)
} else if (language === 'spanish') {
    console.log(content.es.title)
} else if (language === 'france') {
    console.log(content.fr.title)
}

