import '../styles/Preview.css'

export default function Preview({formData}){
    const { firstName, lastName, email, phone, schoolData, workData } = formData;
    return(
        <div class = "CV">
            <div class = "basic-information">
                <div class = "name section-header">
                    {firstName} {lastName}
                </div>
                <div class = "contact">
                    {email} | {phone} 
                </div>
            </div>
            
            <div class = "education">
                <div class = "section-header">Education</div>
                <hr/>
                {schoolData && schoolData.map((data)=>{
                    return(
                        <div class = "education-content">
                            <div class = "bold-text">
                                {data.titleOfStudy}
                            </div>
                            <div class = "name-date">
                                <div class = "bold-text">{data.schoolName}</div>
                                <div>|  {data.startDate} - {data.endDate}</div>
                            </div>
                        </div>

                    )
                })
                }
                
            </div>
            <div class = "work">
                <div class = "section-header">Work experience</div>
                <hr/>
                {workData && workData.map((data)=>{
                    return(
                        <>
                        <div class = "work-content">
                            <div class = "bold-text">
                                {data.positionTitle}
                            </div>

                            <div class = "name-date">
                                <div class = "bold-text">{data.companyName}</div>
                                <div>|  {data.startDate} - {data.endDate}</div>
                            </div>
                        </div>
                            <div>{data.description}</div>

                        
                        </>
                        

                    )
                })
                }
            </div>
        </div>
    )
}