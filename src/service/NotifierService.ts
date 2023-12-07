import { INotifier } from '../interface/INotifier';

export class NotifierService {
  private readonly notifiers: INotifier[];

  constructor(notifiers: INotifier[]) {
    this.notifiers = notifiers;
  }

  public notify(message: string):void {
    for(let notifier of this.notifiers) {
      notifier.send(message);
    }
  }
}