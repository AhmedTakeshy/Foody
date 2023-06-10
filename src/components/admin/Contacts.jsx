import React from 'react'

const Contacts = ({ contacts }) => {


    return (
        <div className='grid items-center gap-4 mt-12 lg:grid-cols-3 md:grid-cols-2'>
            {contacts.map(contact => (
                <div key={contact.id} className="max-w-md p-px rounded-3xl bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                        <p className="text-gray-700 dark:text-gray-300"><b>Message:</b> {contact.message}</p>
                        <div className="flex flex-col items-start mt-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-white"><b>Name:</b> {contact.name}</h3>
                                <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400"><b>Email:</b> {contact.email}</span>
                            </div>
                            <span className="mt-8 text-sm tracking-wide text-gray-600 dark:text-gray-400"><b>Date - Time:</b> {contact.dateTime}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Contacts