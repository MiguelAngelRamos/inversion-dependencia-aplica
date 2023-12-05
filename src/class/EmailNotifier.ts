import { INotifier } from "../interface/INotifier";

export class EmailNotifier implements INotifier {
  send(message: string): void {
    console.log("Enviando un Email: " + message);
  }
}