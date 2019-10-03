import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { OutputObject, OutputObjectPipe } from './output-object.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/objects/:id')
  getObject(@Param('id', OutputObjectPipe) obj: OutputObject): OutputObject {
    return obj;
  }
}
