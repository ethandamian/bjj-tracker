import { TechniqueCard } from "@/components/ui";
import { techniquesData } from "@/mocks/techniquesData";

import "./MyTechniquesPage.css";

export const MyTechniquesPage = () => {
    return (
        <div>
            <h1 className="page-title">My Techniques</h1>
            <section className="main-content">
                {techniquesData.map((technique) => (
                    <TechniqueCard key={technique.name} technique={technique} />
                ))}
            </section>
        </div>
    );
};
