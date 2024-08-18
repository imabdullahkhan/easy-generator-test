import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import UserPasswordIsNotStrongException from 'src/domain/exceptions/user.password.exception';
import EmailIsNotValidException from 'src/domain/exceptions/email.exception';

@Catch()
export default class HttpExceptionFilter implements ExceptionFilter<Error> {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { message, status } = this.isBusinessException(exception);
    response.status(status).json({
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public isBusinessException(exception: Error): any {
    if (exception instanceof UserPasswordIsNotStrongException) {
      return {
        message: exception.message,
        status: 400,
      };
    }
    if (exception instanceof EmailIsNotValidException) {
      return {
        message: exception.message,
        status: 400,
      };
    }
    Logger.log(exception.stack);
    return {
      message: 'unknown',
      status: 500,
    };
  }
}
