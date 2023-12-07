import { INotifier } from "../interface/INotifier";

export class FacebookNotifier implements INotifier {
  send(message: string): void {
    console.log("Enviando un mensaje desde Facebook: " + message);
  }
}