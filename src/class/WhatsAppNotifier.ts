import { INotifier } from "../interface/INotifier";

export class WhatsAppNotifier implements INotifier {
  send(message: string): void {
    console.log("Enviando un WhatsApp: " + message);
  }
}