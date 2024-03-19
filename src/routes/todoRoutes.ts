import express from "express"
import {getAllPlanes, createNewPlane, getPlane, deleteProduct, editProduct} from "../controller/todoController"

const router = express.Router();

router.route("/").get(getAllPlanes).post(createNewPlane);
router.route("/:id").get(getPlane).delete(deleteProduct).put(editProduct);


// get to the home page
// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to Our Express Server");
// })

export default router