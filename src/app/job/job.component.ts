import { Component, OnInit, Input } from '@angular/core'
import { TaskService } from '../task.service'
import { JobModel } from '../model/job-model'
import { jobDetailsModel } from '../model/job-Details-Model'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  myForm: FormGroup
  items: JobModel[] = []
  item!: JobModel
  jobItems: jobDetailsModel[] = []
  jobItem!: jobDetailsModel
  companyImg: any
  applyNow: any
  get fc () {
    return this.myForm.controls
  }
  constructor (private jobApi: TaskService, private fb: FormBuilder) {
    this.myForm = this.fb.group({})
  }

  ngOnInit (): void {
    this.getJobData()
  }
  onSubmit () {
    if (this.myForm.valid) {
      const formData = this.myForm.value
      this.postFormData(formData)
      alert('You have Successfully Log In')
    } else {
      alert('Please enter valid data')
    }
  }
  postFormData (data: any) {
    this.jobApi.postJobDetails(data).subscribe(
      response => {
        console.log('API response:', response)
      },
      error => {
        console.error('API error:', error)
      }
    )
  }
  getJobData () {
    this.jobApi.getJobData().subscribe((res: any) => {
      this.jobItems = res
    })
  }
}
