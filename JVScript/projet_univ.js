document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hide all content
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });

            // Show the content corresponding to the clicked tab
            const targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            const targetContent = document.getElementById(targetId);
            targetContent.classList.add('active');
        });
    });
});