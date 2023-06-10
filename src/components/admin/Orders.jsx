import React from 'react'

const Orders = ({ orders }) => {
    function generateRandomNumber() {
        const length = 17; // Length of the generated number
        let randomNumber = "";

        for (let i = 0; i < length; i++) {
            const digit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            randomNumber += digit.toString();
        }
        return randomNumber;
    }
    const randomNumbers = orders.map(() => BigInt(generateRandomNumber()));

    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-y-4'>
            {orders.map((order, i) => {
                const orderTotal = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const randomBigNumber = randomNumbers[i].toString().slice(0, 17);
                return (
                    <div key={order.id} className="flex justify-center items-stretch text-gray-900 dark:text-white">
                        <div className="rounded-md relative w-72 shadow-2xl p-3 dark:bg-transparent bg-white border border-[#ccc]">
                            <div className="py-2">
                                <div className="text-center text-xl font-bold">ORDER</div>
                                <div className="text-center text-xs font-bold">The order details</div>
                            </div>
                            <div className="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                            <div className="text-xs pl-2">
                                <div className="text-xs mb-1">Customer&#58; {typeof order.user === "string" ? order.user : order.user.name}</div>
                                <div className="text-xs mb-1">TelePhone&#58; {typeof order.user === "string" ? "--" : order.user.phone}</div>
                                <div className="text-xs mb-1">Address&#58; {typeof order.user === "string" ? "--" : order.user.address}</div>
                                <div>OrderNumber&#58; {randomBigNumber}</div>
                            </div>
                            <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                                <div className="flex text-sm pt-1 px-1">
                                    <span className="w-2/6">Name</span>
                                    <span className="w-2/6 text-right">Price</span>
                                    <span className="w-2/6 text-right">Number</span>
                                </div>
                                <div className="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
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
                                <div className="font-bold text-sm">Aggregate&#58; ₺{orderTotal}</div>
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