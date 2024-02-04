import { Component, OnInit } from '@angular/core'
import { TaskService } from '../task.service'
import { JobModel } from '../model/job-model'
import { jobDetailsModel } from '../model/job-Details-Model'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  myForm: FormGroup
  items: JobModel[] = []
  item!: JobModel
  jobItems: jobDetailsModel[] = []
  jobItem!: jobDetailsModel;
  get fc () {
    return this.myForm.controls
  }
  constructor (private jobApi: TaskService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      companyImg: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      responsibilities: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      applyNow: new FormControl('', Validators.required),
      telegram: new FormControl(''),
      whatsapp: new FormControl('')
    })
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
