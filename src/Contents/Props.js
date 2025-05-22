// ONLY CONTAINS ARRAY PROPS FOR LESS REDUNDANCY. 

const stacks = [
    { src: "./assets/icons/react.svg", href: "https://react.dev/", alt: "React icon" },
    { src: "./assets/icons/python.svg", href: "https://www.python.org/", alt: "Python icon" },
    { src: "./assets/icons/tailwind.svg", href: "https://tailwindcss.com/", alt: "TailwindCSS icon" },
    { src: "./assets/icons/astro.svg", href: "https://astro.build/", alt: "Astro icon" },
    { src: "./assets/icons/laravel.svg", href: "https://laravel.com/", alt: "Laravel icon" },
    { src: "./assets/icons/firebase.svg", href: "https://firebase.google.com/", alt: "Firebase icon" },
    { src: "./assets/icons/dart.svg", href: "https://dart.dev/", alt: "Dart icon" },
]

const certificates = [
    {
        name:"Google UX Designer", 
        src:"/assets/google-ux.svg",
        link:"https://www.credly.com/badges/be5be992-9c81-4624-a977-e1bc85d6a251/public_url",
        alt:"UX Designer Image"
    },
    {
        name:"Meta Front-End Developer", 
        src:"/assets/meta-fed.svg",
        link:"https://www.credly.com/badges/2726eaae-061f-4930-bf3b-c5b5e361a0ff/public_url",
        alt:"Meta Front-End Dev Image"
    },
    {
        name:"Data Science Orientation", 
        src:"/assets/datasci-orientation.png",
        link:"https://www.credly.com/badges/171b7e99-97a2-42e6-a3a6-bbaaeb2bb530/public_url",
        alt:"Data Science Orientation Image"
    },
]

const links = [
    { name: "About", href: "/aboutme"},
    { name: "Project", href: "/projects"},
]

const updates = [
    { date: "February 5", time: "1:00 AM"},
]

export { stacks, links, updates, certificates };