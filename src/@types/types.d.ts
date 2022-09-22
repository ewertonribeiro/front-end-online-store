declare interface Item {
  title: string;
  price: number;
  thumbnail: string;
  id: string;
  cart?: boolean;
  shipping: {
    free_shipping: boolean;
  };
  quantity: number;
}

declare interface Categorie {
  id: string;
  name: string;
}

declare module '*.svg' {
  const contend: any;
  export default content;
}
