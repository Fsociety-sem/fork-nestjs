import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api')
    app.use(cookieParser())
    const config = new DocumentBuilder()
        .setTitle('Forks')
        .setDescription('The forks API')
        .setVersion('1.0')
        .addTag('forks')
        .addBasicAuth()
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    await app.listen(8000)
}
bootstrap()
