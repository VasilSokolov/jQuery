$('#createTable').on('click', function () {
    var $table = $('<table>')
        .appendTo('body');
    var $thead = $('<thead>').appendTo($table);
    var $tr = $('<tr>').appendTo($thead);
    $tr.append($('<th>').text('First name'));
    $tr.append($('<th>').text('Last name'));
    $tr.append($('<th>').text('Grade'));
    $tr.append($('<th>').text('Mark'));
    var $tbody = $('<tbody>').appendTo($table);

    for (var i = 0; i < students.length; i++) {// students it in testArray.js
        var $currRow = $('<tr>');
        $currRow.append($('<td>').text(students[i].firstName));
        $currRow.append($('<td>').text(students[i].lastName));
        $currRow.append($('<td>').text(students[i].grade));
        $currRow.append($('<td>').text(students[i].mark));
        $currRow.appendTo($tbody);
    }
});