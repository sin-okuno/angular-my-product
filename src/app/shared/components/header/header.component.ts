import { Component } from '@angular/core';
import { UrlConst } from 'src/app/pages/constants/url-const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public ListScreenId = UrlConst.PATH_LIST;
  public RegScreenId = UrlConst.PATH_REG;
}
