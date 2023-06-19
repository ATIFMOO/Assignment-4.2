import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  // <-- add this line
    //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
