// GLOBALES

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const frase = document.querySelector(".card__frase");
const nuevabtn = document.querySelector("#nuevabtn");
const twitterbtn = document.querySelector("#twitterbtn");

// EVENT LISTENER

nuevabtn.addEventListener("click", generarNuevaFrase);
twitterbtn.addEventListener("click", twittearFrase);
document.addEventListener("DOMContentLoaded", generarNuevaFrase);

// FUNCIONES

// -----------------------------------------------------
async function generarNuevaFrase() {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();

    let fraseTraducida = await traducirFrase(json.message);

    frase.innerHTML = fraseTraducida;
  } catch (err) {
    alert("OO Algo ha fallado");
  }
}
// -----------------------------------------------------

async function traducirFrase(frase) {
  const endpointDeepL = "https://api-free.deepl.com/v2/translate";
  const tokenDeepL = "7b9a1da9-dc57-0a50-6355-28701d5856ab:fx";
  const URL = `${endpointDeepL}?auth_key=${tokenDeepL}&text=${frase}&target_lang=ES`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json.translations[0].text;
  } catch (err) {
    alert("OO Algo ha fallado :(");
  }
}

// -----------------------------------------------------

function twittearFrase(frase) {
  return;
}
