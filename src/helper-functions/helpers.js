import deckedSteakImg from '../assets/steak-01.webp';
import pepperCornSteakImg from '../assets/steak-02.webp';
import frenchOnionSteakImg from '../assets/steak-03.webp';
import mushroomSteakImg from '../assets/steak-04.webp';
import herbSteakImg from '../assets/steak-05.webp';
import hawaiianSteakImg from '../assets/steak-06.webp';
import chicagoSteakImg from '../assets/steak-07.webp';
import newYorkSteakImg from '../assets/steak-08.webp';
import fireSpecialSteakImg from '../assets/steak-09.webp';
import bbqSteakImg from '../assets/steak-10.webp';

const menuItems = [
    {
        name: "Decked Steak",
        imgSrc: deckedSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Pepper Corn Steak",
        imgSrc: pepperCornSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "French Onion Steak",
        imgSrc: frenchOnionSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Mushroom Steak",
        imgSrc: mushroomSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Herb Steak",
        imgSrc: herbSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Hawaiian Steak",
        imgSrc: hawaiianSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Chicago Steak",
        imgSrc: chicagoSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "New York Steak",
        imgSrc: newYorkSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
    {
        name: "Fire Special Steak",
        imgSrc: fireSpecialSteakImg,
        price: 1690,
        id: crypto.randomUUID(),
    },
]

export default menuItems;