import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberConversionComponent } from './number-conversion/number-conversion.component';
import { FormGroup,ReactiveFormsModule,FormsModule,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NumberConversionComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : true
})
export class AppComponent {
  title = 'ProgrammersCalculater';
}
