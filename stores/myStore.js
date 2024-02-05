import { defineStore } from "pinia";
export const employeesData = defineStore('employeeData', () => {

    const addUserForm = [
        { id: 1, type: "text", name: "Name", placeholder: "Name", value: '' },
        { id: 2, type: "text", name: "Age", placeholder: "UserAge", value: '' },
        {
            id: 3,
            type: "select",
            name: "Gender",
            options: [
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" }
            ],
            placeholder: "Select Gender",
            value: ''
        },
        {
            id: 4,
            type: "date",
            name: "DateOfJoining",
            placeholder: "Date Of Joining",
            value: ''
          },
        {
            id: 5,
            type: "select",
            name: "selectDesignation",
            placeholder: "Select Gender",
            options: [
                { value: "Engineer", label: "Engineer" },
                { value: "devloper", label: "developer" },
                { value: "Other", label: "Other" }
            ],
            value: ''
        }
        
    ]
    const employeesInfo = [
        {"sNo": "1","Name": "sudheer","Age": "21","Gender": "Male","DateOfJoining": "2024-02-05","Designation": "Engineer",}, 
        {"sNo": "2","Name": "john","Age": "25","Gender": "Male","DateOfJoining": "2023-01-15","Designation": "Manager",}
];
    return { employeesInfo,addUserForm };
  });