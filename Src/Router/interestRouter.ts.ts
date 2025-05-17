import { Router } from 'express';
import { InterestController } from '../controller/interestController';

const router = Router();
const interestController = new InterestController();

router.post('/simple', interestController.calculateSimpleInterest);
router.post('/compound', interestController.calculateCompoundInterest);

export default router;
