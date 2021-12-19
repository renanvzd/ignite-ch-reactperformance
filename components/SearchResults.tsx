import { useMemo } from 'react';
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = results.reduce((total, product) => {
    return total + product.price;
  }, 0)

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        )
      })}
    </div>
  )
}