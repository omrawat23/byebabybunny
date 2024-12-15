import hygraphClient, { gql } from '@/lib/hygraph-client';

// Define a more explicit error type
interface GraphQLError {
  message: string;
}

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
      // Use Array.from to avoid TypeScript iteration issues
      const uniqueCategories = Array.from(new Set(response.items.map(item => item.itemCategory)));
      
      return {
        products: response.items,
        categories: uniqueCategories,
      };
    }
   
    throw new Error('No items found in response');
  } catch (err: unknown) {
    // Type-safe error handling
    console.error('GraphQL Error Details:', err);
    
    let errorMessage = 'Failed to load products';
    
    // Type-safe error message extraction
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
      errorMessage = (err as { message: string }).message;
    }
    
    // Additional type-safe error handling for GraphQL specific errors
    if (err instanceof Error && 'response' in err) {
      const graphqlError = (err as { response?: { errors?: GraphQLError[] } }).response?.errors?.[0];
      if (graphqlError) {
        errorMessage = graphqlError.message;
      }
    }
    
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
    const response = await hygraphClient.request<SingleProductResponse>(query, { id: slug });

    if (response && response.item) {
      return {
        product: response.item
      };
    }

    throw new Error('Product not found');
  } catch (err: unknown) {
    // Similar type-safe error handling as in fetchProducts
    console.error('GraphQL Error Details:', err);
    
    let errorMessage = 'Failed to load product';
    
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
      errorMessage = (err as { message: string }).message;
    }
    
    // Additional type-safe error handling for GraphQL specific errors
    if (err instanceof Error && 'response' in err) {
      const graphqlError = (err as { response?: { errors?: GraphQLError[] } }).response?.errors?.[0];
      if (graphqlError) {
        errorMessage = graphqlError.message;
      }
    }
    
    return {
      error: `GraphQL Error: ${errorMessage}`
    };
  }
};