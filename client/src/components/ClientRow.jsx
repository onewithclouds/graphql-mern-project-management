// import { FaTrash } from 'react-icons/fa';
// import { useMutation } from '@apollo/client';
// import { DELETE_CLIENT } from '../mutations/clientMutations';
// import { GET_CLIENTS } from '../queries/clientQueries';
import DeleteClientButton from './DeleteClientButton';

export default function ClientRow( { client }) {
    
//     //updating clientRow list of clients after client delete by means of cache.readQuery-filter-cache.writeQuery, as opposed to refetchQueries
//     const [deleteClient] = useMutation(DELETE_CLIENT, {
//         variables: { id: client.id },
//  //       refetchQueries: [{ query: GET_CLIENTS }],
//         update(cache, { data: { deleteClient } }) { 
//             const { clients } = cache.readQuery({ query: GET_CLIENTS });
//             cache.writeQuery({
//                 query: GET_CLIENTS,
//                 data: { clients: clients.filter(client => client.id !== deleteClient.id) },
//             });
//         }
//     });

  return (
    <tr>
        <td>{ client.name  }</td>
        <td>{ client.email }</td>
        <td>{ client.phone }</td>
        <td>
            <DeleteClientButton client={client} />
            
            {/* <button className='btn btn-danger btn-sm' onClick={deleteClient}>
                <FaTrash />
            </button> */}
        </td>
    </tr>
  );
}
