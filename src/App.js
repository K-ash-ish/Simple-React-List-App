import './App.css';
import Overview from './Components/Overview';
import React , {Component} from "react"
import uniqid from "uniqid"

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        task: {
          inputValue: '',
          id: uniqid(),
          itemNumber: 1
        },
        tasks:[]
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.editItem = this.editItem.bind(this);
    }
    handleInput(event){
      event.preventDefault();
      this.setState(prevState =>({
        tasks : this.state.tasks.concat(this.state.task),
        task :{
          inputValue : ' ',
          id : uniqid(),
          itemNumber: prevState.task.itemNumber +1
        }
      }))
    }
    handleChange(event){
      this.setState({
        task:{
          inputValue : event.target.value,
          id: this.state.task.id,
          itemNumber: this.state.task.itemNumber
        }
      })
    }
    deleteItem(e){
      let {tasks} = this.state;

      let toDelete = e.target.parentElement.getAttribute("id");
      tasks.map((task,index) =>{
        if(task.id === toDelete){
          tasks.splice(index,1)
        }
      })
      this.setState({
        tasks: this.state.tasks,
      })      
    }
    editItem(e){
      let {tasks} = this.state;
      let toEdit = e.target.parentElement.getAttribute("id");
      tasks.map((task,index)=>{
        if(task.id === toEdit){
          
        }
      })
      console.log(toEdit)
    }
    render(){
      let {task, tasks} = this.state;
        return(
          <div>
            <input type = "text" value={task.inputValue} onChange = {this.handleChange} />
            <input type = "submit" onClick = {this.handleInput} />
            <Overview tasks = {tasks} deleteItem = {this.deleteItem} editItem ={this.editItem}/>
          </div>
        );
    }
}

export default App;
