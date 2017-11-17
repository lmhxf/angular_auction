//使angular在老的版本中可正常运行
import './polyfills.ts';
//用于关闭angular的开发者模式
import { enableProdMode } from '@angular/core';
//用于告诉angular使用哪个模块来启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//导入环境配置
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

//如果是生产模式，关闭angualr的开发者模式
if (environment.production) {
  enableProdMode();
}

//引导根模块，用于启动
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));