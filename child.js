import React,{Component} from 'react'

class Child extends Component{
    render() {
        return (
          <div>
            <h3>Child Component</h3>
            
             {console.log(this.props.elementValue)}
          </div>
        );
      }
}
export default Child

