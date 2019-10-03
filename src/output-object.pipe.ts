// tslint:disable: max-classes-per-file
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

export class OutputObject {
  id: number;
}

@Injectable()
export class OutputObjectPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): OutputObject {
    return { id: parseInt(value, 10) };
  }
}
