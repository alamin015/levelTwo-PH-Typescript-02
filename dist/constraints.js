"use strict";
{
    const student = (info) => {
        const institute = "Programming Hero";
        return Object.assign(Object.assign({}, info), { institute });
    };
    const student1 = student({
        id: 12,
        name: "alamin",
    });
}
