import { DELETE_CLIENT } from "../mutations/clientMutations"
import { GET_CLIENTS } from "../queries/clientQueries";
import { FaTrash } from 'react-icons/fa';
import { useMutation } from "@apollo/client";

export default function DeleteClientButton( { client } ) {


    //updating clientRow list of clients after client delete by means of cache.readQuery-filter-cache.writeQuery, as opposed to refetchQueries
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
 //       refetchQueries: [{ query: GET_CLIENTS }],
        update(cache, { data: { deleteClient } }) { 
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.filter(client => client.id !== deleteClient.id) },
            });
        }
    });


  return (
    <button className='btn btn-danger btn-sm' onClick={deleteClient}>
        <FaTrash />
    </button>
  )
}
