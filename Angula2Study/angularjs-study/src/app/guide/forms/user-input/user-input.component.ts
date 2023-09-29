import { Component } from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss']
})

export class UserInputComponent {
    clickMessage = '';
    values = '';
    values2 = '';
    values3 = '';
    values4 = '';
    values5 = '';
    onClickMe() {
        this.clickMessage = 'You are my hero！';
    }
    onKey(event: any) {
        // event.key 各个按键本身
        // event.target.value 该元素的当前内容
        this.values += event.target.value + ' | ';
    }

    onKey2(event: KeyboardEvent) {
        // event.key 各个按键本身
        // event.target.value 该元素的当前内容
        this.values2 += (<HTMLInputElement>event.target).value + ' | ';
    }
    onKey3(value: string) {
        // event.key 各个按键本身
        // event.target.value 该元素的当前内容
        this.values3 += value + ' | ';
    }
    onEnter(value: string) {
        this.values4 = value;
    }
    update(value: string) {
        this.values5 = value;
    }
}
