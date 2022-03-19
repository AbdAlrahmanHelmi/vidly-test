import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utilis/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./listGroup";
import MoviesTable from "./common/moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movie: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movie: getMovies(),
      genres,
    });
  }

  handelDelete = (movie) => {
    const movies = this.state.movie.filter((m) => m._id !== movie._id);
    this.setState({
      movie: movies,
    });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movie];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movie: movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenraSelecte = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { pageSize, currentPage, movie, selectedGenre, sortColumn } =
      this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? movie.filter((m) => m.genre._id === selectedGenre._id)
        : movie;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCont: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCont, data: movies } = this.getPageData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              item={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenraSelecte}
            />
          </div>
          <div className="col-9">
            <p className="ml-4">Showing {totalCont} movies in data base</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handelDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>

        <Pagination
          itemCount={totalCont}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
