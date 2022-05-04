import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(public route: ActivatedRoute) { }

  allDoctors: any = []
  alreadyPushed = false;

  ngOnInit(): void {
    this.loadDoctors();

  }

  async loadDoctors() {
    let file = 'http://toma-gela.developerakademie.com/DoctorDatabase/DoctorDB/get_doctors.php';
    let response = await fetch(file);
    let listOfDoctors = await response.json();
    console.log('loaded Doctors', listOfDoctors);
    for (let i = 0; i < listOfDoctors.length; i++) {
      const currentDoctor = listOfDoctors[i];
      if (!this.alreadyPushed) {
        this.allDoctors.push(currentDoctor);
      }
    }
    this.alreadyPushed = true;
    console.log('List of Doctors', this.allDoctors)
    return this.allDoctors
  }



}
