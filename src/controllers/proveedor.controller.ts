import {Application} from "express"
import {ProveedorService} from "../services/proveedor.service"

export class ProveedorController{
    private prov_service: ProveedorService;
    constructor(private app:Application){
        this.prov_service = new ProveedorService();
        this.routes();
    }
    //Definicion de todas las rutas y el metodo con el cual estaremos trabajando
    private routes(){
        //como se llamara el endpoint
        this.app.route("/proveedores").get(this.prov_service.getAll);
        this.app.route("/proveedor/:id_prov")
        .get(this.prov_service.GetById)
        .put(this.prov_service.Update);
    }
}