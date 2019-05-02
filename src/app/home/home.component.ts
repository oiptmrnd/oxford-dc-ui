import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl } from "@angular/forms";
import { DictionaryService } from "../services/dictionary/dictionary.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  searchWord: any;
  sResult: any[];
  tResult: any[];
  tranResult: any[];
  searchOption = "Dictionary";
  errMessage: string = "";
  audioSource: any;
  searchActivate: boolean = true;
  constructor(
    private dictionary: DictionaryService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  onChangeOption(ev) {
    this.searchOption = ev.target.value;
  }

  checkSearch() {
    if (this.searchWord) {
      this.searchActivate = false;
    } else {
      this.searchActivate = true;
    }
  }

  search() {

    console.log("hello search");
    if (this.searchWord) {
      if (this.searchOption == "Dictionary") {
        this.spinner.show();
        this.dictionary
          .searchDefinition(this.searchWord)
          .then(result => {
            this.spinner.hide();
            console.log(result);
            if (result.data.statusCode === "500") {
              this.errMessage = result.data;
            }
            this.errMessage='';
            this.sResult = result.data.results;
            if (this.sResult[0].lexicalEntries[0].pronunciations){
              this.audioSource = this.sResult[0].lexicalEntries[0].pronunciations[0].audioFile;
            }

          })
          .catch(err => {
            this.spinner.hide();
            if (!err.message) {
              this.errMessage = "Result not Found";
            }
            else {
              this.errMessage = err.message;
            }
          });
      } else if (this.searchOption == "Thesaurus") {
        this.spinner.show();
        this.dictionary
          .searchSynonyms(this.searchWord)
          .then(result => {
            this.spinner.hide();

            if (result.data.statusCode === "500") {
              this.errMessage = result.data;
            }
            this.errMessage = '';
            this.tResult = result.data.results;
            this.audioSource = "";
          })
          .catch(err => {
            this.spinner.hide();
            if (err) {
              if (!err.message) {
                this.errMessage = "Result not Found";
              }
              else {
                this.errMessage = err.message;
              }
            }
          });
      } else {
        this.spinner.show();
        this.dictionary
          .searchTranslation(this.searchWord)
          .then(result => {
            this.spinner.hide();

            if (result.data.statusCode === "500") {
              this.errMessage = result.data;

            }
            this.errMessage = '';
            this.tranResult = result.data.results;
          })
          .catch(err => {
            this.spinner.hide();
            console.log(err);
            if(!err.message){
              this.errMessage = "Result not Found";
            }
            else{
              this.errMessage = err.message;

            }


          });
      }
    }
  }
}
