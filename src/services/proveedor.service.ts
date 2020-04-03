//ver ejemplo de mainservice
//Construccion del CRUD para proveedores
import {Request,Response} from "express";
import {Proveedor, IProveedor} from "../models/proveedor.model"
import { MongooseDocument } from "mongoose";

export class ProveedorService{

    public getAll(req:Request,res:Response) {
        Proveedor.find({},(err:Error,proveedores: MongooseDocument)=>{
            if(err){
                res.status(401).send(err);
            }
            //endpoint
            res.status(200).json(proveedores)
        });
    }    

    public GetById(req:Request,res:Response){
        Proveedor.findById(req.params.id_prov,(err:Error,proveedor:IProveedor)=>{
            if(err){
                res.status(401).send(err);
            }
            //endpoint
            res.status(200).json(proveedor? proveedor : {});
        });
    }

    //Payload que es lo que vamos a mandar por el body
    public Update(req:Request,res:Response){
        //                               objeto que quieres ! actualizar
        Proveedor.findByIdAndUpdate(  req.params.id_prov ,req.body,(err:Error,proveedor:any)=>{
            if(err){
                res.status(401).send(err);
            }
            //             si encontro a proveedor hacer !  sino     hacer!
            res.status(200).json(proveedor? {"updated":true} : {"updated":false});
        })
    }

}
