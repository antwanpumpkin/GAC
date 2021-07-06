import { Voiture } from 'src/ws_contrat/target/generated-sources/gac/models';

export class VoitureImpl implements Voiture {
    id: string;
    marque: string;
    modele: string;
    premiereImmat: string;
    prixDachat: number;
    prixVenteEstimee: number;
    puissanceFiscale: number;
    userId: string;
}
