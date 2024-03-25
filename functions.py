import requests
import pandas as pd
from datetime import datetime, timedelta
import pdb
def get_fno_data():
    headers = {"User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"}
    session = requests.Session()
    url = "https://www.nseindia.com/api/equity-stockIndices?index=SECURITIES%20IN%20F%26O"
    session.get("https://www.nseindia.com/", headers=headers)
    data = session.get(url, headers=headers).json()["data"]
    final_data = process_fno_data(data)
    return final_data

def process_fno_data(data_list):
    processed_data = []
    for item in data_list:
        symbol = item["symbol"]
        open_price = item["open"]
        high_price = item["dayHigh"]
        low_price = item["dayLow"]
        change_percent = item["pChange"]
        last_price = item["lastPrice"]
        volume = item["totalTradedVolume"]
        processed_data.append(
        {'symbol': symbol,
        "open": open_price,
        "high": high_price,
        "low": low_price,
        "change_percent": change_percent,
        "last_price": last_price,
        "volume": volume}
        )
    return processed_data

def get_volume_data(symbol):
    symbol = symbol.replace('&', '%26')
    to_date = datetime.today().strftime("%d-%m-%Y")
    from_date = (datetime.today() - timedelta(days=30)).strftime("%d-%m-%Y")
    headers = {"User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"}
    session = requests.Session()
    url = f"https://www.nseindia.com/api/historical/securityArchives?from={from_date}&to={to_date}&symbol={symbol}&dataType=priceVolumeDeliverable&series=EQ"
    session.get("https://www.nseindia.com/", headers=headers)
    data = session.get(url, headers=headers).json()["data"]
    df = pd.DataFrame(data)
    df = df[["mTIMESTAMP","CH_TOT_TRADED_VAL", 'COP_DELIV_QTY', 'COP_DELIV_PERC', 'CH_LAST_TRADED_PRICE', 'CH_SYMBOL']]
    df.rename(columns={'mTIMESTAMP': 'date', 'CH_TOT_TRADED_VAL': 'turnover', 'COP_DELIV_QTY': 'dly_qty', 'COP_DELIV_PERC': 'delivery_pct', 'CH_LAST_TRADED_PRICE':'close', 'CH_SYMBOL': 'symbol'}, inplace=True)
    hike = process_volume_data(df)
    if hike:
        return df.iloc[-1]

def process_volume_data(df:pd.DataFrame):
    df.drop(df[df.isin(['-']).any(axis=1)].index, inplace=True)
    df['pct_change'] = df['close'].pct_change()
    df['dly_hike'] = df['dly_qty'].pct_change() > 1
    df['dly_hike_pct'] = round(df['dly_qty'].pct_change() * 100, 0)
    df['turn_hike'] = df['turnover'].pct_change() > 1
    df['turn_hike_pct'] = round(df['turnover'].pct_change()* 100, 0)
    df.dropna(inplace=True)
    if df.iloc[-1]['dly_hike'] and df.iloc[-1]['turn_hike']:
        return True
    return False
data = get_volume_data("RELIANCE")
def get_hike_stocks():
    fno_data = get_fno_data()
    stocks = []
    for item in fno_data:
        symbol = item['symbol']
        volume_data = get_volume_data(symbol)
        if volume_data is not None and not volume_data.empty:
            stocks.append({symbol:volume_data.to_dict()})
    stocks = [v for d in stocks for v in d.values()]
    df = pd.DataFrame(stocks)
    return df

# stocks = get_hike_stocks()
def get_demo_data():
    df = pd.read_csv("data.txt")
    return df
