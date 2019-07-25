import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {CreateTodoModule} from './app/create-todo.module'
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CreateTodoModule, {
  defaultEncapsulation: ViewEncapsulation.ShadowDom
})
  .catch(err => console.error(err));
