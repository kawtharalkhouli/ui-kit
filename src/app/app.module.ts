import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReusableComponentsModule } from 'realsoft-reusable-components';
import { MatIconModule } from '@angular/material/icon';
import { CustomAlertTestingComponent } from './custom-alert-testing/custom-alert-testing.component';
import { CustomButtonTestingComponent } from './custom-button-testing/custom-button-testing.component';
import { CustomIconTestingComponent } from './custom-icon-testing/custom-icon-testing.component';
import { CustomInputTestingComponent } from './custom-input-testing/custom-input-testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomChipsTestingComponent } from './custom-chips-testing/custom-chips-testing.component';
import { CustomTextAreaTestingComponent } from './custom-text-area-testing/custom-text-area-testing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomSpinnerTestingComponent } from './custom-spinner-testing/custom-spinner-testing.component';
import {MatInputModule} from '@angular/material/input';
import { ProgressBarTestingComponent } from './progress-bar-testing/progress-bar-testing.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { CustomCheckboxTestingComponent } from './custom-checkbox-testing/custom-checkbox-testing.component';
import { MatMenuModule } from "@angular/material/menu";
import { CustomMenuTestingComponent } from './custom-menu-testing/custom-menu-testing.component';
import { CustomDialogTestingComponent } from './custom-dialog-testing/custom-dialog-testing.component';
import { CustomRadionBtnTestingComponent } from './custom-radion-btn-testing/custom-radion-btn-testing.component';
import { CustomTabsTestingComponent } from './custom-tabs-testing/custom-tabs-testing.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CustomPanelTestingComponent } from './custom-panel-testing/custom-panel-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomAlertTestingComponent,
    CustomButtonTestingComponent,
    CustomIconTestingComponent,
    CustomInputTestingComponent,
    CustomChipsTestingComponent,
    CustomTextAreaTestingComponent,
    CustomSpinnerTestingComponent,
    ProgressBarTestingComponent,
    CustomSliderComponent,
    CustomCheckboxTestingComponent,
    CustomMenuTestingComponent,
    CustomDialogTestingComponent,
    CustomRadionBtnTestingComponent,
    CustomTabsTestingComponent,
    CustomPanelTestingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReusableComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReusableComponentsModule]
})
export class AppModule { }
