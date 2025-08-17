import { CVDetails } from "../components/cv/CVDetails.jsx";
import { SocialMediaCard } from "../components/cv/SocialMediaCard.jsx";

export function CV() {
    return (
        <div className="p-6 sm:p-10 ml-16 md:ml-20">
            <div className="space-y-10">
                <CVDetails />
                <SocialMediaCard />
            </div>
        </div>
    );
}
