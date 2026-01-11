import type { Technique } from "@/types/common/technique";

import "./TechniqueCard.css";

interface TechniqueCardProps {
    technique: Technique;
}
export const TechniqueCard = ({ technique }: TechniqueCardProps) => {
    return (
        <article className="card">
            <span className="technique-proficiency">
                {technique.proficiency}
            </span>
            <header className="card-header">
                <h3 className="technique-name">{technique.name}</h3>
                <span className="technique-meta-data">
                    {technique.position} • {technique.type}
                </span>
            </header>
            <section className="card-content">
                <p>Practiced 2 days ago</p>
            </section>
            <footer>
                <button>Practiced</button>
            </footer>
        </article>
    );
};
