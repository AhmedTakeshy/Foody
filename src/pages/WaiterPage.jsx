import { useOutletContext } from "react-router-dom"

const WaiterPage = () => {

    const adminData = useOutletContext();
    const { waiter } = adminData;

    return (
        <div className='grid items-center gap-4 mt-12 lg:grid-cols-4 md:grid-cols-3'>
            {waiter.map(w => (
                <div key={w.id} className="max-w-md p-2 rounded-3xl bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                    <div className="rounded-[calc(1.5rem-.5rem)] p-6 bg-white dark:bg-gray-900">
                        <div className="flex flex-col items-start">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                                    {w.tableNumber === 0 ? (<b>Door</b>) :
                                        <>
                                            <b>Table no: </b> {w.tableNumber}
                                        </>}</h3>
                            </div>
                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400"><b>Date - Time:</b> {w.dateTime}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default WaiterPage;