import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state={
        UserInfo:{
            name:"name",
            location:"undefined",
            // avatar_url:"https://dummy.com"
        }

    }
  }


  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/Gulshan-00")
    const json=await data.json();
    console.log(json);
    this.setState({
        UserInfo:json,
    })


  }

  render() {
    const {name, location, avatar_url}=this.state.UserInfo;
    return (
        <div className="user-card">
            <img src={avatar_url} alt="" />
            <h1>{name}</h1>
            <h1>{location}</h1>

        </div>
    );
  }
}

export default UserClass;
