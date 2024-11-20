
const container = document.querySelector('.cards');

export function filter(data, text) {

  const search = data.filter((info) =>
    Object.values(info).some((value) =>
      String(value).toLowerCase().includes(text)
    )
  );

  container.innerHTML = '';

  search.map((info) => {
    container.innerHTML += `
      <div class="card">
        <img src="https://avrilstihler.github.io/Obras-Favoritas/imagens/${info.image}" alt="${info.alt}" />
        <div class="info">
          <h3>${info.title}</h3>
          <p>${info.description}</p>
        </div>
      </div>
    `;
  });
}
