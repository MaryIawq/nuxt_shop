export interface ICard {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    price: number;
    manufacturer: string;
    description: string;
}
export const CARDS_DATA: ICard[] = [
    {
        id: 1,
        title: "Smartphone Pro X",
        subtitle: "High-end smartphone with advanced features",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjournal.tinkoff.ru%2Flaptops-for-work%2F&psig=AOvVaw1FmQJGnyiXlUln6npZn1Ov&ust=1724310540050000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjQprvDhYgDFQAAAAAdAAAAABAE",
        price: 999.99,
        manufacturer: "TechCorp",
        description: "The Smartphone Pro X is a cutting-edge device with a sleek design, featuring a 6.7-inch OLED display, the latest processor, and an advanced camera system. Perfect for photography enthusiasts and power users, this smartphone delivers exceptional performance in every aspect, including gaming, multitasking, and photography."
    },
    {
        id: 2,
        title: "4K Ultra HD TV",
        subtitle: "55-inch television with stunning 4K resolution",
        image: "https://example.com/images/4k_tv.jpg",
        price: 699.99,
        manufacturer: "VisionElectronics",
        description: "Experience your favorite movies and shows in breathtaking clarity with the 4K Ultra HD TV. This 55-inch television boasts vibrant colors, deep blacks, and a refresh rate that ensures smooth visuals. Ideal for home theaters, this TV supports all major streaming services and comes with built-in smart features."
    },
    {
        id: 3,
        title: "Wireless Headphones",
        subtitle: "Noise-cancelling over-ear headphones",
        image: "https://example.com/images/wireless_headphones.jpg",
        price: 199.99,
        manufacturer: "SoundWave",
        description: "Enjoy your music like never before with Wireless Headphones from SoundWave. These over-ear headphones feature active noise-cancelling technology, superior sound quality, and long battery life, making them perfect for both commuting and home listening. With a comfortable design and intuitive controls, they are your ideal audio companion."
    },
    {
        id: 4,
        title: "Laptop Pro 15",
        subtitle: "Powerful laptop for professionals",
        image: "https://opis-cdn.tinkoffjournal.ru/mercury/laptops-for-work-short-2.smscejooqbsg..png?preset=tile_200w_2x",
        price: 1299.99,
        manufacturer: "ComputePlus",
        description: "The Laptop Pro 15 is designed for professionals who need power and portability. With a 15-inch Retina display, 16GB of RAM, and a high-performance processor, this laptop handles everything from video editing to coding with ease. The sleek aluminum body, backlit keyboard, and long battery life make it perfect for on-the-go productivity."
    },
    {
        id: 5,
        title: "Smartwatch Series 5",
        subtitle: "Next-generation smartwatch with health tracking",
        image: "https://example.com/images/smartwatch_5.jpg",
        price: 299.99,
        manufacturer: "TimeTech",
        description: "Stay connected and healthy with the Smartwatch Series 5. This smartwatch offers advanced health monitoring features, including heart rate tracking, ECG, and sleep analysis. With customizable watch faces, GPS, and support for notifications, it seamlessly integrates with your lifestyle, helping you stay on top of your goals and schedule."
    },
    {
        id: 6,
        title: "Gaming Console X",
        subtitle: "Next-gen gaming console with ultra-fast performance",
        image: "https://example.com/images/gaming_console_x.jpg",
        price: 499.99,
        manufacturer: "GameMasters",
        description: "Gaming Console X is the ultimate next-gen gaming experience. It features a lightning-fast processor, ray tracing support, and immersive 3D audio, ensuring you are fully immersed in your games. With a vast library of exclusive titles and backward compatibility, this console is a must-have for any gaming enthusiast."
    },
    {
        id: 7,
        title: "Bluetooth Speaker",
        subtitle: "Portable speaker with powerful bass",
        image: "https://example.com/images/bluetooth_speaker.jpg",
        price: 89.99,
        manufacturer: "AudioKing",
        description: "Take your music anywhere with the Bluetooth Speaker by AudioKing. Compact yet powerful, this portable speaker delivers rich bass and clear sound. With a waterproof design and up to 12 hours of battery life, it's perfect for outdoor adventures, parties, or just enjoying your favorite tunes at home."
    },
    {
        id: 8,
        title: "Digital Camera",
        subtitle: "Compact camera with 4K video recording",
        image: "https://example.com/images/digital_camera.jpg",
        price: 649.99,
        manufacturer: "CapturePro",
        description: "Capture every moment in stunning detail with the Digital Camera by CapturePro. This compact camera features a 20MP sensor, 4K video recording, and a versatile zoom lens. Whether you're a professional photographer or a hobbyist, this camera offers the perfect balance of portability and performance."
    },
    {
        id: 9,
        title: "Fitness Tracker",
        subtitle: "Wearable device for fitness tracking and health monitoring",
        image: "https://example.com/images/fitness_tracker.jpg",
        price: 149.99,
        manufacturer: "FitLife",
        description: "Achieve your fitness goals with the Fitness Tracker by FitLife. This wearable device monitors your activity, tracks your workouts, and provides insights into your sleep patterns. With a sleek design, long battery life, and water resistance, it's the perfect companion for a healthy lifestyle."
    },
    {
        id: 10,
        title: "Smart Home Hub",
        subtitle: "Central hub for controlling smart home devices",
        image: "https://example.com/images/smart_home_hub.jpg",
        price: 129.99,
        manufacturer: "HomeConnect",
        description: "The Smart Home Hub by HomeConnect is your gateway to a connected home. Control all your smart devices from one central hub, compatible with voice assistants and offering seamless integration with various home automation systems. Easy to set up and use, it enhances the convenience and efficiency of your smart home."
    },
    {
        id: 11,
        title: "Virtual Reality Headset",
        subtitle: "Immersive VR experience with high-definition visuals",
        image: "https://example.com/images/vr_headset.jpg",
        price: 349.99,
        manufacturer: "VisionWare",
        description: "Step into new worlds with the Virtual Reality Headset by VisionWare. This VR headset offers high-definition visuals, a wide field of view, and precise motion tracking for an immersive gaming and entertainment experience. Compatible with a range of VR content, it's your ticket to exploring virtual realities."
    },
    {
        id: 12,
        title: "Smart Thermostat",
        subtitle: "Energy-efficient thermostat with remote control",
        image: "https://example.com/images/smart_thermostat.jpg",
        price: 199.99,
        manufacturer: "EcoHeat",
        description: "Control your home's temperature with ease using the Smart Thermostat by EcoHeat. This energy-efficient thermostat learns your preferences and adjusts the temperature automatically. With remote control via a smartphone app and integration with voice assistants, it helps you save energy while keeping your home comfortable."
    }
];
