$(document).ready(function () {

    let todos = [];

    $.fn.addTodo = function (todo) {
        todos.push(todo);
        $(`<div class="row" data-id="${todos.lastIndexOf(todo)}"><div class="cell">${todo}</div><div class="cell"><input type="button" value="&#x2717;" id="delete"></div></div>`).hide().fadeIn(500).appendTo("#output");
    }

    $("#add").on("click", function () {
        let todo = $("#input").val();
        $("#input").val("").focus();
        $.fn.addTodo(todo);
    })

    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            let todo = $("#input").val();
            $("#input").val("").focus();
            $.fn.addTodo(todo);
        }
    })

    $("#output").on("click", "#delete", function () {
        let id = $(this).parent().parent().data("id");
        $(this).parent().parent().css("text-decoration", "line-through").fadeOut(500, function () {
            $(this).remove();
        });
        todos.splice(id, 1);
    })
});