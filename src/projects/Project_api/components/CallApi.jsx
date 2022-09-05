import React from 'react';

export default class CallApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {api:[]}
    }

    async getData()
    {        
       const response =  await fetch("https://node-api91.herokuapp.com/crud/employee",
            {
                method:'GET',
                headers:{
                    "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEF1ZyAyNCAyMDIyIDE1OjQ0OjM2IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyX2lkIjoiNjMwNjQ3M2MxYjAzNTAyNjBlZGYyYWYxIiwibmFtZSI6IlNodWJodW0iLCJpYXQiOjE2NjEzNTU4NzYsImV4cCI6MTY2Mzk0Nzg3Nn0.x-_B-ueVyuEpBOcAbJ8IOcojevy9tj0pEj1GcrXCSiM",
                }
            }
            )
            return await response.json();
    }

    
    componentDidMount()
    {
        this.getData().then((response)=>{
            console.log(response);
            if(response.status == "success")
            {
                this.setState({api:response.data})
            }
        })
    }

    render()
    {
        return(
            <>
            <h1>Hello Call Api</h1>
            {
                this.state.api.map(v=>
                    <h1>{v.name}</h1>
                    
                    )
            }
            </>
        )
    }
}