import { v4 as uuidv4 } from 'uuid';
const newJoin = [
    { id: uuidv4(), userId: 1, img: '/Avatars/mahdi.jpg', name: "mahdi", job: 'frontend', status: false },
    { id: uuidv4(), userId: 2, img: '/Avatars/soheil.jpg', name: "soheil", job: 'seo', status: true },
    { id: uuidv4(), userId: 3, img: '/Avatars/yasin.jpg', name: "yasin", job: 'backend', status: true },
]
const transition = [
    { id: uuidv4(), userId: 1, name: 'melisa', title: 'designer', img: '/Avatars/melisa.jpg', date: '2 may 2026', amount: '23', status: true },
    { id: uuidv4(), userId: 1, name: 'amir', title: 'manager', img: '/Avatars/amir.jpg', date: '2 may 2026', amount: '45', status: false },
    { id: uuidv4(), userId: 1, name: 'bahar', title: 'digital marketer', img: '/Avatars/bahar.jpg', date: '2 may 2026', amount: '73', status: true },
    { id: uuidv4(), userId: 1, name: 'reza', title: 'hacker', img: '/Avatars/reza.jpg', date: '2 may 2026', amount: '21', status: false },
    { id: uuidv4(), userId: 1, name: 'fatemeh', title: 'accoutant', img: '/Avatars/fatemeh.jpg', date: '2 may 2026', amount: '54', status: true },
    { id: uuidv4(), userId: 1, name: 'zeynab', title: 'accoutant', img: '/Avatars/zeynab.jpg', date: '2 may 2026', amount: '18', status: true },
]
const userRows = [
    { id: uuidv4(), userId: 1, username: 'soheil', img: '/Avatars/soheil.jpg', status: false, transaction: '$176.13', email: 'soheil@gmail.com', },
    { id: uuidv4(), userId: 2, username: 'bahar', img: '/Avatars/bahar.jpg', status: true, transaction: '$108.43', email: 'bahar@gmail.com', },
    { id: uuidv4(), userId: 3, username: 'yasin', img: '/Avatars/yasin.jpg', status: false, transaction: '$116.53', email: 'yasin@gmail.com', },
    { id: uuidv4(), userId: 4, username: 'melisa', img: '/Avatars/melisa.jpg', status: true, transaction: '$139.33', email: 'melisa@gmail.com', },
    { id: uuidv4(), userId: 5, username: 'zeynab', img: '/Avatars/zeynab.jpg', status: true, transaction: '$150.93', email: 'zeynab@gmail.com', },
    { id: uuidv4(), userId: 6, username: 'amir', img: '/Avatars/amir.jpg', status: false, transaction: '$185.83', email: 'amir@gmail.com', },
    { id: uuidv4(), userId: 7, username: 'fatemeh', img: '/Avatars/fatemeh.jpg', status: true, transaction: '$191.53', email: 'fatemeh@gmail.com', },
    { id: uuidv4(), userId: 8, username: 'mahdi', img: '/Avatars/mahdi.jpg', status: false, transaction: '$148.63', email: 'mahdi@gmail.com', },
    { id: uuidv4(), userId: 9, username: 'reza', img: '/Avatars/reza.jpg', status: false, transaction: '$114.73', email: 'reza@gmail.com', },
]
export { newJoin, transition, userRows }
