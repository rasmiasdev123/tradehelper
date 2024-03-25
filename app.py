from flask import Flask, render_template, jsonify
from functions import get_fno_data, get_hike_stocks
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fno_data')
def fno_data():
    fno_data = get_fno_data()
    return jsonify(fno_data)

@app.route('/hike_stocks')
def hike_stocks():
    hike_stocks = get_hike_stocks()  
    data = hike_stocks.to_dict(orient='records')  
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)