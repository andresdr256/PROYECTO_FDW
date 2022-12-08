import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { LatestTechnologiesComponent } from './latest-technologies/latest-technologies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomePageComponent,
    FooterComponent,
    BreakingNewsComponent,
    LatestTechnologiesComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomePageComponent},
      {path: 'breaking-news', component: BreakingNewsComponent},
      {path: 'latest-technologies', component: LatestTechnologiesComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
