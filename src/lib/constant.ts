// time-slots.ts (or constants.ts)

import { BookOpen, Bot, GalleryVerticalEnd, Settings2 } from "lucide-react";

export const TIME_CARD_TIMES: string[] = Array.from({ length: 24 * 4 }, (_, i) => {
    const h = Math.floor(i / 4).toString().padStart(2, "0")
    const m = ((i % 4) * 15).toString().padStart(2, "0")
    return `${h}:${m}`
})

export const SIDEBAR_NAV_DATA = {
    user: {
        name: "Ankit Mahato ",
        email: "ankit.mahatoadani.com",
        avatar: "https://github.com/shadcn.png",
    },
    org: {
        name: "Power Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
    },
    navMain: [
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                { title: "Genesis", url: "#" },
                { title: "Explorer", url: "#" },
                { title: "Quantum", url: "#" },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                { title: "Introduction", url: "#" },
                { title: "Get Started", url: "#" },
                { title: "Tutorials", url: "#" },
                { title: "Changelog", url: "#" },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                { title: "General", url: "#" },
                { title: "Team", url: "#" },
                { title: "Billing", url: "#" },
                { title: "Limits", url: "#" },
            ],
        },
    ],

};

export const ACTUAL_CHART_DATA = [
    { date: "2025-09-12", sell_bid: 222, purches_bid: 150 },
    { date: "2025-04-02", sell_bid: 97, purches_bid: 180 },
    { date: "2025-04-03", sell_bid: 167, purches_bid: 120 },
    { date: "2025-04-04", sell_bid: 242, purches_bid: 260 },
    { date: "2025-04-05", sell_bid: 373, purches_bid: 290 },
    { date: "2025-04-06", sell_bid: 301, purches_bid: 340 },
    { date: "2025-04-07", sell_bid: 245, purches_bid: 180 },
    { date: "2025-04-08", sell_bid: 409, purches_bid: 320 },
    { date: "2025-04-09", sell_bid: 59, purches_bid: 110 },
    { date: "2024-04-10", sell_bid: 261, purches_bid: 190 },
    { date: "2024-04-11", sell_bid: 327, purches_bid: 350 },
    { date: "2024-04-12", sell_bid: 292, purches_bid: 210 },
    { date: "2024-04-13", sell_bid: 342, purches_bid: 380 },
    { date: "2024-04-14", sell_bid: 137, purches_bid: 220 },
    { date: "2024-04-15", sell_bid: 120, purches_bid: 170 },
    { date: "2024-04-16", sell_bid: 138, purches_bid: 190 },
    { date: "2024-04-17", sell_bid: 446, purches_bid: 360 },
    { date: "2024-04-18", sell_bid: 364, purches_bid: 410 },
    { date: "2024-04-19", sell_bid: 243, purches_bid: 180 },
    { date: "2024-04-20", sell_bid: 89, purches_bid: 150 },
    { date: "2024-04-21", sell_bid: 137, purches_bid: 200 },
    { date: "2024-04-22", sell_bid: 224, purches_bid: 170 },
    { date: "2024-04-23", sell_bid: 138, purches_bid: 230 },
    { date: "2024-04-24", sell_bid: 387, purches_bid: 290 },
    { date: "2024-04-25", sell_bid: 215, purches_bid: 250 },
    { date: "2024-04-26", sell_bid: 75, purches_bid: 130 },
    { date: "2024-04-27", sell_bid: 383, purches_bid: 420 },
    { date: "2024-04-28", sell_bid: 122, purches_bid: 180 },
    { date: "2024-04-29", sell_bid: 315, purches_bid: 240 },
    { date: "2024-04-30", sell_bid: 454, purches_bid: 380 },
    { date: "2024-05-01", sell_bid: 165, purches_bid: 220 },
    { date: "2024-05-02", sell_bid: 293, purches_bid: 310 },
    { date: "2024-05-03", sell_bid: 247, purches_bid: 190 },
    { date: "2024-05-04", sell_bid: 385, purches_bid: 420 },
    { date: "2024-05-05", sell_bid: 481, purches_bid: 390 },
    { date: "2024-05-06", sell_bid: 498, purches_bid: 520 },
    { date: "2024-05-07", sell_bid: 388, purches_bid: 300 },
    { date: "2024-05-08", sell_bid: 149, purches_bid: 210 },
    { date: "2024-05-09", sell_bid: 227, purches_bid: 180 },
    { date: "2024-05-10", sell_bid: 293, purches_bid: 330 },
    { date: "2024-05-11", sell_bid: 335, purches_bid: 270 },
    { date: "2024-05-12", sell_bid: 197, purches_bid: 240 },
    { date: "2024-05-13", sell_bid: 197, purches_bid: 160 },
    { date: "2024-05-14", sell_bid: 448, purches_bid: 490 },
    { date: "2024-05-15", sell_bid: 473, purches_bid: 380 },
    { date: "2024-05-16", sell_bid: 338, purches_bid: 400 },
    { date: "2024-05-17", sell_bid: 499, purches_bid: 420 },
    { date: "2024-05-18", sell_bid: 315, purches_bid: 350 },
    { date: "2024-05-19", sell_bid: 235, purches_bid: 180 },
    { date: "2024-05-20", sell_bid: 177, purches_bid: 230 },
    { date: "2024-05-21", sell_bid: 82, purches_bid: 140 },
    { date: "2024-05-22", sell_bid: 81, purches_bid: 120 },
    { date: "2024-05-23", sell_bid: 252, purches_bid: 290 },
    { date: "2024-05-24", sell_bid: 294, purches_bid: 220 },
    { date: "2024-05-25", sell_bid: 201, purches_bid: 250 },
    { date: "2024-05-26", sell_bid: 213, purches_bid: 170 },
    { date: "2024-05-27", sell_bid: 420, purches_bid: 460 },
    { date: "2024-05-28", sell_bid: 233, purches_bid: 190 },
    { date: "2024-05-29", sell_bid: 78, purches_bid: 130 },
    { date: "2024-05-30", sell_bid: 340, purches_bid: 280 },
    { date: "2024-05-31", sell_bid: 178, purches_bid: 230 },
    { date: "2024-06-01", sell_bid: 178, purches_bid: 200 },
    { date: "2024-06-02", sell_bid: 470, purches_bid: 410 },
    { date: "2024-06-03", sell_bid: 103, purches_bid: 160 },
    { date: "2024-06-04", sell_bid: 439, purches_bid: 380 },
    { date: "2024-06-05", sell_bid: 88, purches_bid: 140 },
    { date: "2024-06-06", sell_bid: 294, purches_bid: 250 },
    { date: "2024-06-07", sell_bid: 323, purches_bid: 370 },
    { date: "2024-06-08", sell_bid: 385, purches_bid: 320 },
    { date: "2024-06-09", sell_bid: 438, purches_bid: 480 },
    { date: "2024-06-10", sell_bid: 155, purches_bid: 200 },
    { date: "2024-06-11", sell_bid: 92, purches_bid: 150 },
    { date: "2024-06-12", sell_bid: 492, purches_bid: 420 },
    { date: "2024-06-13", sell_bid: 81, purches_bid: 130 },
    { date: "2024-06-14", sell_bid: 426, purches_bid: 380 },
    { date: "2024-06-15", sell_bid: 307, purches_bid: 350 },
    { date: "2024-06-16", sell_bid: 371, purches_bid: 310 },
    { date: "2024-06-17", sell_bid: 475, purches_bid: null },
    { date: "2024-06-18", sell_bid: 107, purches_bid: null },
    { date: "2024-06-19", sell_bid: 341, purches_bid: null },
    { date: "2024-06-20", sell_bid: 408, purches_bid: null },
    { date: "2024-06-21", sell_bid: 169, purches_bid: null },
    { date: "2024-06-22", sell_bid: 317, purches_bid: null },
    { date: "2024-06-23", sell_bid: 480, purches_bid: null },
    { date: "2024-06-24", sell_bid: 132, purches_bid: null },
    { date: "2024-06-25", sell_bid: 141, purches_bid: null },
    { date: "2024-06-26", sell_bid: 434, purches_bid: null },
    { date: "2024-06-27", sell_bid: 448, purches_bid: null },
    { date: "2024-06-28", sell_bid: 149, purches_bid: null },
    { date: "2024-06-29", sell_bid: 103, purches_bid: null },
    { date: "2024-06-30", sell_bid: 446, purches_bid: null },
]

export const EXPANDED_DATA = [
    {
        "date": "2025-09-12",
        "timeblock": "00:00",
        "sellbid": 202,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "00:15",
        "sellbid": 212,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "00:30",
        "sellbid": 232,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "00:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "01:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "01:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "01:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "01:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "02:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "02:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "02:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "02:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "03:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "03:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "03:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "03:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "04:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "04:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "04:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "04:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "05:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "05:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "05:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "05:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "06:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "06:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "06:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "06:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "07:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "07:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "07:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "07:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "08:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "08:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "08:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "08:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "09:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "09:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "09:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "09:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "10:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "10:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "10:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "10:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "11:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "11:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "11:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "11:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "12:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "12:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "12:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "12:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "13:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "13:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "13:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "13:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "14:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "14:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "14:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "14:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "15:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "15:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "15:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "15:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "16:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "16:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "16:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "16:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "17:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "17:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "17:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "17:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "18:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "18:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "18:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "18:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "19:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "19:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "19:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "19:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "20:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "20:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "20:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "20:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "21:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "21:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "21:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "21:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "22:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "22:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "22:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "22:45",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "23:00",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "23:15",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "23:30",
        "sellbid": 222,
        "purchasebid": 150
    },
    {
        "date": "2025-09-12",
        "timeblock": "23:45",
        "sellbid": 222,
        "purchasebid": 150
    }
]




export const EXPANDED_DATA_T = [
    {
        date: "2025-09-12",
        timeBlock: "09:00",
        sellBid: "100",
        purchaseBid: "95",
    },
    {
        date: "2025-09-12",
        timeBlock: "09:15",
        sellBid: "102",
        purchaseBid: "96",
    },
    {
        date: "2025-09-12",
        timeBlock: "09:30",
        sellBid: "103",
        purchaseBid: "97",
    },
    {
        date: "2025-09-12",
        timeBlock: "09:45",
        sellBid: "105",
        purchaseBid: "98",
    },
    {
        date: "2025-09-12",
        timeBlock: "10:00",
        sellBid: "106",
        purchaseBid: "100",
    },
    {
        date: "2025-09-13",
        timeBlock: "09:00",
        sellBid: "100",
        purchaseBid: "95",
    },
    {
        date: "2025-09-13",
        timeBlock: "09:15",
        sellBid: "102",
        purchaseBid: "96",
    },
    {
        date: "2025-09-13",
        timeBlock: "09:30",
        sellBid: "103",
        purchaseBid: "97",
    },
    {
        date: "2025-09-13",
        timeBlock: "09:45",
        sellBid: "105",
        purchaseBid: "98",
    },
    {
        date: "2025-09-13",
        timeBlock: "10:00",
        sellBid: "106",
        purchaseBid: "100",
    },
];
