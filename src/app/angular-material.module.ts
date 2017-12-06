import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,
    MatCardModule} from '@angular/material';

import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
            MatCardModule,
            MatInputModule,
            MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule],
})
export class CustomMaterialModule { }