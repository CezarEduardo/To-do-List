$(document).ready(function () {
    $('.edit-button').click(function () {
        var task = $(this).closest('.task');
        task.find('.progress').addClass('hidden');
        task.find('.task_description').addClass('hidden');
        task.find('.task-actions').addClass('hidden');
        task.find('.edit-task').removeClass('hidden');
    });

    $('.progress').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });

    $('.progress').on('change', function () {
        const id = $(this).data('task-id');        
        const completed = $(this).is(':checked') ? 'Y' : 'N';

        $.ajax({
            url: '../../To do List/actions/update-progress.php',
            method: 'POST',
            data: {
                id: id,
                completed: completed
            },
            dataType: 'json',
            success: function (response) {
            },
            error: function (xhr, status, error) {
                console.log("Error updating progress:", error);
            }
        });
    });
});