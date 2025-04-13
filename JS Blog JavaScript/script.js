document.addEventListener("DOMContentLoaded", function () {
    const urlToShare = 'https://efmelnik.github.io/cooking-delights/index.html';

    function shareOnFacebook() {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }

    function shareOnTwitter() {
        const textToShare = 'Check Out The Cooking Delights Website!';
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }

    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");

    if (shareFacebookButton) {
        shareFacebookButton.addEventListener("click", shareOnFacebook);
    }

    if (shareTwitterButton) {
        shareTwitterButton.addEventListener("click", shareOnTwitter);
    }
});
