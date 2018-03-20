/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/cipchk/ng-alain/issues/180
 */
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core/module-import-guard';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainABCModule } from '@delon/abc';
import { AlainThemeModule } from '@delon/theme';
import { AlainAuthModule } from '@delon/auth';
import { AlainACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { environment } from '@env/environment';
const MOCKMODULE = !environment.production || environment.chore === true ?
                    [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];

// region: global config functions

// import { SimpleTableConfig } from '@delon/abc';
// export function simpleTableConfig(): SimpleTableConfig {
//     return { ps: 20 };
// }

// endregion

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot(),
        // theme
        AlainThemeModule.forRoot(),
        // abc
        AlainABCModule.forRoot(),
        // auth
        AlainAuthModule.forRoot({
            // 受限于 https://github.com/cipchk/ng-alain/issues/246， 只支持字符串形式
            // ignores: [ `\\/login`, `assets\\/` ],
            login_url: `/passport/login`
        }),
        // acl
        AlainACLModule.forRoot(),
        // cache
        DelonCacheModule.forRoot(),
        // mock
        ...MOCKMODULE
    ]
})
export class DelonModule {
  constructor( @Optional() @SkipSelf() parentModule: DelonModule) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
      return {
          ngModule: DelonModule,
          providers: [
              // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `simple-table` 的页码默认为 `20` 行
              // { provide: SimpleTableConfig, useFactory: simpleTableConfig }
          ]
      };
  }
}
