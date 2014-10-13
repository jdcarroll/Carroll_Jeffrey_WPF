/**
 * Created by Jeff Carroll on 9/27/14.
 */


document.getElementById('grid').addEventListener('click', function(e) {

    if (e.target.tagName === 'IMG') {
        var removeTarget = e.target.parentNode;
        removeTarget.parentNode.removeChild(removeTarget);
    }

}, false);