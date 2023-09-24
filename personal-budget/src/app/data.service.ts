import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataSource : any = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#33FFAF',
                '#FF3339',
            ]
    }
    ],
      labels: []
  };

  constructor(private http: HttpClient) {}
  // ngOnInit(): void {
  generateData(){
    return this.http.get('http://localhost:3000/budget');}
}
