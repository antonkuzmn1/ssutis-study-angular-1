import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [
    MatDivider,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss'
})
export class WebComponent {

}
