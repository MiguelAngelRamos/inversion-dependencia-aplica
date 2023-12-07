import { EmailNotifier } from "./class/EmailNotifier";
import { FacebookNotifier } from "./class/FacebookNotifier";
import { WhatsAppNotifier } from "./class/WhatsAppNotifier";
import { INotifier } from "./interface/INotifier";
import { NotifierService } from "./service/NotifierService";

const notifiers: INotifier [] = [
  new EmailNotifier(),
  new WhatsAppNotifier(),
  new FacebookNotifier()
];

const service = new NotifierService(notifiers);
service.notify("Hola a todos desde el curso de Tdd");
// const notifierEmail: INotifier = new EmailNotifier();
// const notiferWhatsApp: INotifier = new WhatsAppNotifier();

// // const service = new NotifierService(notifierEmail);
// const service = new NotifierService(notiferWhatsApp);
// service.notify("Enviando un Wsp - Curso de Tdd ")

