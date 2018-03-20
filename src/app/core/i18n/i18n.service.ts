import { Injectable, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators';

import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService, AlainI18NService } from '@delon/theme';

@Injectable()
export class I18NService implements AlainI18NService {
    private _default = 'zh-CN';
    private change$ = new BehaviorSubject<string>(null);

    private _langs = [
        { code: 'en', text: 'English' },
        { code: 'zh-CN', text: '中文' }
    ];

    constructor(
        settings: SettingsService,
        private nzI18nService: NzI18nService,
        private translate: TranslateService,
        private injector: Injector
    ) {
        const defaultLan = settings.layout.lang || translate.getBrowserLang();
        const lans = this._langs.map(item => item.code);
        this._default = lans.includes(defaultLan) ? defaultLan : lans[0];
        translate.addLangs(lans);
    }

    get change(): Observable<string> {
        return this.change$.asObservable().pipe(filter(w => w != null));
    }

    use(lang: string): Observable<any> {
        lang = lang || this.translate.getDefaultLang();
        this.nzI18nService.setLocale(lang === 'en' ? en_US : zh_CN);
        return this.translate.use(lang);
    }
    /** 获取语言列表 */
    getLangs() {
        return this._langs;
    }
    /** 翻译 */
    fanyi(key: string) {
        return this.translate.instant(key);
    }
    /** 默认语言 */
    get defaultLang() {
        return this._default;
    }
    /** 当前语言 */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
}
