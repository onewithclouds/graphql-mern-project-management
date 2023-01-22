import { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"
import { UPDATE_PROJECT } from "../mutations/projectMutations"


export default function EditProjectForm({ project }) {

    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [status, setStatus] = useState('');

    const [ updateProject ] = useMutation( UPDATE_PROJECT, {
  
        variables: { id: project.id, name, description, status },
        
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],

        // update(cache, { data: { updateProject } }) {
            
        //     const { projects } = cache.readQuery({
        //         query: GET_PROJECTS
        //     });
        //     cache.writeQuery({
        //         query: GET_PROJECTS,
        //         data:  { projects: projects.concat([addProject]) },
        //     });
        // }
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if( name === '' || description === '' || status === '') {
            return alert('Please fill in all fields')}

        updateProject( project.id, name, description, status );
        
        console.log("onSubmit EditProjectForm!");

        setName('');
        setDescription('');
        setStatus('');

    };


  return (
    <div className="mt-5">
        <h3>Update Project Details</h3>        
        <form onSubmit={ onSubmit }>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name}
                            onChange={ (e) =>  setName( e.target.value )}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            value={description}
                            onChange={ (e) =>  setDescription( e.target.value )}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select 
                            id="status" 
                            className="form-select" 
                            value={status} 
                            onChange={ (e) => setStatus(e.target.value) }
                        >
                            <option value="new">Not Started</option>
                            <option value="progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
    </div>
  )
}
