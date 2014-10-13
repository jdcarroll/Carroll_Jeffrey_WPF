document.querySelector('grid').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG'){

        var myElement = document.createElement('div');
        myElement.className = 'preview';
    }
});