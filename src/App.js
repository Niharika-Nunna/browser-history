import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {isEmpty: false, initialList: initialHistoryList, searchInput: ''}

  onDelete = value => {
    const {initialList} = this.state
    const filteredList = initialList.filter(eachItem => eachItem.id !== value)

    if (filteredList.length === 0) {
      this.setState({isEmpty: true, initialList: filteredList})
    } else {
      this.setState({initialList: filteredList})
    }
  }

  onInputChanged = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialList, searchInput} = this.state
    let {isEmpty} = this.state
    const newList = initialList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newList.length === 0) {
      isEmpty = true
    }

    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              value={searchInput}
              placeholder="Search History"
              onChange={this.onInputChanged}
            />
          </div>
        </div>
        <div className="content-container">
          {!isEmpty && (
            <ul className="list-container">
              {newList.map(eachItem => (
                <li key={eachItem.id} className="list-item">
                  <p className="time">{eachItem.timeAccessed}</p>
                  <div className="icon-holder">
                    <img
                      src={eachItem.logoUrl}
                      alt="domain logo"
                      className="logo-element"
                    />
                    <div className="content-holder">
                      <p className="name">{eachItem.title}</p>
                      <p className="website">{eachItem.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    className="delete-button"
                    type="button"
                    data-testid="delete"
                    onClick={() => this.onDelete(eachItem.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {isEmpty && (
            <div className="empty-container">
              <p className="empty-text">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
