import { Component } from '@angular/core';
import { ChordList } from "../chord-list/chord-list";
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [ChordList, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
