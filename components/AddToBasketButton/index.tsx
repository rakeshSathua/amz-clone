import { useAppDispatch } from '@/lib/store/hooks';
import { addToCart } from '@/lib/store/reducers/cartReducer';
import { AmazonButton } from '@/styles/sharedstyles'
import { CartType } from '@/types/cart';
import React from 'react';




function AddToBasketButton({ id, title, image, price, rating }: CartType) {
    const dispatch = useAppDispatch()
    const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addToCart({
            id,
            title,
            image,
            price,
            rating,
        }));
    }
    return (
        <AmazonButton onClick={addToBasket}>Add to Cart</AmazonButton>
    )
}

export default AddToBasketButton





