import React from 'react'

const Contacts = () => {
    return (
        <main>
            <div className="flex justify-between bg-gray-800 text-white rounded-xl">
                <a href=""><img className="py-6 px-8 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/github.svg" alt="" /></a>
                <a href=""><img className="py-6 px-8 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/linkedin.svg" alt="" /></a>
                <a href=""><img className="py-6 px-8 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/facebook.svg" alt="" /></a>
                <a href=""><img className="py-6 px-8 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/email.svg" alt="" /></a>
                <a href=""><img className="py-6 px-8 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/notion.svg" alt="" /></a>
            </div>
        </main>
    )
}

export default Contacts
