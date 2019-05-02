import {
  Component,
  OnInit,
  Input,
  OnChanges,
  TemplateRef
} from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import {DictionaryService} from '../services/dictionary/dictionary.service'
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  @Input() searchResult: any[];
  @Input() synonymResult:any[];
  @Input() translateResult:any[];
  @Input() errMsg:any;
  @Input() audio:any;
  @Input() option:any;
  firstIndex:number = 0;

  loading: any = true;
  constructor(
    private spinner: NgxSpinnerService,
    private dictionary: DictionaryService
  ) {}

  ngOnInit() {

  }

  isDictionary(){

    if(this.option==="Dictionary") return true;
  }
  isThesaurus(){
    if (this.errMsg == null) {
      this.errMsg = "Result Not found";
    }
    if(this.option==="Thesaurus") return true;
  }
  isTranslation(){

    if(this.option==="Translation") return true;
  }



}
