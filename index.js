import "dotenv/config";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_a6KyVsRuCJlOsfsazhz6SWYgmhbFD5aR9z8G3oAB"
);

export async function currencyConvert(fromCurrency, toCurrency, amount) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const rate = res.data[toCurrency];
  return rate * amount;
}
