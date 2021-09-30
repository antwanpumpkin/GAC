import { UserInfos } from "src/ws_contrat/target/generated-sources/gac/models";

export class UserInfosImpl implements UserInfos {
    login: string;
    nom: string;
    password: string;
    prenom: string;
    id: string;
    token: string;
}
