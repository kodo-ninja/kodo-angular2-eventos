/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {AppCmp} from 'app/app_cmp.js';

bootstrap(AppCmp)
    .then(() => console.log('index inicializada'));
