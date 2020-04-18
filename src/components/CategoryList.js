import React, {Component} from "react";
import { connect } from 'react-redux'
import { changeCategory } from '../store/actions/productActions'


class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.handleAllClick = this.handleAllClick.bind(this)
    this.handleVegetableClick = this.handleVegetableClick.bind(this)
    this.handleFruitClick = this.handleFruitClick.bind(this)
    this.handleNutsClick = this.handleNutsClick.bind(this)

  }

  handleAllClick() {
    this.props.changeCategory('all')
  }

  handleVegetableClick() {
    this.props.changeCategory('vegetable')
  }

  handleFruitClick() {
    this.props.changeCategory('fruit')
  }

  handleNutsClick() {
    this.props.changeCategory('nuts')
  }

  render() {
    return (
      <div className="category">
          <button className={this.props.category === 'all' ? "item active" : "item"} onClick={this.handleAllClick}>All</button>
          <button className={this.props.category === 'vegetable' ? "item active" : "item"} onClick={this.handleVegetableClick}>Vegetables</button>
          <button className={this.props.category === 'fruit' ? "item active" : "item"} onClick={this.handleFruitClick}>Fruits</button>
          <button className={this.props.category === 'nuts' ? "item active" : "item"} onClick={this.handleNutsClick}>Nuts</button>
      
      </div>
    );
    
  }
}

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategory: (value) => {dispatch(changeCategory(value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
