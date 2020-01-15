import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAdmin && <p>This is private info. Please dont share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAuthenticated ?
      (<WrappedComponent {...props} />) :
      (<p>Please log in to view the Info</p>)
    }
    </div>
  )
};
//requireAuthentication
const AuthInfo = requireAuthentication(Info)

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />,document.getElementById('app'));
