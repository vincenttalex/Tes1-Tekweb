$(document).ready(function() {	
    let cardCount = 1;

    function addCard() {
        let cardId = 'card-' + cardCount++;
        let randomImageUrl = `https://picsum.photos/200?random=${new Date().getTime()}`;
        let cardHtml = `
            <div class="col-md-4" id="${cardId}">
                <div class="card">
                    <img src="${randomImageUrl}" class="card-img-top" alt="Random Image">
                    <div class="card-body">
                        <h5 class="card-title">Image title here</h5>
                        <p class="card-text">Image description here ...</p>
                        <button class="btn btn-primary delete-card">Delete this card</button>
                    </div>
                </div>
            </div>`;
        $('#card-container').append(cardHtml);

        $('#' + cardId).find('.delete-card').click(function() {
            $('#' + cardId).remove();
        });
    }

    addCard();

    $('#newCardButton').click(function() {
        addCard();
    });

    $('#addCardButton').click(function() {
        let title = $('#cardTitle').val();
        let description = $('#cardDescription').val();

        if (title && description) {
            let lastCard = $('#card-container').children().last().find('.card-body');
            lastCard.find('.card-title').text(title);
            lastCard.find('.card-text').text(description);
        } else {
            alert('Please enter both a title and description.');
        }
    });
});
