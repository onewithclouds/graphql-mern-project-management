import { DELETE_CLIENT } from "../mutations/clientMutations"
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import { FaTrash } from 'react-icons/fa';
import { useMutation } from "@apollo/client";

export default function DeleteClientButton( { client } ) {


    //experimenting with cache updates

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
       refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS}],
        // update(cache, { data: { deleteClient } }) { 
        //     const { clients } = cache.readQuery({ query: GET_CLIENTS });
        //     const { projects } = cache.readQuery({ query: GET_PROJECTS });
        //     cache.writeQuery({
        //         query: GET_CLIENTS,
        //         data: { clients: clients.filter(client => client.id !== deleteClient.id) },
        //     });
        //     cache.writeQuery({
        //         query: GET_PROJECTS,
        //         data: { projects: projects.filter( project => project.clientId !== deleteClient.id) },
        //     });
        // }
    });


  return (
    <button className='btn btn-danger btn-sm' onClick={deleteClient}>
        <FaTrash />
    </button>
  )
}
