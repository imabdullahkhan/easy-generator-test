import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export default class HttpExceptionFilter implements ExceptionFilter<Error> {
    catch(exception: Error, host: ArgumentsHost): void;
    isBusinessException(exception: Error): any;
}
