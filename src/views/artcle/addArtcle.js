import React from 'react'
//import Editor from 'react-lz-editor'
import Editor from 'react-markdown'

class AddArtcle extends React.Component{
    constructor(props){
        super(props);
        this.state = { markdownContent: "## HEAD 2 \n <span>12</span>  \n ``` welcome ```\n \n  |||\n |----|----|",
            responseList: []
          }
        this.receiveHtml=this.receiveHtml.bind(this);
    }
    receiveHtml(e) {
        this.setState({markdownContent:e.target.value});
      }
    render(){
        let markdownContent=this.state.markdownContent;
        return(
            <div className="page">

             <textarea value={markdownContent} style={{width:'100%',height:200}} onChange={this.receiveHtml}>
             </textarea>
             <Editor escapeHtml={false} className="markdown-container" source={markdownContent} />
            </div>
         
        )
    }
}
export default AddArtcle