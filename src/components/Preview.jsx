import '../styles/Preview.css'

export default function Preview({formData}){
    const { firstName, lastName, email, phone, schoolData, workData } = formData;
    return(
        <div class = "CV">
            <div class = "basic-information">
                <div class = "name">
                    {firstName}{lastName}
                </div>
                <div class = "contact">
                    <div>{email}</div>
                    <div>{phone}</div>
                </div>
            </div>
            <div class = "education">
                Education
                <hr/>
                {schoolData && schoolData.map((data)=>{
                    return(
                        <div class = "education-content">
                            <div>
                                {data.titleOfStudy}
                            </div>
                            <div>
                                {data.schoolName} | {data.startDate} - {data.endDate}
                            </div>
                        </div>

                    )
                })
                }
                
            </div>
            <div class = "work">

            </div>
        </div>
    )
}