import ayran from '../../assets/ayran.jpg'
import cola from '../../assets/cola.webp'
import soda from '../../assets/soda.jpg'
import su from '../../assets/water.jpg'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const suggestedData = [
    {
        id: ayran,
        title: 'Ayran',
        price: 4,
        image: ayran
    },
    {
        id: cola,
        title: 'Kola',
        price: 10,
        image: cola
    },
    {
        id: soda,
        title: 'Soda',
        price: 3,
        image: soda
    },
    {
        id: su,
        title: 'Su',
        image: su,
        price: 5,
    },
]

const CartSuggestions = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-start justify-between overflow-scroll">
            <h2 className="my-2 text-xl font-bold text-gray-700">Öneriler</h2>
            <div className='grid w-full gap-2 overflow-scroll  justify-content-between md:grid-cols-2'>
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
                            <img src={item.image} alt={item.title} className='object-cover w-24 h-24 border border-gray-200 rounded-md rounded-r-none' />
                            <div className='flex flex-col items-center justify-center w-full'>
                                <h3 className='font-semibold text-gray-800'>{item.title}</h3>
                                <div className="flex flex-col w-fill md:flex-row">
                                    <button
                                        onClick={removeHandler}
                                        className="w-8 m-1 text-base font-bold text-center bg-transparent border rounded cursor-pointer text-primary border-primary hover:text-white hover:bg-secondary"
                                    >
                                        −
                                    </button>
                                    <button
                                        onClick={addHandler}
                                        className="w-8 m-1 text-base font-bold text-center bg-transparent border rounded cursor-pointer text-primary border-primary hover:text-white hover:bg-secondary"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className='inline-block text-gray-800'>₺ {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartSuggestions