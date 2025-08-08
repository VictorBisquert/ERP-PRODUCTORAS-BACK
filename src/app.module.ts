import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { CalendarModule } from './calendar/calendar.module';
import { FinanceModule } from './finance/finance.module';
import { CompanyModule } from './company/company.module';
import { PrismaService } from './prisma.service';
@Module({
  imports: [
    ProjectsModule,
    UsersModule,
    FilesModule,
    CalendarModule,
    FinanceModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
