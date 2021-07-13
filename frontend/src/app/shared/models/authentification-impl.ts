import { Authentification } from "src/ws_contrat/target/generated-sources/gac/models";

export class AuthentificationImpl implements Authentification {
    login: string;
    password: string;
}
