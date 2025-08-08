import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

/*
import { Injectable } from '@nestjs/common';
Importa el decorador @Injectable() de NestJS.
Esto indica que esta clase (CompanyService) puede inyectarse en otras partes (como un controlador).
En resumen: permite que NestJS la use como servicio.
*/

@Injectable() //Este decorador marca la clase como "inyectable", es decir, que otros módulos o controladores pueden recibirla como dependencia.
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {} //El constructor recibe el servicio de prisma. Al poner private readonly, se guarda directamente como una propiedad de la clase. Así puedes luego usar this.prisma dentro de la clase para consultar la base de datos.
  async findAll() {
    //Aqui de prisma llamamos a organizations, que esta en el schema el model
    return this.prisma.organizations.findMany();
  }
}
