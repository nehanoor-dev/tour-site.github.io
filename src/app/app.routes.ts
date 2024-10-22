import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    {path: '',
    component: HomeComponent,
    children: [
        {path: 'explorer', component: ActivitiesComponent},
    ]
},
    {path: 'business',
     component: BusinessComponent,
    children: [
        {path: 'contact', component: ContactFormComponent},
        {path: 'about', component: AboutComponent}
    ]
    },
];
