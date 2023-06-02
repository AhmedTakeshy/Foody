import ayran from '../../assets/ayran.jpg'
import cola from '../../assets/cola.webp'
import soda from '../../assets/soda.jpg'
import water from '../../assets/water.jpg'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const suggestedData = [
    {
        id: 1,
        title: 'Ayran',
        price: 4,
        image: ayran
    },
    {
        id: 2,
        title: 'Cola',
        price: 10,
        image: cola
    },
    {
        id: 3,
        title: 'Soda',
        price: 3,
        image: soda
    },
    {
        id: 4,
        title: 'Water',
        image: water,
        price: 5,
    },
]

const CartSuggestions = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-start justify-between overflow-scroll">
            <h2 className="text-xl font-bold my-2 text-gray-700">Suggested Drinks</h2>
            <div className=' justify-content-between overflow-scroll grid gap-2 md:grid-cols-2 w-full'>
                {suggestedData.map((item) => {
                    const addHandler = () => {
                        dispatch(
                            cartActions.addItem({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                                quantity: 1,
                            })
                        );
                    };
                    const removeHandler = () => {
                        dispatch(cartActions.removeItem(item.id));
                    };
                    return (
                        <div key={item.id} className='flex bg-gray-200 rounded-md'>
                            <img src={item.image} alt={item.title} className='h-24 w-24 object-cover border border-gray-200 rounded-md rounded-r-none' />
                            <div className='flex flex-col items-center justify-center w-full'>
                                <h3 className='text-gray-800 font-semibold'>{item.title}</h3>
                                <div className="flex w-fill flex-col md:flex-row">
                                    <button
                                        onClick={removeHandler}
                                        className="font-bold text-base text-primary border border-primary w-8 text-center rounded bg-transparent cursor-pointer m-1 hover:text-white hover:bg-secondary"
                                    >
                                        −
                                    </button>
                                    <button
                                        onClick={addHandler}
                                        className="font-bold text-base text-primary border border-primary w-8 text-center rounded bg-transparent cursor-pointer m-1 hover:text-white hover:bg-secondary"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className='text-gray-800 inline-block'>₺ {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartSuggestions