

$('<button>').text('Test').on('click', testFunctionality)
    .appendTo('body');

function insertBefore(subling, insertedElement){
    $(subling).prepend($(insertedElement));
}

function insertAfter(subling, insertedElement){
    $(subling).append($(insertedElement));
}

function testFunctionality(){
    var $mainDiv = $('<div>').text('First DIV').prependTo('body');

    var $newElement = $('<div>').text('Insert with insertBefore().');
    insertBefore($mainDiv, $newElement);

    $newElement = $('<div>').text('Insert with insertAfter().');
    insertBefore($mainDiv, $newElement);
}

