import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import apiRoutes from './Router'; // Importa o agregador de rotas

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errorHandler(); // Adicionado um error handler básico
  }

  private middlewares(): void {
    this.express.use(express.json()); // Para parsear JSON no corpo das requisições
    this.express.use(express.urlencoded({ extended: true })); // Para parsear dados de formulário URL-encoded
    this.express.use(cors()); // Habilita CORS para todas as origens (ajuste em produção)
  }

  private routes(): void {
    this.express.get('/', (req: Request, res: Response) => {
      res.send('Calculadora de Juros API está funcionando!');
    });
    this.express.use('/api/v1', apiRoutes); // Define um prefixo para todas as rotas da API
  }

  // Middleware de tratamento de erro básico
  private errorHandler(): void {
    this.express.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack); // Log do erro para o console (em produção, use um logger mais robusto)
        res.status(500).send({ error: 'Algo deu errado!' });
      }
    );
  }
}

export default new App().express;
