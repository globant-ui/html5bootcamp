import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  state = {
    isEditing: false,
    editData: {}
  };

  deleteProject = (id) => {
    this.props.onDelete(id);
    this.exitEditMode();
  }

  editProject = (movie) => {
    this.setState({ isEditing: true, editData: movie });
  }

  exitEditMode = () => {
    this.setState({ isEditing: false, editData: {} });
  }

  onEditTitleChange = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    });
  }

  onSaveEdit = () => {
    const movie = this.state.editData;

    this.props.onEdit(movie.id, movie);
    this.exitEditMode();
  }

  onEditCategoryChange = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        category: e.target.value
      }
    });
  }

  render() {
    const { isEditing, editData } = this.state;
    // const isEditing = this.state.isEditing;
    // const editData = this.state.editData;

    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem
            onDelete={this.deleteProject}
            onEdit={this.editProject}
            key={project.title}
            project={project}
          />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Movies</h3>
        {projectItems}
        {isEditing && <div>     
          Edit Movies
          <a href="#" onClick={this.exitEditMode}>X</a>
          
          <div>
            <input type="text" value={editData.title} onChange={this.onEditTitleChange}/>
            <select onChange={this.onEditCategoryChange}>
                <option selected={editData.category === 'Good Movie'} value="Good Movie">Good Movie</option>
                <option selected={editData.category === 'Bad Movie'} value="Bad Movie">Bad Movie</option>
                <option selected={editData.category === 'Favourite'} value="Favourite">Favourite Movie</option>
            </select>
            <button onClick={this.onSaveEdit}>Save</button>
          </div>

        </div>
        }
                
      </div>
    );
  }
}

export default Projects;
