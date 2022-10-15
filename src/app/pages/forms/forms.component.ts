import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  loginForm: FormGroup;
  loading = false
  error="";

  constructor(
    private _formBuilder: FormBuilder,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    public route: Router

  ) {
    this.loginForm = this._formBuilder.group({
      formSelect: FormControlName,
      password: ['',]
    });

    translateService.setDefaultLang("en");
    translateService.use("en");
   }

  ngOnInit(): void {
    
  }

  choose(){
    console.log(this.loginForm.get(["formSelect"])?.value);

    if(this.loginForm.get(["formSelect"])?.value){
      this.route.navigate(["/form1"]);
    }
  }

  get formControl(): FormControl {
    return this.loginForm?.get(['formSelect']) as FormControl;
  }

  onChange(deviceValue:any) {
    console.log(deviceValue.target.value);
    var lang =deviceValue.target.value;
      console.log("lang: ",lang);
      localStorage.setItem('lang',lang);
      let htmlTag = this.document.getElementsByTagName(
        "html"
      )[0] as HTMLHtmlElement;
      htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
      this.translateService.setDefaultLang(lang);
      this.translateService.use(lang);
      // window.location.reload();
  
      // this.changeCssFile(lang);
}
}
