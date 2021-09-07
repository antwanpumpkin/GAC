import { Repair } from "src/ws_contrat/target/generated-sources/gac/models/repair";

export class ReparationImpl implements Repair {
    id: string;
    facture: boolean;
    type: string;
    voiture_id: string;
}
