const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function createCardElement({ name, link }) {
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

    const title = cardElement.querySelector(".card__title");
    title.textContent = name;

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = link;
    cardImage.alt = name;

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => cardElement.remove());

    return cardElement;
}

function renderCards(cards) {
    cards.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        cardList.append(cardElement);
    });
}

renderCards(initialCards);