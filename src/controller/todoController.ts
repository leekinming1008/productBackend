import  Plane  from "../models/planeModel";

export const getAllPlanes = async (_req: any, res: any) => {
    res.status(200).send(await Plane.find());
}

export const createNewPlane = async(req: any, res: any) => {
    const response = await Plane.create(req.body);
    res.status(201).json(response);
}

export const getPlane = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await Plane.findById(id);
    res.status(201).json(response);
}

export const deleteProduct = async (req: any, res: any) => {
    const {id} = req.params;
    const response = await Plane.deleteOne({_id: id});
    res.status(202).json(response);
    
}

export const editProduct = async (req: any, res: any)=> {
    const {id} = req.params;
    const editplane = req.body;

    const response = await Plane.updateOne({_id: id}, editplane);
    res.status(201).json(response);
}
