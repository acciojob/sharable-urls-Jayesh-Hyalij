// your code here
document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            var queryString = document.getElementById('query').value;
            var urlElement = document.getElementById('url');
            urlElement.textContent = urlElement.textContent + '?' + queryString;
        });