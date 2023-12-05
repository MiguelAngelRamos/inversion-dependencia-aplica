import { INotifier } from "../interface/INotifier";

export class NotifierService {

  private notifiers: INotifier[];

  public constructor(notifier: INotifier[]) {
    this.notifiers = notifier;
  }
  public notify(message: string): void {
    for(let notifier of this.notifiers) {
      notifier.send(message);
    }
  }
  
  // private notifier: INotifier;

  // public constructor(notifier: INotifier) {
  //   this.notifier = notifier;
  // }
  // public notify(message: string): void {
  //   this.notifier.send(message);
  // }
}