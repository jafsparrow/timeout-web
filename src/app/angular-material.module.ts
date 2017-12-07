import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,
    MatCardModule} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
            MatCardModule,
            MatInputModule,
            MatTabsModule,
            MatToolbarModule,
            MatDatepickerModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule],
})
export class CustomMaterialModule { }