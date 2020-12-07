import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribes = []
        this.storeSub = null

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

    $dispatch(action) {
        this.store.dispatch(action)
    }

    storeChanged() {}

    isWatching(key) {
        return this.subscribe.includes(key)
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
