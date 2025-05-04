import img1 from "../../src/assets/exp/reactboot.png"
import img2 from "../../src/assets/exp/socket.png"
import img3 from "../../src/assets/exp/aws.png"

export const ExpData = [
    {
        id: 1,
        img: img1,
        role_title: 'Junior Web Developer',
        company_name: 'WebDev Studios',
        description: 'Chicago, IL | 2008 - 2012',
        info: [
            "Built and maintained WordPress and custom PHP-based websites.",
            "Assisted in migrating legacy systems to modern JavaScript frameworks.",
        ],
    },
    {
        id: 2,
        img: img2,
        role_title: 'Full-Stack Developer',
        company_name: 'Digital Innovations LLC',
        description: 'New York, NY | 2012 - 2018',
        info: [
            "Developed custom CRM solutions using Django and PostgreSQL.",
            "Built a real-time analytics dashboard with WebSocket integration.",
            "Collaborated with UX designers to improve frontend performance by 30%."
        ],
    },
    {
        id: 3,
        img: img3,
        role_title: 'Senio Full-Stack Developer',
        company_name: 'Tech Solutions Inc.',
        description: 'San Francisco, CA | 2018 - 2022',
        info: [
            "Build a scalable SaaS platform using React, Node.js, and AWS.",
            "Reduced API response time by 40% by optimizing database queries and implementing caching.",
            "Integrated Stripe payments and improved checkout flow, increasing conversions by 25%."
        ],
    },
];
