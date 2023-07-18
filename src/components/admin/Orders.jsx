import React from 'react'

const Orders = ({ orders }) => {
    const ordersArray = Object.values(orders);
    function generateRandomNumber() {
        const length = 17; // Length of the generated number
        let randomNumber = "";

        for (let i = 0; i < length; i++) {
            const digit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            randomNumber += digit.toString();
        }
        return randomNumber;
    }
    const randomNumbers = ordersArray.map(() => BigInt(generateRandomNumber()));

    return (
        <div className='grid mt-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-4'>
            {ordersArray.map((order, i) => {
                const orderTotal = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const randomBigNumber = randomNumbers[i].toString().slice(0, 17);
                return (
                    <div key={order.id} className="flex items-stretch justify-center text-gray-900 dark:text-white">
                        <div className="rounded-md relative w-72 shadow-2xl p-3 dark:bg-transparent bg-white border border-[#ccc]">
                            <div className="py-2">
                                <div className="text-xl font-bold text-center">ORDER</div>
                                <div className="text-xs font-bold text-center">The order details</div>
                            </div>
                            <div className="mb-1 text-xs font-bold text-center">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                            <div className="pl-2 text-xs">
                                <div className="mb-1 text-xs">Customer&#58; {typeof order.user === "string" ? order.user : order.user.name}</div>
                                <div className="mb-1 text-xs">TelePhone&#58; {typeof order.user === "string" ? "--" : order.user.phone}</div>
                                <div className="mb-1 text-xs">Address&#58; {typeof order.user === "string" ? "--" : order.user.address}</div>
                                <div>OrderNumber&#58; {randomBigNumber}</div>
                            </div>
                            <div className="my-3 border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 border-double">
                                <div className="flex px-1 pt-1 text-sm">
                                    <span className="w-2/6">Name</span>
                                    <span className="w-2/6 text-right">Price</span>
                                    <span className="w-2/6 text-right">Number</span>
                                </div>
                                <div className="px-1 py-2 my-2 mt-1 border-t border-b border-l-0 border-r-0 border-gray-900 border-dashed">
                                    {order.orderItems.map((item, i) => {
                                        return (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="w-2/6 truncate">{item.title}</span>
                                                <span className="w-2/6 text-right">₺{item.price}</span>
                                                <span className="w-2/6 text-right">{item.quantity}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="text-xs">
                                <div className="">Remark&#58;--</div>
                                <div className="text-sm font-bold">Aggregate&#58; ₺{orderTotal}</div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Orders