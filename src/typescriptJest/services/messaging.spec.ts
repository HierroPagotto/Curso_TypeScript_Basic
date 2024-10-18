import { Messaging } from "./messaging";

const creatSut = () => {
  return new Messaging();
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    //system under test
    const sut = creatSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

it('should return console.log once', () => {
  const sut = creatSut();
  const consoleSpy = jest.spyOn(console, 'log');
  sut.sendMessage('teste');
  expect(consoleSpy).toHaveBeenCalledTimes(1);
});

it('should return console.log with "Mensagem enviada com sucesso:" and msg', () => {
  const sut = creatSut();
  const consoleSpy = jest.spyOn(console, 'log');
  sut.sendMessage('teste');
  expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
});
});



