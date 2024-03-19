import  Plane  from "../models/planeModel";

export const getAllPlanes = async (_req: any, res: any) => {
    try {
        res.status(200).send(await Plane.find());
    } catch (error) {
        res.status(500).send("Error catch when calling the get all planes function.")
        console.log("Error catch when calling the get all planes function.", error);
    }
    
}

export const createNewPlane = async(req: any, res: any) => {
    try{
        const response = await Plane.create(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).send("Error catch when calling the create new planes function.")
        console.log("Error catch when calling the create new planes function.", error);
    }
    
}

export const getPlane = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const response = await Plane.findById(id);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).send("Error catch when calling the get planes function.")
        console.log("Error catch when calling the get planes function.", error);
    }
}

export const deleteProduct = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const response = await Plane.deleteOne({_id: id});
        res.status(202).json(response);
    } catch (error) {
        res.status(500).send("Error catch when calling the delete planes function.")
        console.log("Error catch when calling the delete planes function.", error);
    }   
}

export const editProduct = async (req: any, res: any)=> {
    try {
        const {id} = req.params;
        const editplane = req.body;
        const response = await Plane.updateOne({_id: id}, editplane);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).send("Error catch when calling the edit planes function.")
        console.log("Error catch when calling the edit planes function.", error);
    }
}
