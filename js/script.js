var link = "";

document.getElementById("get-link-btn").addEventListener('click', () => {
    function getLink() {
        try {
            var formatLink = window.location.href;
            var personID = "";

            personID = document.getElementsByClassName('_1lrtjdg')[0].getAttribute('aria-describedby').replace("~comment-label","");
            formatLink = formatLink.replace("/submit","");
            formatLink += '/review/'
            return formatLink + personID;

        } catch (err) { return ""; }
    }

    chrome.tabs.executeScript({ code: '(' + getLink + ')()' }, function (result) { checkStatus(result); });
});

document.getElementById('try-again-btn').addEventListener('click', () => {
    hideError();
    showGetLink();
});

document.getElementById('copy-link-btn').addEventListener('click', () => {
    copyMyLink();
});

function checkStatus(result) {
    hideGetLink();
    link = result[0];

    if (link=="") { showError(); }
    else { showCopyLink(); }
}

function copyMyLink() {
    var sth = document.getElementById('link-here');
    sth.select();
    document.execCommand("copy");
    document.getElementById('copied').innerHTML = 'Copied successfully.';
}

function showGetLink() {
    document.getElementById('get-link-note').style.display = 'block';
    document.getElementById('get-link-note').style.opacity = 1;
    document.getElementById('get-link-note').style.transition = '0.2s ease';

    document.getElementById('get-link-btn').style.display = 'block';
    document.getElementById('get-link-btn').style.opacity = 1;
    document.getElementById('get-link-btn').style.transition = '0.2s ease';
}

function hideGetLink() {
    document.getElementById('get-link-note').style.display = 'none';
    document.getElementById('get-link-note').style.opacity = 0;
    document.getElementById('get-link-note').style.transition = '0.2s ease';

    document.getElementById('get-link-btn').style.display = 'none';
    document.getElementById('get-link-btn').style.opacity = 0;
    document.getElementById('get-link-btn').style.transition = '0.2s ease';
}

function showCopyLink() {
    document.getElementById('successful').style.display = 'block';
    document.getElementById('successful').style.opacity = 1;
    document.getElementById('successful').style.transition = '0.2s ease';

    document.getElementById('copy-link-btn').style.display = 'block';
    document.getElementById('copy-link-btn').style.opacity = 1;
    document.getElementById('copy-link-btn').style.transition = '0.2s ease';

    document.getElementById('link-here').value = link;
}

function hideCopyLink() {
    document.getElementById('successful').style.display = 'none';
    document.getElementById('successful').style.opacity = 0;
    document.getElementById('successful').style.transition = '0.2s ease';

    document.getElementById('copy-link-btn').style.display = 'none';
    document.getElementById('copy-link-btn').style.opacity = 0;
    document.getElementById('copy-link-btn').style.transition = '0.2s ease';
}

function showError() {
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').style.opacity = 1;
    document.getElementById('error').style.transition = '0.2s ease';

    document.getElementById('try-again-btn').style.display = 'block';
    document.getElementById('try-again-btn').style.opacity = 1;
    document.getElementById('try-again-btn').style.transition = '0.2s ease';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
    document.getElementById('error').style.opacity = 0;
    document.getElementById('error').style.transition = '0.2s ease';

    document.getElementById('try-again-btn').style.display = 'none';
    document.getElementById('try-again-btn').style.opacity = 0;
    document.getElementById('try-again-btn').style.transition = '0.2s ease';
}