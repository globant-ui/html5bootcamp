import React, { Component } from 'react';
import uuid from 'uuid';
import jQuery from "jquery";
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  state = {
    projects: [
      {
        id: uuid.v4(),
        title: 'Die Hard',
        category: 'Good Movie'
      },
      {
        id: uuid.v4(),
        title: 'Jaws',
        category: 'Favourite'
      },
      {
        id: uuid.v4(),
        title: 'Paul Blart Mall Cop 2',
        category: 'Bad Movie'
      }
    ]
  };

  handleAddProject = (project) => {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject = (id) => {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  } 

  handleEditMovie = (id, editedMovie) => {
    const projects = this.state.projects;

    const editedListOfMovies = projects.map(movie => {
      if (movie.id === id) {
        return { ...editedMovie, id };
      }

      return movie;
    });

    this.setState({ projects: editedListOfMovies });

    // this.setState(prevState => ({
    //   projects: prevState.projects.map(movie => movie.id === id ? { ...editedMovies, id } : movie)
    // }));
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <hr />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject} onEdit={this.handleEditMovie} />
      </div>
    );
  }
}

export default App;