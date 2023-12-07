import { INotifier } from '../../../interface/INotifier';

import { NotifierService } from '../../../service/NotifierService';


describe('NotifierService', () => {

  it('should accept an array of INotifier instances in constructor', () => {
    // Crear un arreglo de objetos que simulan (mock) la interfaz INotifer
    const notifiers: INotifier [] = [
      { send: jest.fn() },
      { send: jest.fn() }
    ];
    // Instanciar NotifierService  pasando el arreglo de mocks como argumento en el constructor
    const service = new NotifierService(notifiers);

    // Verificar si la instancia creada es efectivamente una instancia de NotifierService
    expect(service).toBeInstanceOf(NotifierService);
  });

  it('should call send on each notifier with the same message when notify is called', () => {

    //* Crear 2 objetos simulados
    const firstNotifierMock: INotifier = { send: jest.fn()};
    const secondNotifierMock: INotifier = { send: jest.fn()};

    const service = new NotifierService([firstNotifierMock, secondNotifierMock]);

    const message = 'Test message';

    // Llamo al método notify
    service.notify(message);

    expect(firstNotifierMock.send).toHaveBeenCalledWith(message);
    expect(secondNotifierMock.send).toHaveBeenCalledWith(message);

  })


});