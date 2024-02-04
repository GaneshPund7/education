import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks'; 
  private jobData = 'http://localhost:3000/api/jobdata'; 

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get(this.apiUrl);
  }
getJobData(){
  return this.http.get(this.jobData);
}
updateData(id: string, task: any) {
  return this.http.put(`${this.jobData}/${id}`, task);
}
deleteJobs(id: string) {
  return this.http.delete(`${this.jobData}/${id}`);
}
  createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }
  postJobDetails(task: any) {
    return this.http.post(this.jobData, task);
  }
  

  updateTask(id: string, task: any) {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
