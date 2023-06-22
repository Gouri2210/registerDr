import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private htp : HttpClient) { }

  getData()
  {
    return this.htp.get('http://localhost:3000/registration');
  }
  postData(dt:any)
  {
    return this.htp.post('http://localhost:3000/registration',dt)
  }
  deleteData(dt:any)
  {
    return this.htp.delete('http://localhost:3000/registration/'+dt);
  }
  putData(dt:any)
  {
    return this.htp.put('http://localhost:3000/registration/'+dt.id, dt)
  }
}
