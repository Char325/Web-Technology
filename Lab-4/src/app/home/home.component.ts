import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Author">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <h1>Books Up for Grabs</h1>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Halloween Party',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 1,
      name: 'Ikigai',
      author: 'Hector Garcia',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://images.penguinrandomhouse.com/cover/9780143130727`,
    },
    {
      id: 2,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 3,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 4,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 5,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 6,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 7,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 8,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    },
    {
      id: 9,
      name: 'Agatha Christie',
      author: 'Agatha Christie',
      desc: 'At a Hallowe’en party, Joyce – a hostile thirteen-year-old – boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the ‘evil presence’. But first he must establish whether he is looking for a murderer or a double-murderer.',
      photo: `https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400`,
    }
  ];
}

