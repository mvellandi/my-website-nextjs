import { useState } from 'react'

export default function DynamicAccordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mt-36">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full appearance-none bg-transparent text-left"
            >
                <div className="prose-area relative flex items-end justify-between pl-6">
                    <span
                        className={`absolute top-1/2 -translate-y-1/2 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
                        style={{ left: '-1.1rem' }} // Adjust this value as needed
                    >
                        ▶
                    </span>
                    <h2 style={{ margin: '0', padding: '0' }}>{title}</h2>
                    <span className="flex-shrink-0">
                        <a href="#pagetop" style={{ textDecoration: 'none' }}>
                            all categories
                        </a>
                    </span>
                </div>
                <hr className="not-prose" />
            </button>
            {isOpen && children}
            {
                // <ul>
                //     {items.map((item, index) => (
                //         <li key={index}>{item}</li>
                //     ))}
                // </ul>
            }
        </div>
    )
}
