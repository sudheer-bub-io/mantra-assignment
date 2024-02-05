<script setup>
import {employeesData} from "../stores/myStore"
const employeeData = employeesData();
const employeeFormdata = ref(employeeData.addUserForm)
const Header = ['sNo', 'Name', 'Age', 'Gender', 'DateOfJoining', 'Designation',];
const adduserClicked = ref(false)
const updateUserClicked = ref(false)

function handelAdduser(){
    adduserClicked.value=!adduserClicked.value
}
const updateFieldValue = (fieldName, value) => {
    console.log(fieldName)
    console.log(value)
  const field = studentDataForm.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
};
const handleFormSubmit = (formData, message) => {
    console.log(formData)
    console.log(message)
    const addUserData = {
        sNo:employeeData.employeesInfo.length+1,
        Name:formData.Name,
        Age:formData.Age,
        DateOfJoining:formData.DateOfJoining,
        Gender:formData.Gender,
        Designation:formData.selectDesignation
    }
    console.log(addUserData)
    employeeData.employeesInfo.push(addUserData)
}
function deleteEmployee(id){
 
    console.log(id);
    employeeData.employeesInfo = employeeData.employeesInfo.filter(x => x.sNo !== id);

}
</script>

<template>
    <h1> Employee data</h1>
    <button @click="handelAdduser">AddUser</button>
    <table class="styled-table">
        <thead>
          <tr>
            <th v-for="header in Header" :key="header">{{ header }}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employeeData.employeesInfo" :key="index">
            <td v-for="(value, key) in item" :key="key">{{ value }}</td>
            <td>
              <button @click="deleteEmployee(item.sNo)">Delete</button>
              <button @click="UpdateEmployee(item.sNo,item.Name,item.DateOfJoining,item.Designation,item.Gender)">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    <div v-if="adduserClicked">
        <FormComponent :fields="employeeFormdata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"/>
    </div>
    <div v-if="updateUserClicked">
        
    </div>
</template>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.day2 {
  margin-left: 20px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: lightgreen;
  color: white;
  font-size: 18px;
}

.styled-table {
  width: 80%;
  margin-left: 10%;
  border-collapse: collapse;
  margin-top: 50px;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.styled-table th {
  background-color: #f2f2f2;
}
</style>