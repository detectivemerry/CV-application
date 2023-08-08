export default function Preview({formData}){
    const { firstName, lastName, email, phone, schoolData, workData } = formData;
    return(
        <>
        <div>
            <h3>Name:</h3>
            {firstName}{lastName}
        </div>
        <div>
            <h3>email:</h3>
            {email}
        </div>
        <div>
            <h3>phone:</h3>
            {phone}
        </div>
        <div>
            <h3>school:</h3>
            {schoolData && schoolData.map((school)=>{
                return(school.schoolName)
            })}
        </div>
        <div>
            <h3>work:</h3>
            {workData && workData.map((work)=>{
                return(work.companyName)
            })}
        </div>
        </>
    )
}