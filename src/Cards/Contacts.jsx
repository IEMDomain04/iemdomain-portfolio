import React from 'react'

const Contacts = () => {
    return (
        <main>
            <div className="space-x-2 col-span-1 sm:col-span-2 flex justify-evenly bg-gray-800 text-white rounded-lg shadow-md p-4">
                <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="../assets/github.svg" alt="" /></a>
                <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/linkedin.svg" alt="" /></a>
                <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/facebook.svg" alt="" /></a>
                <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/email.svg" alt="" /></a>
                <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/notion.svg" alt="" /></a>
            </div>
        </main>
    )
}

export default Contacts
