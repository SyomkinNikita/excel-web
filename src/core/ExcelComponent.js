import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribes = []

        this.prepare()
    }
    // Настраиваем наш компонент до  init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписывыемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribes.push(unsub)
    }

    // Инициализируем компонент, добавляем слушателей
    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
        this.unsubscribes.forEach(unsub => unsub())
    }
}
