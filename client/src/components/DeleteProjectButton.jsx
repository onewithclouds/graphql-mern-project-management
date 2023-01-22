
import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { GET_PROJECTS } from "../queries/projectQueries"
import { DELETE_PROJECT } from "../mutations/projectMutations"
import { useMutation } from "@apollo/client"




export default function DeleteProjectButton( { project }) {

    const navigate = useNavigate();

    const [ deleteProject ] = useMutation( DELETE_PROJECT, {

        variables: { id: project.id },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS}],

        // Experimenting with Apollo cache updates. 

        // update(cache, { data: { deleteProject } }) {
          
        //   try {
          
        //     const { projects } = cache.readQuery({
        //         query: GET_PROJECTS
        //     });


            
        //     cache.writeQuery({
        //         query: GET_PROJECTS,
        //         data:  { projects: projects.filter(function(item) {
        //             return item.id !== project.id
        //         }) },
        //     });
        // } catch (err) {
        //   console.log(err)
        // };
        // },

    });

  return (
    <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-danger m-2" onClick={ deleteProject }>
            <FaTrash className='icon' /> Delete Project
        </button>
    </div>
  )
}
