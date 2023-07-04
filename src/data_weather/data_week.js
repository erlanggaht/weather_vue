

const data_week =  [
    {
        id:1,
        hour : 'Friday',
        temp : Math.floor(Math.random() * (35 - 10 + 1) + 10),
        weather : "rain"
    },
    {
        id:2,
        hour : 'Saturday',
        temp : `${Math.floor(Math.random() * (36 - 10 + 1) + 10)},${Math.floor(Math.random() * (10 - 0 + 1) + 0)}`,
        weather : "normal"
    },
    {
        id:3,
        hour : 'Sunday',
        temp : Math.floor(Math.random() * (33 - 10 + 1) + 10),
        weather : "normal"

    },
    {
        id:4,
        hour : 'Monday',
        temp :`${Math.floor(Math.random() * (40 - 10 + 1) + 10)},${Math.floor(Math.random() * (10 - 0 + 1) + 0)}`,
        weather : "light"

    },
    {
        id:5,
        hour : 'Tuesday',
        temp : Math.floor(Math.random() * (29 - 10 + 1) + 10),
        weather : "rain"

    },
    {
        id:6,
        hour : 'Wednesday',
        temp : Math.floor(Math.random() * (35 - 10 + 1) + 10),
        weather : "rain"

    },
    {
        id:7,
        hour : 'Thursday',
        temp : `${Math.floor(Math.random() * (27 - 10 + 1) + 10)},${Math.floor(Math.random() * (10 - 0 + 1) + 0)}`,
        weather : "rain"

    }
]


export default data_week