import { Component } from '@angular/core';
import { ChordList } from "../chord-list/chord-list";

@Component({
  selector: 'app-home',
  imports: [ChordList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
