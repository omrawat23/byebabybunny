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
      const uniqueCategories = [...new Set(response.items.map(item => item.itemCategory))];
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

export const fetchProductBySlug = async (slug: string): Promise<{
  product?: Product;
  error?: string;
}> => {
  // Assuming the slug is actually the ID
  const query = gql`
    query ProductById($id: ID!) {
      item(where: { id: $id }) {
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
    // Use the slug parameter as the ID in the query
    const response = await hygraphClient.request<SingleProductResponse>(query, { id: slug });

    if (response && response.item) {
      return {
        product: response.item
      };
    }

    throw new Error('Product not found');
  } catch (err) {
    console.error('GraphQL Error Details:', err);
    const errorMessage = err.response?.errors?.[0]?.message || err.message || 'Failed to load product';
    return {
      error: `GraphQL Error: ${errorMessage}`
    };
  }
};