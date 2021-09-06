import { Reparation } from "src/ws_contrat/target/generated-sources/gac/models/reparation";

export class ReparationImpl implements Reparation {
    id: string;
    facture: boolean;
    type: string;
    voiture_id: string;
}
