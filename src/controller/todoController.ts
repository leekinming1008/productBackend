// Data
// const todos = [{id: 1, title: "coding"},{id: 2, title: "cleaning"}];
import plane from "../models/planeModel";

export const getAllPlanes = async (_req: any, res: any) => {
    res.status(200).send(await plane.find());
}

export const createNewPlane = async(req: any, res: any) => {
    const response = await plane.create(req.body);
    res.status(201).json(response);
}

export const getPlane = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await plane.findById(id);
    res.status(201).json(response);
}

// export const deleteProduct = (req: any, res: any) => {
//     const {id} = req.params;
//     const deleteItemIndex = todos.findIndex((obj) => obj.id.toString() == id)
//     console.log("delete item index: " + deleteItemIndex)
//     if (deleteItemIndex != -1) {
//         todos.splice(deleteItemIndex, 1);
//         res.status(201).send("Successfully delete the todo item")
//     } else {
//         res.status(204).send("Cannot found the delete item in the database");
//     }
    
// }

// export const editProduct = (req: any, res: any)=> {
//     const {id} = req.params;
//     const {title} = req.body;
//     const editItemIndex = todos.findIndex((obj)=> obj.id.toString() == id)
//     if (editItemIndex != -1) {
//         todos[editItemIndex].title = title;
//         res.status(201).send("Successfully edit the todo item")
//     } else {
//         res.status(204).send("Cannot find the edit item id in the database.")
//     }
    
//}