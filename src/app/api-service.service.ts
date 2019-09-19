import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getAllContact() {
    return this.http.get<any>(`http://5d8280ffc9e3410014070ab9.mockapi.io/contact/contact/`)
  }

  getContactById(id) {
    return this.http.get<any>(`https://5d8280ffc9e3410014070ab9.mockapi.io/contact/contact/${id}`)
  }
  updateContact(obj,id) {
    return this.http.put<any>(`https://5d8280ffc9e3410014070ab9.mockapi.io/contact/contact/${id}`,obj)
  }
  deleteContact(id) {
    return this.http.delete<any>(`https://5d8280ffc9e3410014070ab9.mockapi.io/contact/contact/${id}`)
  }
  createContact(obj){
    return this.http.post<any>(`https://5d8280ffc9e3410014070ab9.mockapi.io/contact/contact/`,obj)
  }
}
