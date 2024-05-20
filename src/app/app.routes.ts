/**
 * Copyright 2024 Anton Kuzmin (https://github.com/antonkuzmn1)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {QueriesComponent} from "./queries/queries.component";
import {WebComponent} from "./web/web.component";

/**
 * Defines the routes configuration for the Angular application.
 * Each route object consists of a path and the component to render for that path.
 * Additionally, redirects are defined for the default path and any other unmatched paths.
 */
export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'queries', component: QueriesComponent},
  {path: 'web', component: WebComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
