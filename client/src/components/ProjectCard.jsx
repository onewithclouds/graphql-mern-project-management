import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { GET_PROJECTS } from "../queries/projectQueries"
import { DELETE_PROJECT } from "../mutations/projectMutations"
import { useMutation } from "@apollo/client"
import DeleteProjectButton from "./DeleteProjectButton"

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">
                        {project.name}
                    </h5>
                    <a className="btn btn-light" href={`/projects/${project.id}`}>
                        View
                    </a>
                    <div className="align-items-center">
                     <DeleteProjectButton project={project} />
                    </div>
                    
                </div>
                    <p className="small">
                        Status: <strong>{project.status}</strong>
                    </p>
            </div>

        </div>
    </div>
  );
};


//Experimenting with Apollo cache updates

//  function DeleteProjectButton( { project }) {

//     // const navigate = useNavigate();

//     const [ deleteProject ] = useMutation( DELETE_PROJECT, {

//         variables: { id: project.id },
//         // onCompleted: () => navigate('/'),
//         // refetchQueries: [{ query: GET_PROJECTS}],

        
//         update(cache, { data: { deleteProject } }) {
//             const { projects } = cache.readQuery({
//                 query: GET_PROJECTS
//             });

            
//             cache.writeQuery({
//                 query: GET_PROJECTS,
//                 data:  { projects: projects.filter(function(item) {
//                     return item.id !== project.id
//                 }) },
//             });
//         },

//     });

//   return (
//     <div className="d-flex mt-5 ms-auto">
//         <button className="btn btn-danger m-2" onClick={ deleteProject }>
//             <FaTrash className='icon' /> Delete Project
//         </button>
//     </div>
//   )
// };

