export interface Product {
    id: string;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemCategory: string;
    asset: string;
    itemSize: string;
  }
  
  export interface ProductCollection {
    category: string;
    product: Product[];
  }
  
  export interface GetProductResponse {
    // category: string;
    product: Product;
  }
  
  export interface GetProductsResponse {
    productCollections: ProductCollection[];
  }