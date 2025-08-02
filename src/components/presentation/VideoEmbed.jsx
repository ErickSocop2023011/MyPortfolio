export function VideoEmbed({ url }) {
    return (
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-2xl shadow-lg border border-white/20 dark:border-white/10">
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={url}
            title="Presentation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
        </div>
    );
}
