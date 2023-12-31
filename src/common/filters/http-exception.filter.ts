import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {FastifyReply, FastifyRequest} from "fastify";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp(); // ws, rpc 도 가능
      const response = ctx.getResponse<FastifyReply>();
      const request = ctx.getRequest<FastifyRequest>();
      const status = exception.getStatus();

      response
          .status(status)
          .send({
              statusCode: status,
              timestamp: new Date().toISOString(),
              path: request.url,
          });
  }
}