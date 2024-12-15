export interface Product {
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemCategory: string;
    asset: {
      imageUrl: string;
    };
    itemSize: string[];
  }
  