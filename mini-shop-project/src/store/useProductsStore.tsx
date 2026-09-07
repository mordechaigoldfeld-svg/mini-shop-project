import { create } from "zustand"
import Favorites from "../pages/favorites/Favorites"





export type product = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string
}


type useProductType = {

    products: product[],
    setProducts: (products: product[]) => void,
    favorites: product[],
    addfavorite: (product: product) => void,
    removeFavorite: (id: number) => void,
    searched: product[],
    setSearch: (products: product[]) => void

}


export const useProductsStore = create<useProductType>((set, get) => ({
    products: [],
    setProducts: (products: product[]) => set(() => ({ products })),
    favorites: [],
    addfavorite: (product: product) => set((s) => {
        if (s.favorites.some((p) => p.id === product.id)) return s;
        
        return { favorites: [...s.favorites, product] }
    }),
    removeFavorite: (id: number) => set((s) => ({
        favorites: s.favorites.filter((p) => p.id !== id)
    })),
    searched: [],
    setSearch: (searched: product[]) => set(() => ({ searched }))

}))