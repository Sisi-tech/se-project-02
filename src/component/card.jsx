import React, {useState} from 'react';


function Card({ name, price, description, url}) {
    const [itemCount, setItemCount] = useState(1);
    const [cart, setCart] = useState(false);

    const handleCart = () => {
        setCart(!cart);
    };

    const incrementItem = () => {
        setItemCount(prevCount => prevCount + 1);
    };
    const decrementItem = () => {
        if (itemCount > 1) {
            setItemCount(prevCount => prevCount - 1);
        }
    };
    const handleConfirm = () => {
        console.log(`Confirmed ${itemCount} of ${name} added to cart.`)
        const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
        const total = numericPrice * itemCount;
        alert(`Confirmed ${itemCount} of ${name} added to cart. Total is $${total.toFixed(2)}`)
        setCart(false);
    }

    return (
        <div className='w-[340px] bg-pink-50 flex flex-col pb-4 mb-6 p-4 gap-2 hover:scale-110'>
            <img src={url} alt={name} />
            <div>
                <p>{name} <span>{price}</span></p>
                <p>{description}</p>
            </div>
            <button className='bg-pink-200 p-1 hover:bg-pink-400' onClick={handleCart}>Add to Cart</button>
            {cart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className='bg-white p-8 w-[340px] flex flex-col items-center'>
                        <img src={url} alt={name} className="mb-4" />
                        <div>
                            <p className="text-lg font-bold">{name} <span className="text-gray-500">{price}</span></p>
                            <p className="text-gray-700">{description}</p>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <button onClick={decrementItem} className='bg-pink-200 p-1'>-</button>
                            <span>{itemCount}</span>
                            <button onClick={incrementItem} className='bg-pink-200 p-1'>+</button>
                        </div>
                        <button onClick={handleConfirm} className='bg-green-200 mt-4 p-2 hover:bg-green-400'>
                            Confirm
                        </button>
                        <button onClick={handleCart} className='mt-4 text-red-500 hover:underline'>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card; 

