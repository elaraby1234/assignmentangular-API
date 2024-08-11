export interface IProducts {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: IRateing  

  }
  
  export interface IRateing  {
    rate: number
    count: number
  } 
  