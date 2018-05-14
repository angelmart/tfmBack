import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioDto } from '../usuario/user.dto';
import { UsuarioService } from 'usuario/usuario.service';
@Controller(AuthController.URL)
export class AuthController {
    static URL: string = 'auth';
    constructor(private readonly authService: AuthService, private readonly usuarioService: UsuarioService) {}
    @Post()
    async authenticate(@Body() usuarioDto: UsuarioDto): Promise<any> {
        const exito: boolean = await this.authService.validateUser(usuarioDto.usuario);
        let token;
        if (exito) {
            token = await this.authService.createToken(usuarioDto.usuario);
            console.log('Usuario autenticado con EXITO.');
        }
        // else{
        //     this.usuarioService.create(usuarioDto);
        //     token = await this.authService.createToken(usuarioDto.usuario);
        //     console.log('Usuario autenticado con EXITO.');
        // }
        return new Promise((resolve, reject) => {
            resolve({token});
        });
    }
}