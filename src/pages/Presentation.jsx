import { VideoEmbed } from "../components/presentation/VideoEmbed.jsx";

export function Presentation() {
    return (
        <section className="p-4 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-white">
            Personal Presentation
        </h2>

        <VideoEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" />

        </section>
    );
}

