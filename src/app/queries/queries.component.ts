import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {QueriesService} from "./queries.service";
import {RowInterface} from "./row-interface";
import {NgOptimizedImage} from "@angular/common";

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [MatTableModule, NgOptimizedImage],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.scss'
})
export class QueriesComponent implements OnInit {

  displayedColumns: string[] = [
    'position',
    'full_name',
    'logo_url',
    'total_goals',
    'penalty_goals',
    'matches',
  ];

  dataSource: RowInterface[] = [];

  constructor(private queriesService: QueriesService) {
  }

  ngOnInit(): void {
    this.queriesService.parse_data().subscribe({
      next: (response: any[]): void => {
        console.log(response);
        this.queriesService.get_players().subscribe({
          next: (data: RowInterface[]): void => {
            console.log(data);
            this.dataSource = data;
          },
          error: (error: any): void => {
            console.error(error);
          }
        });
      },
      error: (error: any): void => {
        console.error(error);
      }
    });
  }

}
