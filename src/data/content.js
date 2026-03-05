import dzireImg from '../assets/dzire.png';
import etiosImg from '../assets/etios.png';
import innovaImg from '../assets/innova.png';

export const content = {
    brand: {
        name: "Vikatakavi",
        logoText: "Vikatakavi<span>.</span>"
    },
    navLinks: [
        { label: "Home", href: "#home" },
        { label: "Our Cars", href: "#fleet" },
        { label: "Contact", href: "#contact" }
    ],
    hero: {
        title: "Reliable Rides Across Tamil Nadu",
        subtitle: "Affordable, comfortable, and well-maintained cars for all your travel needs.",
        ctaText: "Book Your Ride"
    },
    fleetSection: {
        title: "Our Popular Cars",
        subtitle: "Choose the perfect vehicle for your journey.",
        cars: [
            {
                id: "Dzire",
                name: "Maruti Suzuki Dzire",
                image: dzireImg,
                description: "Perfect for city commutes and small families. Excellent mileage and comfort."
            },
            {
                id: "Etios",
                name: "Toyota Etios",
                image: etiosImg,
                description: "Spacious cabin and reliable performance. Ideal for longer highway trips."
            },
            {
                id: "Innova",
                name: "Toyota Innova Crysta",
                image: innovaImg,
                description: "Premium 7-seater comfort for large families and group travel."
            }
        ]
    },
    contact: {
        title: "Get in Touch",
        info: [
            { label: "Call Us", value: "+91 98765 43210" },
            { label: "Email", value: "contact@vikatakavi.in" },
            { label: "Location", value: "T. Nagar, Chennai, Tamil Nadu" }
        ]
    },
    footer: {
        text: "Vikatakavi Travels. All rights reserved."
    },
    modal: {
        title: "Book Your Ride",
        subtitle: "Fill in the details and we'll confirm your trip shortly.",
        successMessage: "Nandri! Thank you for choosing Vikatakavi. Our team will call you shortly to confirm."
    }
};
