import { CVDetails } from "../components/cv/CVDetails.jsx";
import { SocialMediaCard } from "../components/cv/SocialMediaCard.jsx";

export function CV() {
    return (
    <div className="space-y-10">
        <CVDetails />
        <SocialMediaCard />
        </div>
    );
}
