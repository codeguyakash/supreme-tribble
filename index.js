import "dotenv/config";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(process.env.SECRET_KEY);

export async function currencyConvert(fromCurrency, toCurrency, amount) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const rate = res.data[toCurrency];
  console.log(rate * amount);
}
currencyConvert("USD", "EUR", 10);
