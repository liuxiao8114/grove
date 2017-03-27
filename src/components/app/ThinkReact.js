import React from 'react';
import { render } from 'react-dom';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filterText: '', inStockOnly: false }
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
        <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products}/>
      </div>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    const placeName = 'Search...'
    return (
      <form>
        <input type="text" placeholder={placeName} value={this.props.filterText}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly}/>
            {' '}
            Only show products in stock
        </p>
      </form>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    let lastCategory = null
    let that = this
    function renderRow(product) {
      if(product.name.indexOf(that.props.filterText) === -1
      || (!product.stocked && that.props.inStockOnly)) return
      if(product.category !== lastCategory) {
        lastCategory = product.category
        let rows = []
        rows.push(<ProductCategoryRow categoryName={product.category} key={product.category}/>)
        rows.push(<ProductRow product={product} key={product.name}/>)
        return rows
      }
      return (
        <ProductRow product={product} key={product.name}/>
      )
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(renderRow)}
        </tbody>
      </table>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th>{this.props.categoryName}</th>
      </tr>
    )
  }
}
