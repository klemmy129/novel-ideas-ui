import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { Environment } from "../environments/config/environment";

@Injectable()
export class AppConfig implements Environment{

  public readonly novelIdeasUrl = environment.novelIdeasUrl;
  public readonly production = environment.production;
}
