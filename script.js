let propertiesSection = document.querySelector(".properties");

async function getData(){
  const data = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
  data.json().then(properties => properties.forEach(property => {
    console.log(property)
    const card = document.createElement('div');
    card.classList.add('property');

    const img = document.createElement('img');
    img.src = property.photo;

    const type = document.createElement('p');
    type.classList.add('type');
    type.innerText = property.property_type;

    const name = document.createElement('p');
    name.classList.add('name');
    name.innerText = property.name;

    const price = document.createElement('div');
    price.innerHTML = `<strong>R$${property.price}</strong>/noite`;

    card.appendChild(img);
    card.appendChild(type);
    card.appendChild(name);
    card.appendChild(price);

    propertiesSection.appendChild(card);
  })
  )
}

getData();

