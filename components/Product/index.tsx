import React from 'react'
import { Info, ProductContainer } from './styled'
import { Title } from '@/styles/sharedstyles'
import Price from '../Price';
import Rating from '../Rating';
import AddToBasketButton from '../AddToBasketButton';

interface ProductProps {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;

}

const Product
    = ({ id, title, image, price, rating }: ProductProps) => {

        return (
            <ProductContainer>
                <img src={image} alt={title} />
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <Price itemPrice={price}/>
                    <Rating ratingNumber={rating}/>
                    

                </Info>
                <AddToBasketButton id={id} title={title} image={image} price={price} rating={rating}></AddToBasketButton>

            </ProductContainer>
        )
    }

export default Product
