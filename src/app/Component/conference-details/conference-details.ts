import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Conference } from '../../Models/conference.model';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  conference=input.required<Conference>();
}
