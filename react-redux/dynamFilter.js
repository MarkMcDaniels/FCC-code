class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => {
      if(user.online){
        return true;
      }
      
      }); // change code here
    
    
    
    const renderOnline = usersOnline.map((currentValue)=> {
      console.log(currentValue["username"]);
      return <li key={currentValue["username"]}>{currentValue["username"]}</li>;
      
    }
    ); // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>

           {renderOnline}
         </ul>
       </div>
    );
  }
};