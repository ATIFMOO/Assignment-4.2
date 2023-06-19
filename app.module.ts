import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    //...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // <-- add this line
    //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
