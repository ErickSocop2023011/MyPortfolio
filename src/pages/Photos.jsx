import { PhotoGrid } from "../components/photos/PhotoGrid.jsx";

export function Photos() {
    return (
        <section className="p-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-white">Professional Photos</h2>
        <PhotoGrid />
        </section>
    );
}
