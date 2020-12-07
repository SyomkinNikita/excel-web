import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/dom";
import {changeTitle} from "@/redux/actions";
import {defaultTitle} from "@/constants";
import {debounce} from "@core/utils";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],
            ...options
        })
    }

    toHTML() {
        const title = this.store.getState().title || defaultTitle
        // Не работает без ссылки, бред
        return `
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<input type="text" class="input" value="${title}" />

<div>
    <div class="button"><i class="material-icons">delete_forever</i></div>
    <div class="button"><i class="material-icons">exit_to_app</i></div>
</div>
        `
    }

    onInput(event) {
        const $target = $(event.target)
        this.$dispatch(changeTitle($target.text()))
    }
}