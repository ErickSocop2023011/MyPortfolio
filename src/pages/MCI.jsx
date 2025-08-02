import { Target, Rocket, Award } from "lucide-react";

export function MCI() {
    return (
        <section className="p-4 max-w-5xl mx-auto text-center flex flex-col gap-10">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-white">
                Crucially Important Goals (MCI)
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                These are the goals that will have the greatest impact on my professional growth.  
                Achieving them will move me closer to becoming a skilled full-stack developer  
                and cybersecurity professional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                    {
                        icon: <Target className="w-10 h-10 text-red-500" />,
                        title: "Portfolio Completion",
                        text: "From 0 to 5 fully deployed projects by December 2025, showcasing my skills in React, Node.js, and MySQL.",
                    },
                    {
                        icon: <Rocket className="w-10 h-10 text-blue-500" />,
                        title: "Skill Development",
                        text: "Reach an advanced level in full-stack development and cybersecurity fundamentals by mid-2026.",
                    },
                    {
                        icon: <Award className="w-10 h-10 text-yellow-500" />,
                        title: "Certifications",
                        text: "Earn at least 2 recognized IT certifications (e.g., AWS or Java) to strengthen my professional profile.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg"
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 dark:text-white text-neutral-800">
                            {item.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
