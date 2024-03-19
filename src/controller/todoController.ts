import  Plane  from "../models/planeModel";
import {Request, Response} from "express"

export const getAllPlanes = async (_req: Request, res: Response) => {
    try {
        const response = await Plane.find();
        res.status(200).json({
            status: "success",
            results: response.length,
            data: response,
        });
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        })
        console.error("Error catch when calling the get all planes function.", error);
    }
    
}

export const createNewPlane = async(req: Request, res: Response) => {
    try{
        const response = await Plane.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                plane: response,
            }
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        })
        console.error("Error catch when calling the create new planes function.", error);
    }
    
}

export const getPlane = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await Plane.findById(id);
        res.status(200).json({
            status: "success",
            data: response
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        })
        console.error("Error catch when calling the get planes function.", error);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await Plane.deleteOne({_id: id});
        res.status(202).json({
            status: "success",
            deletedItem: response});
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        })
        console.error("Error catch when calling the delete planes function.", error);
    }   
}

export const editProduct = async (req: Request, res: Response)=> {
    try {
        const {id} = req.params;
        const editplane = req.body;
        const response = await Plane.updateOne({_id: id}, editplane);
        res.status(201).json({
            status: "success",
            editPlane: response});
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        })
        console.error("Error catch when calling the edit planes function.", error);
    }
}
