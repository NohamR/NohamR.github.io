var counter = document.getElementById('conteur-de-vues')

const updateCounter = async () => {
    const data = await fetch('https://api.countapi.xyz/hit/nohamr-counter/visits-v1')
    const count = await data.json()
    console.log(count.value)
    document.getElementById("compteur-de-vues").innerHTML = count.value
    document.getElementById("compteur-de-vues").style.filter = 'blur(0)'
};

updateCounter();
