import * as jwt from 'jsonwebtoken';
import {Component, forwardRef, Inject} from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.interface';

@Component()
export class AuthService {
    static secret = 'hotelporhoras';

    constructor(private readonly usuarioService: UsuarioService) {}

    async createToken(usuario: string): Promise<any>  {
        const expiresIn = 60 * 30; // 30min
        let payload = { sub: usuario }; // NO PONER CONST
        const token = jwt.sign(payload, AuthService.secret, { expiresIn });
        return token;
        // console.log(typeof token);
        // console.log(payload);
        // jwt.verify(token, AuthService.secret, (err, decoded) => {
        //     if (!err) {
        //         console.log("No hay error");
        //         const payload = jwt.decode(token, AuthService.secret);
        //         console.log(payload);
        //     }
        // });
    }

    async validateUser(usuario: string): Promise<boolean> {
        const usuarioDocument: Usuario = await this.usuarioService.findByUsuario(usuario);
        if (usuarioDocument) {
            return usuarioDocument.usuario === usuario;
        } else {
            return false;
        }
    }

    async getUserValidatedFromToken(token: string): Promise<string> {
        let usuario: string = null;
        jwt.verify(token, AuthService.secret, (err, decoded) => {
            if (!err) {
                const payload = jwt.decode(token, AuthService.secret);
                usuario = payload.sub;
            } else {
                console.log('Error a la hora de verificar el token en "auth.service.ts".');
            }
        });
        return usuario;
    }

}