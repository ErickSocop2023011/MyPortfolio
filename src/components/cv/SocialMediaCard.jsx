import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
    {
        icon: <Github className="w-10 h-10 transition-colors group-hover:text-black" />,
        label: "GitHub",
        url: "https://github.com/ErickSocop",
    },
    {
        icon: <Linkedin className="w-10 h-10 transition-colors group-hover:text-blue-600" />,
        label: "LinkedIn",
        url: "http://www.linkedin.com/in/erick-socop-bbaa5732a",
    },
    {
        icon: <Instagram className="w-10 h-10 transition-colors group-hover:text-pink-500" />,
        label: "Instagram",
        url: "https://www.instagram.com/erxk_js?igsh=MWxneWY4M3NqczdzNA%3D%3D&utm_source=qr",
    },
    {
        icon: <Mail className="w-10 h-10 transition-colors group-hover:text-red-500" />,
        label: "Email",
        url: "mailto:ersc2006@gmail.com",
    },
];

export function SocialMediaCard() {
    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-neutral-800 dark:text-white">
            Connect with Me
        </h1>

        <ul className="flex justify-center gap-10 flex-wrap">
            {socialLinks.map(({ icon, label, url }, index) => (
            <li key={index} className="flex flex-col items-center space-y-2 group">
                <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-110 transform transition"
                >
                {icon}
                </a>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                {label}
                </span>
            </li>
            ))}
        </ul>
        </div>
    );
}
