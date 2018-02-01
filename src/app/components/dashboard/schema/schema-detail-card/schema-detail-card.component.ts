import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-schema-detail-card',
  templateUrl: './schema-detail-card.component.html',
  styleUrls: ['./schema-detail-card.component.scss']
})
export class SchemaDetailCardComponent implements OnInit {
  @Input() schemaStructure: any;
  private json: any;
  constructor() { }

  ngOnInit() {
    //console.log(this.syntaxHighlight(this.schemaStructure));
  }

  syntaxHighlight(json) {        
    if(typeof json != 'undefined') {      
      if (typeof json == 'string') {
            json = JSON.parse(json);
            json = JSON.stringify(json,null,2);
      }      
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'text-warning';
          if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                  cls = 'text-primary';
              } else {
                  cls = 'text-warning';
              }
          } else if (/true|false/.test(match)) {
              cls = 'text-info';
          } else if (/null/.test(match)) {
              cls = 'text-danger';
          }
          return '<span class="' + cls + '">' + match + '</span>';
      });
    }    
}

}
