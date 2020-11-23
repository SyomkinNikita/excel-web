import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            ...options
        })
    }
    toHTML() {
        // Не работает без ссылки, бред
        return `
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<input type="text" class="input" value="Название таблицы" />

<div>
    <div class="button"><i class="material-icons">delete_forever</i></div>
    <div class="button"><i class="material-icons">exit_to_app</i></div>
</div>
        `
    }
}