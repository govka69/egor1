document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Лунтик", description: "Главный персонаж пришелец ." },
        { term: "Кузя ", description: "Лучший друг пришельца" },
        { term: "шнюк", description: "Сосед паук" },
        { term: "Червяк", description: "Главный ученый Корней " },
        { term: "Вупсень", description: "Брат пупсеня ." },
        { term: "Пупсень ", description: "Брат вупсеня ." },
        { term: "Фея", description: "Новый наркотический порошок" },
        { term: "Говка", description: "Водитель на мазуле" },
        { term: "Элина", description: "Возлюбленная Лунтика бабочка " },
        { term: "Клава", description: "Немая жаба ." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
