import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  doctorID: any;
  doctor: any;

  constructor(public api: ApiService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.loadDetailView();

  }
  loadDetailView() {
    const routeParams = this.route.snapshot.paramMap;
    const doctorsIdFromRoute = Number(routeParams.get('id'));

    this.doctor = this.api.allDoctors.find((doctor: { id: number; }) => doctor.id === doctorsIdFromRoute);

    console.log('id', this.doctor)

    /*this.route.paramMap.subscribe(params => {
      const doctorID = params.get('id') // Subscription param
      this.doctor = this.api.allDoctors.find((doctor: { id: any; }) => doctor.id === doctorID);
    })

    console.log('subscribe', this.doctor)*/




  }
}
