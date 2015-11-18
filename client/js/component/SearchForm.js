const React = require('react')
const ReactDOM = require('react-dom')
import SearchResult from './SearchResult'
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }
  onSubmit (event) {
    event.preventDefault()
    const keyword = ReactDOM.findDOMNode(this.refs.keyword).value
    this.setState({keyword: keyword})
    history.pushState('','','/?q='+keyword)
  }
  componentDidMount () {
    const keyword = this.props.keyword
    ReactDOM.findDOMNode(this.refs.keyword).value = keyword
    this.setState({keyword: keyword})
  }
  render () {
    return (<div>
      <form className='row search-form' onSubmit={this.onSubmit.bind(this)}>
        <input
          type='text'
          placeholder='Keywords'
          className='search-keyword'
          ref='keyword'/>
        <button>Search</button>
      </form>
      <SearchResult keyword={this.state.keyword} />
    </div>)
  }
}