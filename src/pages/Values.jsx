import { BadgeCheck, Handshake, Brain, HandHeart, Heart, MessagesSquare, AlarmClockCheck, BriefcaseBusiness, UsersRound } from "lucide-react";

const values = [
    {
        icon: <BadgeCheck className="text-primary w-8 h-8" />,
        title: "Integrity",
        description: "I stand by ethical principles and do what’s right, even when no one is watching.",
    },
    {
        icon: <Handshake className="text-primary w-8 h-8" />,
        title: "Collaboration",
        description: "I believe teamwork leads to better results and a more enriching experience.",
    },
    {
        icon: <Brain className="text-primary w-8 h-8" />,
        title: "Continuous Learning",
        description: "I am constantly growing through learning and adapting to new challenges.",
    },
    {
        icon: <HandHeart className="text-primary w-8 h-8" />,
        title: "Empathy",
        description: "Understanding and supporting others is at the core of how I work.",
    },
    {
        icon: <Heart className="text-primary w-8 h-8" />,
        title: "Passion",
        description: "I pour my heart into everything I do, striving to make a meaningful impact.",
    },
    {
        icon: <MessagesSquare className="text-primary w-8 h-8" />,
        title: "Communication",
        description: "I value open and honest communication, fostering a culture of feedback and growth.",
    },
    {
        icon: <AlarmClockCheck className="text-primary w-8 h-8" />,
        title: "Punctuality",
        description: "I respect others' time and strive to be punctual in all my commitments.",
    },
    {
        icon: <BriefcaseBusiness className="text-primary w-8 h-8" />,
        title: "Professionalism",
        description: "I maintain a high standard of professionalism in all my interactions and work.",
    },
    {
        icon: <UsersRound className="text-primary w-8 h-8" />,
        title: "Leadership",
        description: "I inspire and guide others to achieve their best, fostering a culture of collaboration and respect.",
    },
    ];

export function Values() {
    return (
        <div className="p-6 sm:p-10 ml-16 md:ml-20"> {/* Empuja las tarjetas un poco a la derecha */}
            <h1 className="text-3xl font-bold mb-6 text-center">Professional Values</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                    >
                        <div className="flex items-center justify-center mb-4">
                            {value.icon}
                        </div>
                        <h2 className="text-xl font-semibold text-center mb-2">{value.title}</h2>
                        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

