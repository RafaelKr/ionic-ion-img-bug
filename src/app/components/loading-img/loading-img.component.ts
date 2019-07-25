import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-loading-img',
  templateUrl: './loading-img.component.html',
  styleUrls: ['./loading-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingImgComponent {

  @Input() animated = true;
  @Input() alt?: string;
  @Input() src?: string;

  @Input()
  set ratio(value: number) {
    this.currentRatio = value;

    if (typeof value === 'number') {
      this.fixedSize = true;
      this.paddingTop = (100 / this.currentRatio) + '%';
    } else {
      this.fixedSize = false;
      this.paddingTop = null;
    }
  }

  get ratio() {
    return this.currentRatio;
  }

  showLoading = true;

  @HostBinding('class.fixed-size')
  private fixedSize = false;

  @HostBinding('style.padding-top')
  private paddingTop: string = null;

  private currentRatio?: number;

}
