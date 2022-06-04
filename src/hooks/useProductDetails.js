import { useEffect, useState } from "react"

const useProductDetrails = productId => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://safe-tundra-06373.herokuapp.com/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product, setProduct];
}

export default useProductDetrails;