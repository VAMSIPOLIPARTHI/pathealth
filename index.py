from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulated database for storing incoming data
data_store = []

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/submit_data', methods=['POST'])
def submit_data():
    data = request.json  # Assume incoming data is in JSON format
    data_store.append(data)
    # Process data here (simulated for demonstration)
    # Example: detect abnormal increase in reported cases

    # Simulated response for demonstration
    response = {
        'status': 'success',
        'message': 'Data received and processed successfully'
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
