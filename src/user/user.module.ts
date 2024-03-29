import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/user/schemas/user.schema'
import { UserService } from './user.service'

@Module({
    providers: [UserService],
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    exports: [UserService],
})
export class UserModule {}
