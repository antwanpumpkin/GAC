import { Voiture } from "src/ws_contrat/target/generated-sources/gac/models";

export class VoitureImpl implements Voiture {
    marque: string;
    modele: string;
    premiereImmat: string;
    prixDachat: number;
    prixVenteEstimee: number;
    puissanceFiscale: number;
}
