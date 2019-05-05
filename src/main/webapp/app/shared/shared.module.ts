import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegexTestSuiteSharedLibsModule, RegexTestSuiteSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RegexTestSuiteSharedLibsModule, RegexTestSuiteSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [RegexTestSuiteSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegexTestSuiteSharedModule {
  static forRoot() {
    return {
      ngModule: RegexTestSuiteSharedModule
    };
  }
}
