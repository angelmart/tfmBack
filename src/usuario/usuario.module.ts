import {Global, Module, forwardRef} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './usuario.schema';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  components: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}