document.addEventListener('DOMContentLoaded', () => {
    const memeCoinsDisplay = document.getElementById('memeCoins');
    let memeCoins = parseInt(localStorage.getItem('memeCoins')) || 0;
    memeCoinsDisplay.textContent = memeCoins;

    const updateMemeCoins = (amount) => {
        memeCoins += amount;
        localStorage.setItem('memeCoins', memeCoins);
        memeCoinsDisplay.textContent = memeCoins;
    };

    const completeQuestButtons = document.querySelectorAll('.complete-quest-button');
    completeQuestButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reward = parseInt(button.parentElement.getAttribute('data-reward'));
            updateMemeCoins(reward);
            button.disabled = true;
            button.textContent = 'Completed';
        });
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemPrice = parseInt(button.parentElement.getAttribute('data-price'));
            if (memeCoins >= itemPrice) {
                updateMemeCoins(-itemPrice);
                alert('Purchase successful!');
            } else {
                alert('Not enough Meme Coins!');
            }
        });
    });
});
