$(document).ready(function() {
    $('.square').attr('draggable', 'true');
    $('.square').attr('ondragstart', 'drag(event)');
    
    $('.square').attr('ondrop', 'drop(event)');
    $('.square').attr('ondragover', 'allowDrop(event)');    
})

function allowDrop(ev) {
    ev.preventDefault();
    //console.log('allowDrop' + ev);
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log('drop' + ev);
    ev.preventDefault();
    console.log('piece ' + $(ev.target).attr('data-piece'));
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
}