document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let patientName = document.getElementById('patientName').value;
    let symptoms = document.getElementById('symptoms').value;

    let formData = {
        patientName: patientName,
        symptoms: symptoms
    };

    fetch('/submit_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = data.message;
        document.getElementById('dataForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
