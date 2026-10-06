import { users } from "../database/db.js"

class userscontroller { 
   listarTodos (){
     return({
        status: users.length === 0 ? 400 : 200,
        data: null,
         message: "faltan datos indispensables"
      }
   )}
   listarUno (get){
      return ({
         status: users.length === 0 ? 400 : 200,
         data: null,
         message : "Listado exitosamente"
        
      })
   }
   agregarUno (post){
      return ({
         status: uuidv4,
         data: null,
         message: "Agregado exitosamente"
      })
   }
   editarUno (put){
      return ({
         status: users.length === 0 ? 400 : 200,
         data: null,
         message: "Fue editado exitosamente"
      })
   }
   eliminarUno (delete){
      
      return({
         status: users (req,res, newusers),
         data: null,
         message: "Eliminado exitosamente",
         if (condition) {[i,1]
            
         }
      })
   }
}

const userscontroller = new userscontroller
export default userscontroller