import { Controller, Get } from '@nestjs/common'; //Controller para decir que esta clase va a recibir peticiones HTTP. Get para decir que queremos responder a peticiones GET.
import { CompanyService } from './company.service';

@Controller('company') //Le dice a NestJS que esta clase responderá a rutas que empiecen con /company. GET http://localhost:3000/company
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get() //@Get() indica que esta función se ejecutará cuando alguien haga un GET a /company.
  async findAll() {
    return this.companyService.findAll(); //Llamamos a la funcion del servicio.
  }
}
