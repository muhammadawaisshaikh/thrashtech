export interface TeamMember {
    id: number;
    name: string;
    designation: string;
    image: string;
    bio: string;
    linkedin?: string;
}

export const team: TeamMember[] = [
    {
        id: 1,
        name: "Muhammad Awais",
        designation: "Chief Executive Officer",
        image: "https://avatars.githubusercontent.com/u/24633059?v=4",
        bio: "Awais leads Thrashtech with a vision to democratize cutting-edge technology for businesses worldwide. With deep expertise in business strategy and product development, he has guided the company through transformative growth — building partnerships across three continents and championing a culture where innovation is the default.",
        linkedin: "https://www.linkedin.com/in/muhammad-awais",
    },
    {
        id: 2,
        name: "Ilyas Ahmed",
        designation: "Chief Technology Officer",
        image: "https://i.ibb.co/N4JSP9r/Screenshot-2026-10-08-at-02-08-07.png",
        bio: "Ilyas architects the technology foundation that powers every Thrashtech product. A full-stack engineer turned engineering leader, he champions clean architecture, AI-first thinking, and developer experience. He actively contributes to open source and mentors engineers across the team.",
        linkedin: "https://www.linkedin.com/in/ilyas-ahmed",
    },
    {
        id: 3,
        name: "Muhammad Idrees",
        designation: "Software Development Manager",
        image: "https://i.ibb.co/7tH6wCKV/Screenshot-2026-10-08-at-02-08-25.png",
        bio: "Idrees bridges strategy and execution — translating product vision into delivery-ready engineering plans. With years of experience managing cross-functional teams across time zones, he ensures every sprint delivers measurable value without compromising code quality or team wellbeing.",
        linkedin: "https://www.linkedin.com/in/muhammad-idrees",
    },
    {
        id: 4,
        name: "Muhammad Anis",
        designation: "Team Lead, Web Technology",
        image: "https://i.ibb.co/zWWP0yyd/Screenshot-2026-10-08-at-02-08-37.png",
        bio: "Anis leads Thrashtech's web engineering practice with a sharp eye for performance, accessibility, and pixel-perfect UIs. He has led the front-end development of products used by millions globally, and brings a constant drive to adopt emerging standards and tools.",
        linkedin: "https://www.linkedin.com/in/muhammad-anis",
    },
];
