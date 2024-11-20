export function showCards(data) {
	const container = document.querySelector('.cards');
  container.innerHTML = '';

	data.sort(() => Math.random() - 0.5);

	data.map((info) => {
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
