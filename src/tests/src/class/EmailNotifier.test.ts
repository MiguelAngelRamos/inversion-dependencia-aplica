import { EmailNotifier } from '../../../class/EmailNotifier';
import { INotifier } from '../../../interface/INotifier';

describe('EmailNotifier', () => {

  it('should implement INotifier interface', () => {
    const notifier:INotifier = new EmailNotifier();
    expect(notifier).toBeInstanceOf(EmailNotifier);
  });

  it('should have a send method that logs a message', () => {
    // Vamos a crear un espía (spy)
    //* la clase console y metodo es log "console.log" "console.error"
    const consoleSpy = jest.spyOn(console, 'log');
    const notifier:INotifier = new EmailNotifier();

    const message = 'Test email message';

    // llamar al método send de notifer
    notifier.send(message);
    expect(consoleSpy).toHaveBeenCalledWith('Enviando un Email: ' + message);
  });

});
