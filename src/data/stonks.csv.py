import yfinance as yf
import sys

ticker_symbol = "NTDOY"

stonk = yf.Ticker(ticker_symbol)
df = stonk.history(period="1y")  # Get history
df.reset_index(inplace=True)  # “unpivot” the DataFrame
df = df.drop(["Dividends", "Stock Splits"], axis=1)  # Remove columns we don't want

df["Date"] = df["Date"].apply(lambda x: x.strftime("%Y-%m-%d"))  # Format the date

df.to_csv(sys.stdout, index=False)
