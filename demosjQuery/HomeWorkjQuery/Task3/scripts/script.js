$('<button>').text('Test').on('click', testFunctionality).appendTo('body');

function testFunctionality(){
    var $table= $('<table>')
        .appendTo('body');

    var $thead = $('<thead>').appendTo($table);
    var $tr = $('<tr>').appendTo($thead);

    $tr.append($('<th>').text('First name'))
    $tr.append($('<th>').text('Last name'))
    $tr.append($('<th>').text('Grade'))
    $tr.append($('<th>').text('Mark'))

    var $tbody = $('<tbody>').appendTo($table);

    for (var i in students) {// students is in testArray.js
        var $stInfo = $('<tr>');
        $stInfo.append($('<td>')).text(students[i].firstName);
        $stInfo.append($('<td>')).text(students[i].lastName);
        $stInfo.append($('<td>')).text(students[i].grade);
        $stInfo.append($('<td>')).text(students[i].mark);
    }
}