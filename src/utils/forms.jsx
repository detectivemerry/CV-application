const formSettings = [
    { title : "Basic Information",
      fields : [
        {label :'First Name', id : 'firstName', inputType : 'text'}, 
        {label : 'Last Name',id : 'lastName', inputType : 'text'}, 
        {label : 'Email', id : 'email', inputType : 'text'},
        {label : 'Phone', id : 'phone', inputType : 'text'}],
      isReusable : false
    },
    { title : "Educational Experience",
    fields : [
      {label :'School Name', id : 'schoolName', inputType : 'text'}, 
      {label : 'Title of Study', id : 'titleOfStudy', inputType : 'text'}, 
      {label : 'Start date', id : 'startDate', inputType : 'date'},
      {label : 'End date', id : 'endDate', inputType : 'date'}],
      isReusable : true
    },
    { title : "Work Experience",
      fields : [
      {label :'Company Name', id : 'companyName', inputType : 'text'}, 
      {label : 'Position Title', id : 'positionTitle', inputType : 'text'}, 
      {label : 'Description', id : 'description', inputType : 'textarea'},
      {label : 'Start date', id : 'startDate', inputType : 'date'},
      {label : 'End date', id : 'endDate', inputType : 'date'}],
      isReusable : true
    }]

export default formSettings;