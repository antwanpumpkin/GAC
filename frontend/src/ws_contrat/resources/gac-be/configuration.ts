import { APP_INITIALIZER, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConfiguration } from 'src/ws_contrat/target/generated-sources/gac/api-configuration';

export function initDeclarationConfiguration(config: ApiConfiguration) {
  return () => {
    config.rootUrl = environment.urlBe;
  };
}
export const INIT_DECLARATION_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initDeclarationConfiguration,
  deps: [ApiConfiguration],
  multi: true
};

