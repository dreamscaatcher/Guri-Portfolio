from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/covid-data', methods=['GET'])
def get_covid_data():
    confirmed = pd.read_csv('confirmed.csv')
    deaths = pd.read_csv('deaths.csv')
    recovered = pd.read_csv('recovered.csv')

    confirmed_global = confirmed.iloc[:, 4:].sum(axis=0)
    deaths_global = deaths.iloc[:, 4:].sum(axis=0)
    recovered_global = recovered.iloc[:, 4:].sum(axis=0)

    data = pd.DataFrame({
        'Confirmed': confirmed_global,
        'Deaths': deaths_global,
        'Recovered': recovered_global
    })

    data.index = pd.to_datetime(data.index)

    result = data.to_dict()

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
