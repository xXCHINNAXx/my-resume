import { Component, OnInit } from '@angular/core';
import {faFileDownload, faInfo, faEnvelope} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-rmenu',
  templateUrl: './rmenu.component.html',
  styleUrls: ['./rmenu.component.scss']
})
export class RMenuComponent implements OnInit {
  DownloadIcon = faFileDownload;
  infoIcon =faInfo;
  mailIcon = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
