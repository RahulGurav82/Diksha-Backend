import { Router } from 'express'
import auth from '../middleware/auth.js'
import { CashOnDeliveryOrderController, getOrderDetailsController, paymentController, webhookStripe, getAllOrderDetailsController, cancelOrderController } from '../controllers/order.controller.js'

const orderRouter = Router()

orderRouter.post("/cash-on-delivery",auth,CashOnDeliveryOrderController)
orderRouter.post('/checkout',auth,paymentController)
orderRouter.post('/webhook',webhookStripe)
orderRouter.get("/order-list",auth, getOrderDetailsController)
orderRouter.get("/orders", getAllOrderDetailsController)
orderRouter.put("/orders/cancel/:orderId", cancelOrderController)

export default orderRouter