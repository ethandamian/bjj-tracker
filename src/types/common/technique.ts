export type TechniquePosition =
    | "Full Guard"
    | "Half Guard"
    | "Mounted"
    | "Spider Guard"
    | "Lasso Guard";

export type TechniqueType = "Submission" | "Sweep" | "Defense";

export type TechniqueProficiency = "Learning" | "Needs work" | "Confident";

export interface Technique {
    name: string;
    position: TechniquePosition;
    type: TechniqueType;
    proficiency: TechniqueProficiency;
    description?: string;
}
