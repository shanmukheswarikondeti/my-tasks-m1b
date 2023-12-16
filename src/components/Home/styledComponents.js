import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CreateTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: #131213;
  width: 40%;
  min-height: 100vh;
  height: auto;
`
export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`
export const FormHeading = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #f3aa4e;
`
export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`
export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #f8f8f8;
  margin-bottom: 10px;
`
export const Input = styled.input`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  padding-left: 15px;
  outline: none;
`
export const SelectInput = styled.select`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  padding-left: 15px;
  outline: none;
`
export const OptionInput = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`
export const FormBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  width: 125px;
  border-radius: 10px;
  background-color: #f3aa4e;
  color: #f1f5f9;
  border: none;
`
export const AddTaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  width: 60%;
  background-color: #000000;
  padding: 20px;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #f1f5f9;
`
export const TagListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
`
export const TagList = styled.li`
  display: flex;
  margin: 7px;
`
export const TagBtn = styled.button`
  font-size: 16px;
  font-weight: 800;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: #f1f5f9;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
`
export const TaskUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 0px;
`
export const TaskListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #323f4b;
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
`
export const TaskText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #f1f5f9;
`
export const TaskTag = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #323f4b;
  background-color: #f3aa4e;
  border: none;
  border-radius: 10px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
export const NoTaskText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f1f5f9;
  align-self: center;
  text-align: center;
  margin-top: 150px;
`
