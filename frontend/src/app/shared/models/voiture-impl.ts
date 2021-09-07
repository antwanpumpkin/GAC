import { Car } from 'src/ws_contrat/target/generated-sources/gac/models/car';

export class VoitureImpl implements Car {
    id: string;
    marque: string;
    modele: string;
    premiereImmat: string;
    prixDachat: number;
    prixVenteEstimee: number;
    puissanceFiscale: number;
    userId: string;
}
