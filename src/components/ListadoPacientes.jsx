import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span>Pacientes y Citas</span>
      </p>

      {/* aqui recibo los props del componente padre App que a su vez
      pasa la imporfamación al componente listado de pacientes
      los recibe y luego los mamnda al otro componente paciente 
      para que los muestre en pantalla */}

      {pacientes.map((paciente, index) => (
        <Paciente key={index} paciente={paciente} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
