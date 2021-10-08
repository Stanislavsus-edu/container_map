export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(301, 'Ресурс перемещен навсегда')
    this.errors.set(400, 'Неверный запрос')
    this.errors.set(403, 'Доступ к ресурсу запрещен')
    this.errors.set(404, 'Ресурс не найден')
    this.errors.set(500, 'Внутренняя ошибка сервера')
    this.errors.set(502, 'Ошибка шлюза')
    this.errors.set(503, 'Служба недоступна');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}