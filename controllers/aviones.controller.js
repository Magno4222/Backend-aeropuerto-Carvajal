import userscontroller from "./users.controller.js";

class avionescontroller {
   listarAviones (){
     return({
        status: users.length === 0 ? 400 : 200,
        data: null,
         message: "faltan datos indispensables"
      }
   )}
      listarUnAvion (get){
         return ({
            status: users.length === 0 ? 400 : 200,
            data: null,
            message : "Avion Listado exitosamente"
           
         })
      }
      agregarUnAvion (post){
         return ({
            status: uuidv4,
            data: null,
            message: "Avion agregado exitosamente"
         })
      }
      editarUnAvion (put){
         return ({
            status: users.length === 0 ? 400 : 200,
            data: null,
            message: "Avion editado exitosamente"
         })
      }
      eliminarUnAvion (){
         
         return({
            status: users (req,res, newusers),
            data: null,
            message: "Avion eliminado exitosamente",
            if (condition) {[i,1]
               
            }
         })
      }
}

export default userscontroller