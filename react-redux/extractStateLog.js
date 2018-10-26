class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    
    
    this.setState({
      input:event.target.value
    });
    console.log("instate input: " + this.state.input);

    
    

  }

  submitMessage(){
    //this.state.messages.push(this.state.input);
    console.log("messages before: " + this.state.messages);
    let message = this.state.input;
    this.setState({
      messages:  [...this.state.messages.concat([this.state.input])],
      input: ""
      });
    console.log("messages: " + this.state.messages);
  }

  render() {
    const myMessages = this.state.messages.map(function(currentValue){
        console.log("currentVals: " + currentValue);
        return <li>{currentValue}</li>;
    });
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange} value={this.state.input}/>
        <button id="myInput" name="Add message" onClick={this.submitMessage}>Add Message</button>
        <ul>
          {myMessages}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};