import axios from "axios"
import { useProductsStore } from "../store/useProductsStore"
import { useEffect, useState } from "react"






export function useFetch(url: string) {


    const [loading, setLoading] = useState<boolean>(true)

    const [error, setError] = useState<string | null>(null)

    const [data, setData] = useState(null)

    useEffect(() => {

        if (!url) {
            setLoading(false);
            return;
        }


        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {

                const response = await axios.get(url);
                setData(response.data);


            } catch (error: any) {
                setError(error.message);

            } finally {
                setLoading(false)
            }
        };
        loadData()
    }, [url]);
    return {

        data,
        loading,
        error
    }

}




export function useProducts() {

    const products = useProductsStore(s => s.products)

    const setProducts = useProductsStore(s => s.setProducts)

    const shouldFetch = products.length === 0

    const { data, error, loading } = useFetch(
        shouldFetch ? "https://fakestoreapi.com/products" : '')

    useEffect(() => {



        if (data && shouldFetch) {
            setProducts(data)
        }



    }, [data]);
    
console.log("data",data);


    return {

        products,
        loading,
        error
    }


}
















// export function useFetch(url: string) {

//     const [loading, setLoading] = useState<boolean>(true)

//     const [error, setError] = useState<string | null>(null)

//     const [data, setData] = useState(null)

//     useEffect(() => {

//         if (!url) {
//             setLoading(false)
//             return;
//         }

//         const loadData = async () => {
//             setLoading(true);
//             setError(null);

//             try {

//                 const response = await axios.get(url);
//                 setData(response.data);


//             } catch (error:any) {
//                 setError(error.message);

//             } finally {
//                 setLoading(false)
//             }
//         };
//         loadData()
//     }, [url]);
//     return {

//         data,
//         loading,
//         error
//     }

// }




