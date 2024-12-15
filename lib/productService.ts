import hygraphClient, { gql } from '@/lib/hygraph-client';

export interface Product {
  id: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemCategory: string;
  asset: {
    imageUrl: string;
  };
  itemSize: string[];
  imageUrl: string;
}

export interface ProductsResponse {
  items: Product[];
}

export interface SingleProductResponse {
  item: Product;
}

export const fetchProducts = async (): Promise<{
  products: Product[];
  categories: string[];
  error?: string;
}> => {
  const query = gql`
    query Products {
      items {
        id
        itemName
        itemDescription
        itemPrice
        itemCategory
        asset
        itemSize
      }
    }
  `;
  try {
    const response = await hygraphClient.request<ProductsResponse>(query);

    if (response && response.items) {
      // Change this line to use Array.from() instead of spread operator
      const uniqueCategories = Array.from(new Set(response.items.map(item => item.itemCategory)));

      return {
        products: response.items,
        categories: uniqueCategories,
      };
    }

    throw new Error('No items found in response');
  } catch (err) {
    console.error('GraphQL Error Details:', err);
    const errorMessage = err.response?.errors?.[0]?.message || err.message || 'Failed to load products';
    return {
      products: [],
      categories: [],
      error: `GraphQL Error: ${errorMessage}`,
    };
  }
};
