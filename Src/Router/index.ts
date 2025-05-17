import { Router } from 'express';
import interestRoutes from './interestRouter.ts';

const router = Router();

router.use('/interest', interestRoutes); // Prefixo para as rotas de juros: /api/v1/interest/simple

// Aqui você poderia adicionar outras rotas, por exemplo:
// import userRoutes from './userRoutes';
// router.use('/users', userRoutes);

export default router;
