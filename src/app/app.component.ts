import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      fieldGroup: [
        {
          templateOptions: { label: 'Liab' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'select',
              templateOptions: {
                label: 'First name',
                options: [
                  { label: 'John', value: 'John' },
                  { label: 'Jane', value: 'Jane' },
                  { label: 'Bob', value: 'Bob' },
                ],
                required: false,
              },
            },
            {
              key: 'age',
              type: 'select',
              templateOptions: {
                label: 'Age',
                options: [
                  { label: '18', value: '18' },
                  { label: '19', value: '19' },
                  { label: '20', value: '20' },
                ],
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Destination' },
          fieldGroup: [
            {
              key: 'country',
              type: 'select',
              templateOptions: {
                label: 'Country',
                options: [
                  { label: 'USA', value: 'USA' },
                  { label: 'Canada', value: 'Canada' },
                  { label: 'Mexico', value: 'Mexico' },
                ],
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Day of the trip' },
          fieldGroup: [
            {
              key: 'day',
              type: 'select',
              templateOptions: {
                label: 'Day of the trip',
                options: [
                  { label: 'Monday', value: 'Monday' },
                  { label: 'Tuesday', value: 'Tuesday' },
                  { label: 'Wednesday', value: 'Wednesday' },
                ],
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Feed Back' },
          fieldGroup: [
            {
              key: 'textArea',
              type: 'textarea',
              templateOptions: {
                label: 'Comments',
                type: 'textarea',
                required: false,
              },
            },
          ],
        },
      ],
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
