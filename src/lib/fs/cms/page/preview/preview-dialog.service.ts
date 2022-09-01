import { Observable, combineLatest, of, isObservable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { TppWrapperService } from '../tpp-wrapper-service';

/**
 * This service handles the display of error messages in the FirstSpirit ContentCreator.
 *
 * @export
 * @class PreviewDialogService
 */
@Injectable({
  providedIn: 'root',
})
export class PreviewDialogService {
  constructor(private tppWrapperService: TppWrapperService) {}

  /**
   * This method creates an error dialog for a given title and message.
   *
   * @param {Observable<string>} title$ The title of the error message.
   * @param {Observable<string>} message$ The message given by the error.
   * @memberof PreviewDialogService
   */
  showErrorDialog(title$: Observable<string>, message$: Observable<string>): void {
    const title$$ = isObservable(title$) ? title$ : of('');
    const message$$ = isObservable(message$) ? message$ : of('');
    combineLatest([title$$, message$$])
      .pipe(take(1))
      .subscribe(async (errorDialogData) => {
        await this.tppWrapperService.showErrorMessageDialog(...errorDialogData);
      });
  }

  /**
   * This method creates an error dialog for a given title and message, which may be extended by a detailed message.
   *
   * @param {Observable<string>} title$ The title of the error dialog.
   * @param {Observable<string>} message$ The message given by the error.
   * @param {Observable<string>} [detailedMessage$] The detailed message given by the error. It can be used to extend the error message.
   * @memberof PreviewDialogService
   */
  showDetailedErrorDialog(title$: Observable<string>, message$: Observable<string>, detailedMessage$?: Observable<string>): void {
    const title$$ = isObservable(title$) ? title$ : of('');
    const message$$ = isObservable(message$) ? message$ : of('');
    const detailedMessage$$ = isObservable(detailedMessage$) ? detailedMessage$ : of('');
    combineLatest([title$$, message$$, detailedMessage$$])
      .pipe(take(1))
      .subscribe(async (errorDialogData) => {
        await this.tppWrapperService.showErrorMessageDialog(...errorDialogData);
      });
  }
}
