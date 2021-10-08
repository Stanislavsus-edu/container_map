import ErrorRepository from '../app';

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(404)).toBe('Ресурс не найден');
});

test('no error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(100)).toBe('Unknown error');
});