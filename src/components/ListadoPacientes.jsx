import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);

  {
    /* aqui recibo los props del componente padre App que a su vez
      pasa la imporfamación al componente listado de pacientes
      los recibe y luego los mamnda al otro componente paciente 
      para que los muestre en pantalla */
  }
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
            /*   setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente} */
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
