/* Game Page Interactive Actions */
function toggleLike(btn) {
    btn.classList.toggle('active');
    const dislike = document.getElementById('dislikeBtn');
    if (dislike) dislike.classList.remove('active');
}

function toggleDislike(btn) {
    btn.classList.toggle('active');
    const like = document.getElementById('likeBtn');
    if (like) like.classList.remove('active');
}

function shareGame() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).catch(() => {});
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Game link copied to clipboard!');
            });
        } else {
            prompt('Copy game link:', window.location.href);
        }
    }
}

function openFullScreen() {
    let game = document.getElementById("iframehtml5");
    if (!game) return;
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
        game.msRequestFullscreen();
    }
}
