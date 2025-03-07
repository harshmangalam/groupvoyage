export function usePrice({
  originalPrice,
  price,
}: {
  price: number;
  originalPrice: number;
}) {
  const percentageSaved =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return {
    percentageSaved,
    originalPrice,
    price,
  };
}
